# Introduction to the Internet

## What is the Internet?

The Internet is an infrastructure of hardware and software that transfers data between devices globally.

- **Infrastructure** — optical links, routers, protocols, naming services
- **Applications** — web (HTTP), video calls (Zoom), IoT, games — all built on top
- The Internet is NOT just the web; the web is one application that runs on the Internet

**Key insight**: The Internet is not a new type of network technology, but a solution for *tying together multiple different existing networks*.

---

## Why Internet Infrastructure is Interesting

### Generality and Heterogeneity
- Designed to work with **any** networking technology (Ethernet, WiFi, 5G, optical)
- Technologies are constantly evolving — the design must accommodate future tech
- Designed for **generality** (works with anything) and **heterogeneity** (technologies can differ)

### The Internet is Federated
- Multiple independently owned and operated networks **interconnected**
- Each network operator acts independently but **must cooperate** via common protocols
- Competing ISPs (e.g. AT&T, Comcast) cooperate to provide global connectivity
- Challenge: operators won't share confidential data, yet all must agree on protocols
- Challenge: innovation is hard — new features require universal adoption

### The Internet is Scalable
- Must support billions of users and diverse applications
- Operates **asynchronously** — data cannot move faster than the speed of light
- Designed for **failure at scale** — any component can fail at any time

---

## Protocols

A **protocol** defines how entities communicate:
- **Syntax** — format of messages (how to write them in 1s and 0s)
- **Semantics** — how to respond to messages

Standards are published as **RFC (Request For Comments)** documents by standards bodies:
- **IETF** — Internet Engineering Task Force — responsible for Internet RFCs
- **IEEE** — focuses on lower-layer electrical engineering standards

---

## Components of Internet Infrastructure

| Component | Description |
| --------- | ----------- |
| **End host** | Machines sending/receiving data (laptops, phones, servers) |
| **Link** | Connection between two machines (Ethernet, Wi-Fi, optical fiber) |
| **Switch / Router** | Forwards packets from one link toward the destination |
| **LAN** | Local Area Network — nearby hosts connected by same-technology links |
| **ISP** | Internet Service Provider — commercial network operator (AT&T, Comcast) |

- A **point-to-point** link connects exactly two machines
- A **shared link** (multi-access) connects multiple machines to the same physical link
- Routers connect multiple LANs to form the **Internet (a network of networks)**

---

## Layers of the Internet

The Internet is built bottom-up using layers of abstraction. Each layer uses the layer below as a building block.

| Layer | Name | Description |
| ----- | ---- | ----------- |
| 1 | **Physical** | Transmit raw bits (voltages, radio waves, light pulses) across space |
| 2 | **Link** | Group bits into packets/frames; connect machines within a local network |
| 3 | **Internet (IP)** | Route packets between networks — **best-effort** delivery only |
| 4 | **Transport** | Reliable delivery, reordering, splitting data into packets — end hosts only |
| 7 | **Application** | User applications (email, web, video) |

> Layers 5 and 6 (Session, Presentation) were part of the original OSI model but are obsolete in the modern Internet. Their functions are handled by Layer 7.

**Key principle**: Layers 1–3 are implemented everywhere (end hosts + routers). Layers 4 and 7 are only implemented at **end hosts**.

### Layer 3: Best-Effort Service Model
- IP provides **best-effort** delivery — tries to deliver but makes no guarantee
- Packets can be lost, corrupted, reordered, delayed, or duplicated
- This makes the network simpler to build; reliability is left to Layer 4

### Layer 3: Packet Abstraction
- Unit of data at Layer 3 is a **packet** — a small chunk of bytes
- Large data is split into multiple packets, each forwarded independently
- Each packet hops between routers until it reaches the destination

---

## Headers and Encapsulation

### Why Headers?
- A router receiving raw bits has no idea what to do with them
- Solution: attach a **header** (metadata) to each packet
- **Header** — metadata telling the network how to deliver the data
- **Payload** — the actual data (what the application cares about)

### What Goes in a Header?
| Field | Purpose |
| ----- | ------- |
| Destination address | Where to send the packet |
| Source address | Where the packet came from (for replies) |
| Checksum | Detect corruption in transit |
| Length | Size of the packet |

### Encapsulation
Each layer **wraps** a new header around the data from the layer above:

```
Layer 7 data:           [Application Payload]
After Layer 4 wraps:    [L4 Header | Application Payload]
After Layer 3 wraps:    [L3 Header | L4 Header | Payload]
After Layer 2 wraps:    [L2 Header | L3 Header | L4 Header | Payload]
```

At the destination, each layer **strips** its own header before passing data up.

Routers only read up to Layer 3 — they strip L1/L2 headers, read the L3 header, re-wrap in new L1/L2 headers, and forward to the next hop.

### Addressing at Different Layers
| Layer | Address Type | Example |
| ----- | ------------ | ------- |
| 7 | Human-readable name | `www.google.com` |
| 3 | IP address (location-based) | `74.124.56.2` |
| 2 | MAC address (hardware, fixed) | `AA:BB:CC:DD:EE:FF` |

---

## Network Architecture

### The Narrow Waist
The Internet has **one** protocol at Layer 3: **IP**. This is the "narrow waist."

```
Layer 7:  HTTP  SMTP  DNS  NTP  ...     (many)
Layer 4:  TCP        UDP              (a few)
Layer 3:       IP                    (one — the narrow waist)
Layer 2:  Ethernet  Wi-Fi  FDDI ...   (many)
Layer 1:  Optical  Copper  Radio ...  (many)
```

Everyone must speak IP, enabling any application to run over any link technology.

### End-to-End Principle
- Reliability should be implemented at the **end hosts**, not inside the network
- If the network implemented reliability, buggy routers could corrupt delivery — and the end hosts would still need to verify anyway
- Implementing it end-to-end is sufficient; adding it to the network adds unnecessary complexity
- **Clark's formulation**: "The function can completely and correctly be implemented only with the knowledge and help of the application at the end points."

### Demultiplexing
- IP header contains a field indicating which Layer 4 protocol to use (TCP or UDP)
- TCP/UDP headers contain **port numbers** to direct packets to the correct application
- **Well-known ports** (0–1023): reserved for servers (e.g. HTTP=80, HTTPS=443)
- **Ephemeral ports** (1024–65535): assigned to clients dynamically
- A **socket** is the OS mechanism connecting an application to a specific port

---

## Designing Resource Sharing

### Statistical Multiplexing
Links and routers have finite capacity. How do we share among many users?

- **Static allocation** — give each user a fixed share (wasteful when users are idle)
- **Statistical multiplexing** — dynamically allocate based on demand
  - "The peak of aggregate demand << the aggregate of peak demands"
  - Works because users don't all peak simultaneously

### Circuit Switching vs. Packet Switching

| | Circuit Switching | Packet Switching |
| - | ----------------- | ---------------- |
| How it works | Reserve bandwidth before sending (like making a restaurant reservation) | Send packets as-is, best-effort (first-come first-serve) |
| Abstraction | Guaranteed bandwidth for the duration of flow | No guarantee |
| Efficiency | Less efficient — reserved bandwidth may be unused | More efficient — bandwidth shared dynamically |
| Failure handling | Hard — millions of flows must re-establish reservations | Easy — just reroute packets |
| Complexity | Very complex (state consensus across all routers) | Simpler |
| Used in | Phone networks, MPLS, dedicated leased lines | Modern Internet (default) |

**The Internet uses packet switching.** Circuit switching was considered in the 1990s but proved too complex and inefficient for bursty web/email traffic.

---

## Links

### Properties of a Link

| Property | Description | Formula |
| -------- | ----------- | ------- |
| **Bandwidth** | Bits per second (width of the pipe) | — |
| **Propagation delay** | Time for a bit to travel across the link (length of the pipe) | — |
| **Bandwidth-Delay Product (BDP)** | Number of bits in the pipe at any instant | BW × delay |

**Packet delay** = transmission delay + propagation delay + queuing delay

- **Transmission delay** = packet size / bandwidth (time to put all bits on the wire)
- **Propagation delay** = link length / speed of light (time to travel)
- **Queuing delay** = time spent waiting in a router's queue

### Overloaded Links
- **Transient overload** — two packets arrive simultaneously; router queues one
- **Persistent overload** — incoming rate exceeds outgoing capacity; packets are dropped
- Solution: congestion control tells senders to slow down
