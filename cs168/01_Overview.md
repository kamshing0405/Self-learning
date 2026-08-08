# CS 168 Overview

## Introduction to the Internet: Architecture and Protocols

CS 168 is UC Berkeley's undergraduate course on Internet architecture and protocols.

> Course description: An introduction to the Internet architecture. Topics include layering, addressing, intradomain routing, interdomain routing, reliable delivery, congestion control, and the core protocols (TCP, UDP, IP, DNS, HTTP) and network technologies (Ethernet, wireless).

## Course Units

| Unit | Topic |
| ---- | ----- |
| 1 | Introduction — Internet overview, layers, headers, architecture, resource sharing, links |
| 2 | Routing — Intra-domain (distance-vector, link-state) and inter-domain (BGP) |
| 3 | Transport — Reliability, TCP, congestion control |
| 4 | Applications — DNS, HTTP |
| 5 | End-to-End — Ethernet, ARP, DHCP, NAT, TLS |
| 6 | Datacenters — Topologies, congestion control, SDN |
| 7 | Beyond Client-Server — Multicast, overlay networks |
| 8 | Wireless — Wireless links, cellular |

## Key Design Properties of the Internet

| Property | Description |
| -------- | ----------- |
| **Generality** | Works with any network technology (Ethernet, WiFi, cellular, optical) |
| **Heterogeneity** | Accommodates vastly different link types and capacities |
| **Federated** | Multiple independently owned networks cooperating via common protocols |
| **Scalable** | Designed to support billions of devices operating asynchronously |
| **Best-effort** | Layer 3 delivers packets with no guarantee — reliability is end-to-end |

## Protocol Stack Summary

| Layer | Name | Role | Examples |
| ----- | ---- | ---- | -------- |
| 7 | Application | User-facing services | HTTP, DNS, SMTP, NTP |
| 4 | Transport | Reliable delivery, flows | TCP, UDP |
| 3 | Internet | Route packets across networks | IP |
| 2 | Link | Send packets within a local network | Ethernet, Wi-Fi |
| 1 | Physical | Transmit bits across a medium | Copper wire, optical fiber, radio |
