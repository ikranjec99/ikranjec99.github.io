---
title: "Homelab Foundations: Starting My Self-Hosting Journey"
pubDate: 2026-05-17 #Y-M-D
description: "The first part of my self-hosting journey: hardware, Proxmox, networking, Cloudflare DNS, and the idea behind the setup."
author: "Ivan Kranjec"
tags: ["Homelab", "Proxmox", "Networking"]
image: { url: "/blogs/homelab-foundations/cover.svg", alt: "Homelab foundations cover" }
---

# Why self-hosting?

Self-hosting was one of those ideas that kept sitting in the back of my head for a while. I use a lot of small tools every day, and at some point I started asking myself a simple question: why should every useful service live somewhere else?

I did not want to build a giant server rack or pretend that my apartment is suddenly a data center. The idea was much simpler. I wanted a small, quiet machine that could run a few services, teach me more about Linux and networking, and give me more control over the tools I use.

This is planned as a three-part series. In this first part I will cover the base setup: the machine, the operating system choice, the network idea, Cloudflare DNS, and the first services that made the whole thing feel real.

# The machine

For the hardware, I bought a Lenovo ThinkCentre M710q Tiny.

Current specs:

- **CPU**: Intel Core i7-6700T
- **RAM**: 32 GB DDR4
- **Boot drive**: 256 GB SATA SSD
- **Network**: connected directly to the router over LAN

<img src="/blogs/homelab-foundations/machine.webp" alt="Lenovo ThinkCentre M710q Tiny used for the homelab">

I like this kind of machine for a homelab because it is small, quiet, power efficient, and still strong enough for a lot of self-hosted services. The i7-6700T is not new hardware, but for containers, small VMs, reverse proxying, dashboards, file tools, and experiments, it is more than enough.

The 32 GB of RAM was important to me because I did not want to feel blocked immediately after installing a few services. Storage can always be expanded later, but memory is what gives you room to test things without constantly fighting the machine.

The 256 GB SATA SSD is currently used as the main boot drive. It is enough for the system and the first services, but I already see this as the starter disk, not the final storage plan. If this setup grows, storage will probably become its own topic in a later part.

# Clean Linux install or hypervisor?

The first real decision was whether to install a clean Linux distro directly on the machine or use a hypervisor like Proxmox.

A clean Linux install would have been perfectly fine. Something like Debian or Ubuntu Server would keep the setup simple, and I could run everything with Docker from day one. That approach has a lot of advantages: fewer layers, fewer moving parts, and a very direct mental model.

But I wanted this machine to be more than just one Docker host. I wanted a base where I could create containers, spin up VMs, experiment safely, rebuild quickly, and keep different workloads separated. That pushed me toward Proxmox.

So I installed **Proxmox VE** on the ThinkCentre.

For my use case, Proxmox made sense because it gives me:

- a clean web UI for managing the machine
- LXC containers for lightweight services
- VMs when I need a full operating system
- snapshots and backups as the setup grows
- a better playground for learning infrastructure properly

<img src="/blogs/homelab-foundations/proxmox.webp" alt="Proxmox dashboard running on the homelab machine">

This also made the project feel less locked in. If I mess up one container, I do not have to destroy the whole host. If I want to test a different Linux distribution, I can do it inside a VM. If one service needs to be separated more carefully, I have options.

# Basic network idea

The physical network setup is simple for now. The ThinkCentre is plugged directly into my router over LAN. No WiFi, no extra switches, no complicated VLAN setup yet.

The server uses a reserved local IP address on my home network:

```text
192.168.0.x
```

Most of the first internal services point to that address. The goal was to keep the first version simple and understandable:

```text
router -> ThinkCentre M710q -> Proxmox -> containers/services
```

At this stage, I cared more about getting a working foundation than designing the perfect network. VLANs, firewall rules, segmented networks, and a more serious security model can come later. First I wanted to understand the path from a domain name to a service running inside my homelab.

# Buying a domain and using Cloudflare

I also wanted proper names for services instead of remembering IP addresses and ports. Typing something like `nextcloud.example.com` feels much better than typing a local IP address with a random port, especially once the number of services starts growing.

For DNS, I decided to use **Cloudflare**. The idea was simple: buy a domain, manage DNS in one place, and create clean subdomains for the services running inside the homelab.

Later, I added **WireGuard** for remote access. Instead of exposing each service individually on the router, I exposed a single UDP port for the VPN using WireGuard's default port, `51820`. This keeps the public surface much smaller: I connect to the VPN first, then access the homelab as if I were on the local network.

# Nginx Proxy Manager

After DNS, the next piece was **Nginx Proxy Manager**.

The reason for using it is simple: I wanted one place that receives requests for my service names and forwards them to the correct internal service. Instead of remembering ports for everything, I can create proxy hosts like:

```text
nextcloud.mydomain.com -> internal Nextcloud container
vault.mydomain.com -> internal Vaultwarden container
homepage.mydomain.com -> internal dashboard
```

Nginx Proxy Manager also gives me a convenient UI for managing proxy hosts and certificates. I know everything could be done manually with Nginx config files, but at the beginning I wanted something fast, visual, and easy to adjust while I am still moving services around.

This was the moment where the setup started to feel like an actual homelab instead of just a Linux box on my network.

# What I wanted to install first

I did not want to start with too many services at once, but I also wanted a small collection that would be useful immediately.

The first planned services were:

- **Nginx Proxy Manager** for reverse proxying
- **Homepage** as a dashboard for all services
- **Dockge** for managing Docker Compose stacks
- **Nextcloud** for personal cloud storage
- **Vaultwarden** for password management
- **Stirling PDF** for PDF tools
- **Excalidraw** for diagrams and quick sketches
- **WireGuard** for VPN access back into the network

Homepage became the central place where I could quickly see and open everything running in the homelab.

<img src="/blogs/homelab-foundations/homepage.webp" alt="Homepage dashboard with homelab services">

This list may change as I learn more, but it gave me a clear direction. Some services are practical, some are for learning, and some are simply nice to have.

# The idea behind the setup

The main goal was not only to host apps. The goal was to understand the whole chain.

I wanted to learn how a request moves through the system:

```text
domain -> DNS -> router -> reverse proxy -> container -> service
```

I also wanted a setup that could grow slowly. Starting with Proxmox gives me a base for VMs and containers. Starting with Cloudflare gives me proper DNS management. Starting with Nginx Proxy Manager gives me a clean way to route services. Starting with WireGuard gives me a safer path for remote access.

This first part is the foundation. Nothing here is final yet, and that is fine. The goal was to get from zero to a working base that I can build on.

# What comes next?

In the next part, I want to go deeper into the actual services: how I started running them, what worked nicely, what was annoying, and how I organized things with Docker, Dockge, and Proxmox containers.

For now, the important part is done: I have a tiny machine running Proxmox, connected over LAN, with DNS records in Cloudflare and the first building blocks ready for self-hosting.

That is where the homelab really starts.
