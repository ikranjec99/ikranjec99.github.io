---
title: "Building a QR Code Generator API with .NET 8"
pubDate: 2025-01-25 #Y-M-D
description: "Learn how to generate QR codes seamlessly using .NET 8 and the QRCoder library. Simple, fast, and efficient."
author: "Ivan Kranjec"
tags: [".NET 8", "API", "QRCoder"]
image: { url: "/blogs/qr-code-generator/qr-code-meme.webp", alt: "QR code meme" }
---

# Why fiddling with QR codes in 2025?
QR codes have become an integral part of our digital lives. From scanning menus at restaurants to enabling contactless payments, their versatility makes them a must-have in many applications. If you’re a software engineer working with .NET, you’re in luck! The [QRCoder](https://github.com/codebude/QRCoder) library provides a simple and efficient way to generate QR codes in just a few lines of code.

# Why am I doing this?
My family members always had problems with remembering passwords for home WiFi networks. This is related to new smart TV's, new tablets, consoles, PC's, laptops ETC. I never tried to fix this because I always said to them "use tools like KeePass or write those passwords down and place them in a secure place" but those suggestions never worked. They never listened to me xD. At one point I saw a solution where you could scan QR code with your mobile device and device would automatically connect to network defined behind that QR code. What I wanted to do is create simple API that would give me printable QR codes so I could stick those printed QR codes directly on routers.

# Why QRCoder?
[QRCoder](https://github.com/codebude/QRCoder) is a popular, open-source library for generating QR codes in .NET applications. Here are some reasons why you should consider it for you use case:

- **Ease of use**: Very straightforward API that is well documented and allows you to generate QR codes with minimal effort.
- **Lightweight**: Compact library with 0 dependencies to external libraries
- **Support for many use cases**: Currently, [QRCoder](https://github.com/codebude/QRCoder) supports 21 use cases and implementing your own, custom payload generator is quite easy. 

# Getting started

## My implementation of QRCoder library as .NET 8 API
✨[Github repo](https://github.com/ikranjec99/qr-code-generator)

## Install QRCode library

If you’re starting a new project, you can install the QRCoder NuGet package by running the following command:
```bash
dotnet add package QRCoder
```
Alternatively, ensure the library is already included if you’re working within the cloned repository.

## Make a simple helper for generating QR codes
```csharp
public static class QrCodeGeneratorHelper
{
    public static byte[] GenerateCode(string payload, int pixelPerModule)
    {
        var qrGenerator = new QRCoder.QRCodeGenerator();
        var qrCodeData = qrGenerator.CreateQrCode(payload, QRCoder.QRCodeGenerator.ECCLevel.Q);
        using var qrCode = new PngByteQRCode(qrCodeData);
        return qrCode.GetGraphic(pixelPerModule);
    }
}
```

Helper can be used as shown in example below and is universal to any kind of payload. Pixel per module equates to how many pixels can be laid across each barcode module. This is solved in project configuration and should be configurable in appsettings.json.

## Configuration
Previously mentioned PPM - pixel per module can be made configurable per QR code type. What does it mean and why should it be configurable?
You should always aim to simplify process of changing your project configuration so I followed that example here and made PPM configurable per each use case (QR code type). Configuration is being held in appsettings.json and can easily be changed. Hardcoding stuff is bad practice and can require rewriting stuff just to make a simple change.

```csharp
public enum QrCodeType
{
    WiFi = 1,
    WhatsApp = 2,
    Url = 3,
    Sms = 4,
    PhoneNumber = 5
}

public interface IQrCodeConfiguration
{
    int PixelPerModule { get; init; }
    
    QrCodeType QrCodeType { get; init; }
}
```

## High level example of generating WiFi QR code
```csharp
// Here you should use generator for your use case. I'll use WiFi payload generator here but just as example.
var generator = new PayloadGenerator.WiFi(request.Ssid, request.Password, PayloadGenerator.WiFi.Authentication.WPA2);

// Grab your configuration for QR code type - this may vary per individual but I wanted to make this configurable in appsettings.json
var configuration = _configuration.FirstOrDefault(x => x.QrCodeType == QrCodeType.WiFi);

string payload = generator.ToString();

// result type will be byte array - byte[]
var result = QrCodeGeneratorHelper.GenerateCode(payload, configuration.PixelPerModule);

// we should return it as type Task<byte[]>
return await Task.FromResult(result);
```

## You may be asking yourself how does this look like from controller perspective?

```csharp
[ApiController]
[Route("api/generate")]
public class QrCodeGeneratorController : ControllerBase
{
    private readonly IMsisdnHandler _msisdnHandler;
    private readonly ISmsHandler _smsHandler;
    private readonly IUrlHandler _urlHandler;
    private readonly IWhatsAppMessageHandler _whatsAppMessageHandler;
    private readonly IWiFiHandler _wiFiHandler;

    public QrCodeGeneratorController(
        IMsisdnHandler msisdnHandler,
        ISmsHandler smsHandler,
        IUrlHandler urlHandler,
        IWhatsAppMessageHandler whatsAppMessageHandler,
        IWiFiHandler wiFiHandler
    )
    {
        _msisdnHandler = msisdnHandler;
        _smsHandler = smsHandler;
        _urlHandler = urlHandler;
        _whatsAppMessageHandler = whatsAppMessageHandler;
        _wiFiHandler = wiFiHandler;
    }

    [HttpPost("msisdn")]
    public async Task<IActionResult> Generate(MsisdnQrCodeRequest request)
    {
        var byteArray = await _msisdnHandler.GenerateQrCode(request);
        return File(byteArray, MediaType.Png);
    }
    
    [HttpPost("sms")]
    public async Task<IActionResult> Generate(SmsQrCodeRequest request)
    {
        var byteArray = await _smsHandler.GenerateQrCode(request);
        return File(byteArray, MediaType.Png);
    }
    
    [HttpPost("url")]
    public async Task<IActionResult> Generate(UrlQrCodeRequest request)
    {
        var byteArray = await _urlHandler.GenerateQrCode(request);
        return File(byteArray, MediaType.Png);
    }
    
    [HttpPost("whatsapp")]
    public async Task<IActionResult> Generate(WhatsAppMessageQrCodeRequest request)
    {
        var byteArray = await _whatsAppMessageHandler.GenerateQrCode(request);
        return File(byteArray, MediaType.Png);
    }
    
    [HttpPost("wifi")]
    public async Task<IActionResult> Generate(WiFiQrCodeRequest request)
    {
        var byteArray = await _wiFiHandler.GenerateQrCode(request);
        return File(byteArray, MediaType.Png);
    }
}
```
# Tradeoffs and production gaps

This project solves the QR generation path, but it is intentionally small. If I were turning it into production software, I would not stop at the controller and handler structure shown above.

The next things I would add are:

- request validation for each QR payload type
- structured logging around generation failures
- clearer error responses for invalid payloads
- rate limiting if the API is exposed publicly
- tests around payload formatting and image generation
- OpenAPI examples so the endpoints are easier to consume

The useful design choice here is separating payload construction from QR rendering. That keeps the core generator simple while allowing each payload type, such as WiFi, SMS, URL, or WhatsApp, to own its own validation and formatting rules.

# What I would change now

If I revisited this project, I would probably reduce the controller repetition. The separate endpoints are easy to understand, but the implementation starts to look mechanical as more payload types are added.

I would also make the configuration boundary more explicit. Pixel density is configurable, but the API could do a better job documenting how that value affects output size, scanning reliability, and print quality.

# Conclusion

QRCoder is a strong fit for this kind of .NET project because it is lightweight, customizable, and easy to wrap behind a small API. The important part is not only generating the QR image, but shaping the code so new payload types can be added without turning the controller into the center of the system.
