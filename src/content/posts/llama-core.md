---
title: "Building a simple .NET Core application with Meta’s LLaMA: Unlocking Contextual AI Interactions"
pubDate: 2025-03-01 #Y-M-D
description: "Learn how to leverage Meta’s LLaMA LLM for intelligent, context-aware AI interactions."
author: "Ivan Kranjec"
image: { url: "/blogs/llama-core/llama-core.jpg", alt: "Three llama's at farm" }
---

# What is LLM?
LLM - large language model could be explained as a "black box", designed to recognize user prompt and properly respond. LLMs are trained on masside datasets, often "scraped" from the internet. Performance of each language model depends on the quality of the data it has been trained on. Often, LLMs are specifically fine-tuned for specific tasks like answering domain specific questions, generating texts and translating languages...

# What is LLaMA and who created it?

LLaMA (Large Language Model Meta AI) is a family of large language models developed by Meta (formerly Facebook) to advance AI research. It is designed to be efficient, requiring less computing power than some other large models while maintaining strong performance in text generation and understanding. The goal of LLaMA is to contribute to AI research, improve language model efficiency, and provide a more accessible alternative to proprietary AI models.

# Unified AI building blocks for .NET

For this simple blog, I will be using new prerelease feature [Microsoft.Extensions.AI](https://learn.microsoft.com/en-us/dotnet/ai/ai-extensions#what-are-the-microsoftextensionsai-libraries). This new library provides useful abstractions for integrating AI services into .NET applications.
Main focus will be on [IChatClient](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.ai.ichatclient?view=net-9.0-pp) interface, which allows consumption of language models from various providers, such as an Azure OpenAI service or a local Ollama installation.
```csharp
private static IServiceCollection AddChatClient(this IServiceCollection services, AppSettings appSettings)
{
    services.AddChatClient(
        new OllamaChatClient(
            new Uri(appSettings.Ollama.Uri),
            appSettings.Ollama.ModelId
        )
    );

    return services;
}
```

# How to locally run LLaMA in docker?

Run llama image

```yaml
docker run -d -v ollama_data:/root/.ollama -p 11434:11434 --name ollama ollama/ollama:latest
```

Pull llama3 model into llama instance

```yaml
docker exec -it ollama ollama pull llama3
```

# Chat implementation

```csharp
using Microsoft.Extensions.AI;
using System.Text;

namespace LlamaCore.Core.Handlers;

public static class ApplicationHandler
{
    public static async Task RunAsync(IChatClient client)
    {
        var chatHistory = new List<ChatMessage>();

        while (true)
        {
            Console.Write("Ask me anything: ");
            string? userPrompt = Console.ReadLine();

            if (string.IsNullOrWhiteSpace(userPrompt))
                return; // Skip empty input

            chatHistory.Add(new ChatMessage(ChatRole.User, userPrompt));

            Console.Write("AI Response: ");
            var responseBuilder = new StringBuilder();

            await foreach (var item in client.GetStreamingResponseAsync(chatHistory))
            {
                Console.Write(item.Text);
                responseBuilder.Append(item.Text);
            }

            Console.WriteLine();
            chatHistory.Add(new ChatMessage(ChatRole.Assistant, responseBuilder.ToString()));
        }
    }
}
```

<img src="/blogs/llama-core/chat.png" alt="Example of chat">
