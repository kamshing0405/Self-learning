# Transport Layer

## Why We Need a Transport Layer

Layer 3 (IP) provides **best-effort** delivery — packets can be:
- Lost
- Corrupted
- Reordered
- Delayed
- Duplicated

The **transport layer** (Layer 4) solves these problems at the **end hosts** — not in the network (end-to-end principle).

---

## Key Abstractions

### Ports and Demultiplexing
- Transport headers include 16-bit **port numbers**
- Allows the OS to route incoming packets to the correct application
- **Well-known ports** (0–1023): servers use these (HTTP=80, HTTPS=443, SSH=22)
- **Ephemeral ports** (1024–65535): clients pick these randomly

### Bytestream Abstraction
- Applications think in terms of continuous **byte streams**, not individual packets
- TCP provides: "insert bytes at one end, same bytes appear at the other end"
- Transport layer splits streams into packets and reassembles them

---

## TCP vs. UDP

| Feature | TCP | UDP |
| ------- | --- | --- |
| Reliability | Yes — retransmits lost packets | No |
| In-order delivery | Yes | No |
| Connection-oriented | Yes — three-way handshake | No |
| Overhead | Higher | Lower |
| Use cases | Web (HTTP), email, file transfer | Streaming, DNS, gaming, VoIP |

**UDP** is useful when:
- Applications can tolerate loss (streaming video)
- Applications handle their own reliability (DNS)
- Low latency is critical (gaming, VoIP)

---

## Reliability: TCP Design

### At-Least-Once Delivery
- Sender numbers each packet with a **sequence number**
- Receiver sends **ACK (acknowledgment)** for each packet received
- If the sender doesn't receive an ACK within a timeout, it **retransmits**
- Duplicates are detected using sequence numbers and discarded

### Sliding Window
- Sender can have multiple unacknowledged packets "in flight" simultaneously
- **Window size** — how many bytes can be in-flight at once
- Larger window = higher throughput (especially on high-latency links)

### Three-Way Handshake (Connection Setup)
```
Client → Server:  SYN  (I want to connect)
Server → Client:  SYN-ACK  (OK, connecting)
Client → Server:  ACK  (Connected)
```

### Four-Way Teardown (Connection Close)
```
A → B:  FIN
B → A:  ACK
B → A:  FIN
A → B:  ACK
```

---

## Congestion Control

### The Problem
When too many senders send too fast, routers' queues fill up and **drop packets**.
- 1986: Internet congestion collapse — senders retransmitted lost packets at full speed, making things worse
- Fix (Karels & Jacobson): dynamically adjust TCP's window size based on packet loss

### Goals
1. **Efficiency** — maximize link utilization, minimize delay and loss
2. **Fairness** — allocate capacity equitably among connections

### Solution Approaches
| Approach | Description |
| -------- | ----------- |
| Reservations | Reserve bandwidth upfront — inflexible, not widely used |
| Pricing | Market-based fees — not widely deployed |
| **Dynamic adjustment** | Hosts monitor congestion signals and adjust send rate (used in practice) |

### AIMD (Additive Increase, Multiplicative Decrease)
TCP's standard congestion control algorithm:

- **Additive Increase** — increase window by 1 MSS (max segment size) per RTT if no loss
- **Multiplicative Decrease** — cut window in half on packet loss (drop = congestion signal)
- Results in a "sawtooth" pattern of throughput over time

### Slow Start
- TCP begins with a small window (1 MSS)
- Doubles the window each RTT until it reaches the **slow-start threshold (ssthresh)**
- Then switches to additive increase

### Router-Assisted Congestion Control
- **ECN (Explicit Congestion Notification)** — routers mark packets when queues are filling up
- Hosts reduce rate when they see ECN marks, before packets are dropped

---

## TCP Throughput Model

For a TCP connection with:
- RTT = round-trip time
- p = packet loss probability
- MSS = max segment size

**Throughput ≈ (MSS / RTT) × (1 / √p)**

Higher loss → lower throughput. Higher RTT → lower throughput.
