# End-to-End Protocols

## Ethernet (Layer 2)

### Overview
Ethernet operates at Layer 2 to enable communication **within a local network (LAN)**.

- MAC addresses are **48-bit** hardware addresses, assigned at manufacture
- Unlike IP addresses, MAC addresses are **not** location-based — they don't change
- Ethernet frames are the unit of data at Layer 2

### Ethernet Frame Structure
| Field | Description |
| ----- | ----------- |
| Preamble | Synchronization bits |
| Destination MAC | Where to send the frame |
| Source MAC | Who sent it |
| Type | Which Layer 3 protocol (e.g. 0x0800 = IPv4) |
| Payload | The IP packet |
| Checksum (FCS) | Error detection |

### MAC Address Types
| Type | Address | Description |
| ---- | ------- | ----------- |
| Unicast | Unique per device | Send to one device |
| Broadcast | `FF:FF:FF:FF:FF:FF` | Send to all devices on LAN |
| Multicast | Group address | Send to a group of devices |

### The Shared Medium Problem
Multiple machines on one wire risk **collisions** (simultaneous transmissions interfere).

**CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**:
1. **Listen** before transmitting — if the medium is busy, wait
2. **Transmit** when the medium is free
3. If a **collision** is detected, stop and send a jam signal
4. Wait a **random backoff time** (binary exponential backoff) before retrying

---

## ARP (Address Resolution Protocol)

### Problem
IP routing tells you the next-hop IP address, but Ethernet needs a **MAC address** to deliver the frame. How do you find the MAC address for a given IP?

### Solution: ARP
ARP translates IP addresses → MAC addresses within a LAN.

**Process**:
1. Host A wants to send to IP `192.168.1.5`
2. A broadcasts: **"Who has 192.168.1.5? Tell 192.168.1.1"**
3. Host with that IP replies (unicast): **"192.168.1.5 is at AA:BB:CC:DD:EE:FF"**
4. A caches the mapping in its **ARP table** (entries expire after a few minutes)

**When to use ARP**:
- **Local destination** → ARP for the destination's MAC directly
- **Remote destination** → ARP for the **default gateway's** MAC (router handles the rest)

### IPv6 Alternative
IPv6 uses **Neighbor Discovery Protocol (NDP)** instead of ARP — multicasts to a specific group address rather than broadcasting.

### ARP Attacks
- **ARP spoofing / ARP poisoning** — attacker sends fake ARP replies, associating their MAC with another host's IP — enables man-in-the-middle attacks

---

## DHCP (Dynamic Host Configuration Protocol)

### Purpose
When a device joins a network, how does it get an IP address? DHCP assigns addresses automatically.

### DHCP Process (DORA)
```
Client → Network:  DISCOVER  (broadcast — "I need an IP address")
Server → Client:   OFFER     (broadcast — "I offer you 192.168.1.100")
Client → Network:  REQUEST   (broadcast — "I'll take 192.168.1.100")
Server → Client:   ACK       (broadcast — "It's yours for X seconds")
```

### Key DHCP Settings
| Setting | Description |
| ------- | ----------- |
| IP address | Assigned to the client |
| Subnet mask | Identifies the local network |
| Default gateway | Router's IP for traffic leaving the LAN |
| DNS server | Where to resolve domain names |
| Lease time | How long the IP assignment lasts |

### DHCP Relay
DHCP uses broadcast — but broadcasts don't cross routers. A **DHCP relay agent** (IP helper) forwards DHCP messages across subnets to a centralized DHCP server.

---

## NAT (Network Address Translation)

### Why NAT?
IPv4 has only ~4 billion addresses — not enough for every device. NAT allows many devices to share a **single public IP address**.

### How NAT Works
| Phase | Description |
| ----- | ----------- |
| Outgoing | Router rewrites source IP/port: private IP → public IP, assigns a port |
| Incoming | Router uses the port number to map reply back to the correct private device |

**Example**:
- Private: `192.168.1.5:50000` → Public: `203.0.113.1:12345`
- Reply arrives at `203.0.113.1:12345` → NAT maps back to `192.168.1.5:50000`

This is also called **PAT (Port Address Translation)** or **NAT overload**.

### NAT Table
The router maintains a translation table:
| Private IP:Port | Public IP:Port |
| --------------- | -------------- |
| 192.168.1.5:50000 | 203.0.113.1:12345 |
| 192.168.1.10:60000 | 203.0.113.1:23456 |

### NAT Issues
- Breaks the **end-to-end principle** — external hosts can't initiate connections to private hosts
- Requires **hole punching** techniques for peer-to-peer applications
- Stateful — router must track all active connections
- Complicates some protocols (e.g. FTP, SIP/VoIP)

---

## TLS (Transport Layer Security)

### Purpose
TLS secures TCP connections against network attackers who might:
- **Read** packets in transit
- **Modify** packets in transit
- **Impersonate** a server

TLS operates at "Layer 4.5" — sits between TCP and the application layer.

### TLS Provides
| Property | Description |
| -------- | ----------- |
| **Encryption** | Data is unreadable to eavesdroppers |
| **Authentication** | Verifies you're talking to the real server |
| **Integrity** | Detects any tampering via message authentication codes (MAC) |

### TLS Handshake
```
1. Client → Server:  ClientHello (random number, supported cipher suites)
2. Server → Client:  ServerHello + Certificate
3. Client:           Verifies certificate (signed by trusted CA)
4. Client → Server:  Key exchange (e.g. RSA encrypted pre-master secret)
5. Both:             Derive session keys independently
6. Both:             Send "Finished" — verify keys match, no tampering
7. Encrypted communication begins
```

Keys are **never sent over the network** — both sides derive them from shared secrets.

### Certificates and PKI
- A **certificate** binds a public key to a domain name
- Signed by a **Certificate Authority (CA)** — a trusted third party
- Your browser has a built-in list of trusted CAs
- A **self-signed** certificate is not trusted by browsers by default

### HTTPS
- HTTP over TLS — **port 443**
- Encrypts all web traffic between browser and server
- Plain HTTP uses **port 80** and is unencrypted

---

## Layer 2 Routing: Spanning Tree Protocol (STP)

### Problem
If a LAN has multiple switches with redundant links, broadcast packets can loop forever (broadcast storm).

### Solution: STP
- Elects a **root bridge** (switch with lowest bridge ID)
- Each switch finds the shortest path to the root
- **Blocks** redundant ports to eliminate loops
- Creates a **tree topology** with no cycles

**Port states**: Blocking → Listening → Learning → Forwarding

If a link fails, STP recalculates and unblocks an alternate path.
