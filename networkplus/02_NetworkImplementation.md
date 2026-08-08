# 2.0 Network Implementation

## 2.1 Routing technologies

Routing is the process of `selecting paths` in a network along which to send network traffic.

### Static vs. Dynamic Routing

| Type            | Description                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------- |
| Static routing  | `Manually` configured routes, no overhead, no auto-update<br/>Lack of flexibility and scalability |
| Dynamic routing | Routes learned `automatically` via protocols                                                      |

### Dynamic Routing Protocols

| Protocol                                          | Type              | Metric                                              | Max Hops  | Standard                                                                                            |
| ------------------------------------------------- | ----------------- | --------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------- |
| BGP<br/>(Border Gateway Protocol)                 | `Path vector`     | AS path                                             | Unlimited | Open (internet routing between AS)                                                                  |
| RIP v1<br/>(Routing Information Protocol)         | `Distance vector` | `Hop count`                                         | 15        | Open (classful, no VLSM)<br/>boardcast, set to every device                                         |
| RIP v2                                            | Distance vector   | Hop count                                           | 15        | Open (classless, supports VLSM)                                                                     |
| OSPF<br/>(Open Shortest Path First)               | `Link state`      | Cost (`bandwidth`)                                  | Unlimited | Open                                                                                                |
| EIGRP(Enhanced Interior Gateway Routing Protocol) | Hybrid            | Composite (bandwidth + delay)<br/>minizes bandwidth | Unlimited | Cisco proprietary<br/>Uses `Successor` (best route) and `Feasible Successor` (instant backup route) |

### Route Selection

Determines the best path

| Criterion                    | Description                                                |
| ---------------------------- | ---------------------------------------------------------- |
| Administrative distance (AD) | Trustworthiness of routing source — lower = more preferred |
| Prefix length                | Longer prefix wins (more specific route)                   |
| Metric                       | Protocol-specific cost (hop count, bandwidth, etc.)        |

### Address Translation

| Type | Description                                                                                |
| ---- | ------------------------------------------------------------------------------------------ |
| NAT  | Network Address Translation — maps private IP to public IP                                 |
| PAT  | Port Address Translation — many private IPs share one public IP (also called NAT overload) |

### First Hop Redundancy Protocol (FHRP)

- Provides a virtual `gateway` IP shared by multiple routers
- If the active router `fails`, standby takes over automatically
- Examples: HSRP (Cisco), VRRP (open standard), GLBP

### Other Concepts

- **Virtual IP (VIP)** — shared IP address used by `FHRP` or `load balancers` / not tied to a specific physical network interface on a device
- **Subinterfaces** — logical divisions of a physical interface, used for router-on-a-stick inter-VLAN routing

---

## 2.2 Switching technologies and Features

### VLAN (Virtual Local Area Network)

VLAN (Virtual Local Area Network) is a logical way to split a single physical network into multiple isolated virtual networks

| Concept                        | Description                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------- |
| VLAN database                  | Table storing VLAN configurations                                             |
| SVI (Switch Virtual Interface) | Layer 3 interface for a VLAN — enables inter-VLAN routing on a Layer 3 switch |
| Configuring VLANs              | Reduce broadcast traffic and isolate sensitive data                           |

### Interface Configuration

| Setting          | Description                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| 802.1Q tagging   | Standard for VLAN tagging on trunk links                                                              |
| Native VLAN      | Handle untagged `VLAN` on a `trunk port` (on an 802.1Q)                                               |
| Voice VLAN       | Prioritize and separate voice traffic / QoS for voice over IP(VoIP)                                   |
| Link aggregation | Combines multiple network ports into into a single group <br/>LACP(Link Aggregation Control Protocol) |
| Speed            | Manually set or auto-negotiate interface speed                                                        |
| Duplex           | Half (one direction at a time) <br/>Full (both directions simultaneously)                             |

### Spanning Tree Protocol

- prevents network loop
- Elects a **root bridge** (lowest Bridge ID wins)
- Port states: Blocking → Listening → Learning → Forwarding

### MTU (Maximum Transmission Unit)

| Setting      | Size                                                     |
| ------------ | -------------------------------------------------------- |
| Standard MTU | 1500 bytes                                               |
| Jumbo frames | 9000 bytes — used in data centers for storage/VM traffic |

---

## 2.3 Wireless Devices and Technology

### Channels

| Setting                  | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| Channel width            | 20/40/80/160 MHz — wider = faster but more interference |
| Non-overlapping channels | 2.4 GHz: 1, 6, 11 — 5 GHz: many                         |

### Frequency Options

| Band          | Notes                                                       |
| ------------- | ----------------------------------------------------------- |
| 2.4 GHz       | Longer range, more interference, 3 non-overlapping channels |
| 5 GHz         | Faster speeds, shorter range, more channels                 |
| 6 GHz         | Wi-Fi 6E only, least congested                              |
| Band steering | Pushes capable clients to 5/6 GHz `automatically`           |

### 802.11 Wireless Standards

| Standard | Wi-Fi Name | Frequency       | Max Speed | Notes                               |
| -------- | ---------- | --------------- | --------- | ----------------------------------- |
| 802.11a  | —          | 5 GHz           | 54 Mbps   | Early 5 GHz, short range            |
| 802.11b  | —          | 2.4 GHz         | 11 Mbps   | Early 2.4 GHz, long range           |
| 802.11g  | —          | 2.4 GHz         | 54 Mbps   | Backward compatible with 802.11b    |
| 802.11n  | Wi-Fi 4    | 2.4 / 5 GHz     | 600 Mbps  | Introduced MIMO                     |
| 802.11ac | Wi-Fi 5    | 5 GHz           | 3.5 Gbps  | MU-MIMO, beamforming                |
| 802.11ax | Wi-Fi 6/6E | 2.4 / 5 / 6 GHz | 9.6 Gbps  | OFDMA, better in dense environments |
| 802.11be | Wi-Fi 7    | 2.4 / 5 / 6 GHz | 46 Gbps   | Multi-Link Operation (MLO)          |

### SSID

| Term  | Description                                                                                         |
| ----- | --------------------------------------------------------------------------------------------------- |
| BSSID | Basic Service Set Identifier<br/>Unique identifier that serves as the MAC address for a wireless AP |
| ESSID | Extended Service Set Identifier — name covering multiple APs                                        |

### Wireless Network Types

| Type           | Description                                      |
| -------------- | ------------------------------------------------ |
| Infrastructure | Clients connect through an AP                    |
| Ad hoc         | Direct peer-to-peer between devices (no AP)      |
| Mesh           | APs connect wirelessly to each other             |
| Point to point | Directional link between two buildings/locations |

### Encryption

| Protocol | Security Level                                              |
| -------- | ----------------------------------------------------------- |
| WPA2     | Strong — AES/CCMP encryption <br/>Security wireless network |
| WPA3     | Strongest — SAE (Simultaneous Authentication of Equals)     |

### Guest Networks

- Separate access networks that allow visitors limited internet
- **Captive portals** — `web page` users must accept before gaining internet access

### Authentication in Wireless Networks

| Type                 | Description                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------- |
| PSK (Pre-shared key) | Password `shared` with all users — home/small office<br/>Ease of setup but lower security |
| Enterprise (802.1X)  | Per-user authentication via `RADIUS` server                                               |

### Antennas

| Type            | Radiation Pattern                 | Use                  |
| --------------- | --------------------------------- | -------------------- |
| Omnidirectional | 360° — radiates in all directions | General coverage     |
| Directional     | Focused beam                      | Point-to-point links |

### AP Deployment Modes

| Mode        | Description                                |
| ----------- | ------------------------------------------ |
| Autonomous  | Self-managed, standalone AP                |
| Lightweight | Managed centrally by a wireless controller |

---

## 2.4 Important factors of physical installations

### Installation Locations

| Location                                 | Description                                                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| IDF<br>(Intermediate Distribution Frame) | Intermediate Distribution Frame — floor/closet level wiring<br/>To Distribute network connections closer |
| MDF<br>(Main Distribution Frame)         | Main Distribution Frame — building's main termination point                                              |

### Rack Considerations

| Factor                   | Description                                     |
| ------------------------ | ----------------------------------------------- |
| Rack size                | Measured in rack units (U), standard 42U        |
| Port-side exhaust/intake | Equipment airflow direction matters for cooling |

### Cabling

| Component                | Description                                 |
| ------------------------ | ------------------------------------------- |
| Patch panel              | Organizes and terminates structured cabling |
| Fiber distribution panel | Terminates and organizes fiber cables       |
| Lockable cabinets        | Secure physical access to equipment         |

### Power

| Component  | Description                                            |
| ---------- | ------------------------------------------------------ |
| UPS        | Uninterruptible power supply — battery backup          |
| PDU        | Power distribution unit — distributes power in rack    |
| Power load | Total wattage drawn — must not exceed circuit capacity |
| Voltage    | Must match equipment requirements                      |

### Environmental Factors

| Factor           | Description                                     |
| ---------------- | ----------------------------------------------- |
| Humidity         | Too high = condensation, too low = static       |
| Fire suppression | Clean agent systems (no water near electronics) |
| Temperature      | Maintain 18–27°C for equipment health           |
