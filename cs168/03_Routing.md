# Routing

## What is Routing?

**Routing** is the process of determining how packets travel between machines that are not directly connected.

- **Routing** — routers communicate to populate forwarding tables (global process)
- **Forwarding** — receiving a packet, looking up the next hop in the table, sending it on (local process)

---

## Intra-Domain vs. Inter-Domain

| Type | Description | Protocols |
| ---- | ----------- | --------- |
| **Intra-domain (IGP)** | Routing within a single local network | OSPF, IS-IS, RIP |
| **Inter-domain (EGP)** | Routing between different networks | BGP (the only one used at scale) |

- Each network chooses its own intra-domain protocol
- All networks must agree on the **same** inter-domain protocol → BGP

---

## Model for Intra-Domain Routing

### The Network as a Graph
- **Nodes** — routers (squares) and end hosts (circles)
- **Edges** — links between machines
- **End hosts** don't participate in routing — they send everything to the **default route** (gateway router)
- **Routers** forward packets; they don't generate their own traffic

### Forwarding Tables
Each router has a **forwarding table** (also called a routing table):

| Destination | Next Hop |
| ----------- | -------- |
| A | R1 |
| B | R3 |
| C | R3 |
| D | R4 |

- The router reads the destination from the packet header and forwards to the corresponding next hop
- In practice, routers map destinations to **physical ports** (which wire to send it out on)
- **Destination-based forwarding** — all packets to the same destination go the same way

### Routing State Validity
A routing state is **valid** if packets actually reach their destination — meaning no loops, no dead ends, no black holes. Validity must be evaluated globally, not just for a single router.

---

## Distance-Vector Routing

### How It Works
- Each router only knows about its **direct neighbors** and costs to reach them
- Routers share their routing tables with neighbors, who update their own tables
- Implements a **distributed Bellman-Ford** algorithm

**Algorithm (simplified)**:
1. Start knowing only directly connected neighbors
2. Receive neighbor's table: if `neighbor_cost + link_cost < my_cost`, update your table
3. Advertise your updated table to all neighbors
4. Repeat until convergence

### Count-to-Infinity Problem
When a link fails, outdated routing information can circulate in a loop:
- Router A thinks it can reach B via C; C thinks it can reach B via A
- Costs increment indefinitely as each advertises the other's bad route
- **Solution**: set a maximum cost (e.g. RIP uses max hop count = 15; 16 = infinity)
- **Mitigations**: split horizon (don't advertise a route back toward where you learned it), poison reverse

### Real-World Protocol
- **RIP (Routing Information Protocol)** — uses hop count as metric, max 15 hops

---

## Link-State Routing

### How It Works
Every router learns the **full network graph**, then runs shortest-path independently.

**Two phases**:
1. **Discovery** — each router floods its local link-state (neighbors + link costs) to the entire network
2. **Computation** — each router runs **Dijkstra's algorithm** (or Bellman-Ford) on the full graph

**Flooding**: Router broadcasts link-state; each receiver forwards to all neighbors (except the sender). Duplicate detection (via timestamps/sequence numbers) prevents infinite loops.

### Advantages vs. Distance-Vector
| | Distance-Vector | Link-State |
| - | --------------- | ---------- |
| Topology knowledge | Only neighbors | Full network graph |
| Convergence | Slower (count-to-infinity) | Faster |
| Privacy | Hides topology | Exposes full topology |
| Scalability | Better | Worse (stores full graph) |

### Real-World Protocols
- **OSPF (Open Shortest Path First)** — most common IGP
- **IS-IS (Intermediate System to Intermediate System)**

---

## Addressing and Scalability

### IP Addresses
- 32-bit (IPv4) or 128-bit (IPv6) addresses assigned to each interface
- Hierarchically structured — **network prefix** (who manages) + **host bits** (which host)
- **CIDR notation**: `10.0.0.0/8` means first 8 bits are the network prefix

### Prefix Matching
Forwarding tables use **longest prefix match** — pick the most specific matching prefix.

| Prefix | Next Hop |
| ------ | -------- |
| 0.0.0.0/0 | R1 (default) |
| 10.0.0.0/8 | R2 |
| 10.1.0.0/16 | R3 (more specific — wins) |

---

## Inter-Domain Routing: BGP

### Autonomous Systems (AS)
- An **AS** is a network controlled by a single entity (e.g. AT&T, UC Berkeley, Google)
- Each AS has a unique **AS Number (ASN)**
- BGP routes between ASes, not individual routers

### BGP: Path-Vector Protocol
BGP is based on distance-vector but advertises the **full AS path** instead of just cost:

- Each AS announces which IP prefixes it can reach and the AS path to get there
- **Loop detection**: if your own ASN appears in the path, discard the advertisement
- Allows **policy-based** routing — pick routes based on business relationships, not just cost

### Business Relationships (Gao-Rexford Rules)
| Relationship | Description |
| ------------ | ----------- |
| **Customer** | Pays you to carry traffic |
| **Provider** | You pay them to carry traffic |
| **Peer** | Mutual free exchange (settlement-free) |

**Import preference**: Customer routes > Peer routes > Provider routes

**Export rules**:
- Routes from customers → advertise to everyone (customers, peers, providers)
- Routes from peers/providers → advertise only to your customers

This ensures at least one side of every route is paying, making BGP economically stable.

### BGP Guarantee
If all ASes follow Gao-Rexford rules in a valley-free (hierarchical) AS graph, the network converges and all destinations remain reachable.
