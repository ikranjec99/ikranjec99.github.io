---
title: "I Got a Check Engine Light. So I Wrote a OBDeleven Log Parser."
pubDate: 2026-05-02 #Y-M-D
description: "I got a check engine light. So I decided to create a powerful log parser for OBDeleven, designed to extract and analyze data from automotive logs with ease."
author: "Ivan Kranjec"
image: { url: "/blogs/obdeleven-log-parser/log.webp", alt: "Log file from OBDeleven" }
---
# I Got a Check Engine Light. So I Wrote a Parser.

A few weeks ago my car threw a check engine light. Nothing dramatic — engine still running, no smoke, no weird noises. But that little amber icon has a way of occupying a corner of your brain until you deal with it.

I plugged in my OBDeleven dongle, opened the app, ran a full scan. Three faults. Cool, now I know. But then I thought — what if I want to track these over time? Compare logs between visits to the mechanic? Write a script that alerts me if a known fault comes back?

The OBDeleven app lets you export a log as a `.txt` file. So I did what any developer would do on a Sunday afternoon: I wrote a parser.

---

## The Log Format

The exported file is plain text, structured but not machine-friendly. It looks something like this:

```
OBDeleven vehicle history log
Date: 2026-04-18 14:17:58

    VIN: WVWZZZ3CZNE057729
    Car: Volkswagen
    Year: 2022
    Engine: DTSB  kW ( hp) l
    Mileage: 131921 km

---------------------------------------------------------------
01 Engine
    System description: R4 2.0l TDI
    Software number: 05L906022JN
    ...

    Faults:
        P008700 - Fuel Rail/System Pressure - Too Low
        Intermittent
            Priority - 2
            Malfunction frequency counter - 1
            km-Mileage - 131206 km
            Engine speed - 436.00 1/min
            Coolant temperature - 20 °C
            ...
            date - 2026-03-23 14:02:52
```

Human-readable, sure. But parsing it with a regex felt like a trap — too many edge cases, too fragile. The structure is actually hierarchical: the file splits into ECU modules, each module has a faults section, each fault has a freeze frame snapshot. That called for something more deliberate.

---

## The Approach: SplitOn

The insight that made everything clean was treating the file as a series of nested splits rather than a stream of lines to track with state flags.

```csharp
static IEnumerable<string[]> SplitOn(string[] lines, Func<string, bool> isHeader)
{
    var block = new List<string>();
    foreach (var line in lines)
    {
        if (isHeader(line) && block.Count > 0) { yield return [.. block]; block.Clear(); }
        if (isHeader(line) || block.Count > 0) block.Add(line);
    }
    if (block.Count > 0) yield return [.. block];
}
```

One utility method. With it, parsing modules becomes:

```csharp
foreach (var block in SplitOn(lines, IsEcuHeader))
{
    var meta   = TakeUntil(trimmed, l => l == "Faults:");
    var faults = ParseFaults(trimmed.Skip(meta.Length + 1).ToArray());
    ...
}
```

And parsing faults is the same pattern, just splitting on DTC lines instead of ECU headers. Each level of the hierarchy is just a `SplitOn` call.

---

## Identifying DTC Codes

DTC (Diagnostic Trouble Code) lines look like `P008700 - Fuel Rail/System Pressure - Too Low`. The code is always one letter followed by hex digits — because the numeric part is hexadecimal, not decimal. `P008A00` is a valid code. This burned me initially:

```csharp
// Wrong — misses codes like P008A00
code[1..].All(char.IsDigit)

// Correct
code.Length >= 6 && char.IsLetter(code[0]) && code[1..].All(char.IsAsciiHexDigit)
```

---

## Typed Models Over Magic Strings

The snapshot data inside each fault — RPM, temperatures, voltages — initially went into a `Dictionary<string, string>`. That works for parsing, but it's awful to consume. You end up writing `fault.Fields["Coolant temperature"]` everywhere and hoping the key matches exactly.

Instead, I map the dictionary to a proper record right after parsing:

```csharp
record FaultSnapshot(
    int      Priority,
    int      FrequencyCounter,
    int      MileageKm,
    double   EngineRpm,
    double   CoolantTempC,
    double   Voltage,
    DateTime? Date,
    ...
);
```

The mapping lives in a single extension method on `Dictionary<string, string>`:

```csharp
public static FaultSnapshot ToSnapshot(this Dictionary<string, string> f) => new(
    Priority:    f.Int("Priority"),
    EngineRpm:   f.Dbl("Engine speed"),
    CoolantTempC: f.Dbl("Coolant temperature"),
    ...
);
```

The dictionary is an implementation detail of the parser. The rest of the codebase only ever sees `FaultSnapshot`.

---

## The Output

Since the model is clean and typed, JSON serialization is one line:

```csharp
Console.WriteLine(JsonSerializer.Serialize<OBDLog>(log, new JsonSerializerOptions { WriteIndented = true }));
```

Which gives you something you can actually pipe into `jq`, store in a database, diff between two visits, or feed into anything else:

```json
{
  "LogDate": "2026-04-18T14:17:58",
  "Vehicle": {
    "Vin": "WVWZZZ3CZNE057729",
    "Car": "Volkswagen",
    "Year": 2022,
    "Mileage": 131921
  },
  "Modules": [
    {
      "Id": "01 Engine",
      "SystemDescription": "R4 2.0l TDI",
      "Faults": [
        {
          "Code": "P008700",
          "Description": "Fuel Rail/System Pressure - Too Low",
          "Status": "Intermittent",
          "Snapshot": {
            "Priority": 2,
            "EngineRpm": 436,
            "CoolantTempC": 20,
            "Voltage": 11.68,
            "Date": "2026-03-23T14:02:52"
          }
        }
      ]
    }
  ]
}
```

---

## What I Learned

A few things worth taking away from this:

**State machines are often the wrong instinct.** When I first looked at the file, my brain went straight to an enum with states and transition logic. That works, but it's verbose and hard to follow. Recognizing that the structure was hierarchical and using `SplitOn` recursively was simpler and more readable.

**DTCs are hex.** I didn't know this before. The five-digit part after the letter is hexadecimal. So `P008A00` is completely valid, and checking for digits only will silently drop real faults.

**Keep raw parsing separate from your model.** The `Dictionary<string, string>` intermediate step is fine — parsing is messy and untyped by nature. But don't let that messiness leak into your domain model. Map to typed records as early as possible and throw the dictionary away.

---

The full source is on GitHub: [ikranjec99/obdeleven-log-parser](https://github.com/ikranjec99/obdeleven-log-parser)

As for the check engine light — low pressure in the fuel system, likely my fault after changing fuel filter and not priming the system... Skill issue 🤣 🤣 🥀

---

*The sample log file included in the repository has been randomized. The VIN, engine details, mileage, and fault timestamps have all been replaced with fictitious values. The structure and fault codes are real, but nothing in there can be traced back to an actual vehicle.*
