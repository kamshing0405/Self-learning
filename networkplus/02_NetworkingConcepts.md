# 1.0 Networking Concepts (23%)

## 1.1 OSI model

| Layer        | Number | Description                                            |
| ------------ | ------ | ------------------------------------------------------ |
| Physical     | 1      | Transmission of raw bits over a medium                 |
| Data link    | 2      | Node-to-node data transfer, MAC addressing             |
| Network      | 3      | Logical addressing, routing (IP)                       |
| Transport    | 4      | End-to-end communication, TCP/UDP<br>Data segmentation |
| Session      | 5      | Manages sessions between applications                  |
| Presentation | 6      | Data format, encryption, compression                   |
| Application  | 7      | User-facing network services                           |

> Mnemonic (bottom to top): **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way

---

## 1.2 Compare and contrast networking appliances, applications, and functions

### Physical and Virtual Appliances

| Device        | Layer | Function                                                                                    |
| ------------- | ----- | ------------------------------------------------------------------------------------------- |
| Hub           | 1     | Broadcasts all traffic to every port — no intelligence, causes collisions, largely obsolete |
| Switch        | 2     | Forwards frames to specific port based on MAC address — no collisions<br>CAM table          |
| Router        | 3     | Routes traffic between networks using IP address                                            |
| Firewall      | 3–7   | Filters traffic by rules                                                                    |
| IDS/IPS       | 3–7   | Intrusion detection / intrusion prevention system                                           |
| Load balancer | 4–7   | Distributes traffic across multiple servers                                                 |
| Proxy         | 7     | Intermediary for client requests<br>Can filtering website                                   |
| NAS           | —     | Network-attached storage                                                                    |
| SAN           | —     | Storage area `network`                                                                      |
| Wireless AP   | 2     | Wireless access point                                                                       |
| Controller    | —     | Manages multiple APs centrally                                                              |

### Applications

| Application                       | Description                                                          |
| --------------------------------- | -------------------------------------------------------------------- |
| CDN<br>(Content delivery network) | Group of distributed proxy servers<br>Caches content closer to users |

### Functions

| Function | Description                                 |
| -------- | ------------------------------------------- |
| VPN      | Virtual private network — encrypted tunnel  |
| QoS      | Quality of service — traffic prioritization |
| TTL      | Time to live — limits packet lifetime       |

---

## 1.3 Summarize cloud concepts and connectivity options

### Cloud Networking and Gateways

| Concept                                       | Description                                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| VPC                                           | Virtual private cloud — isolated cloud network                                                                     |
| NFV                                           | Network functions virtualization — run network functions as software                                               |
| Network security groups                       | Cloud firewall rules applied to resources                                                                          |
| Network security lists                        | Subnet-level firewall rules                                                                                        |
| Internet gateway                              | Connects VPC to the internet                                                                                       |
| NAT gateway <br>(Network Address Translation) | Allows private resources to reach internet `without being exposed`<br>Hiding the internal IP address from external |

### Cloud Connectivity Options

| Option         | Description                                    |
| -------------- | ---------------------------------------------- |
| VPN            | Encrypted tunnel over internet                 |
| Direct Connect | Dedicated private connection to cloud provider |

### Deployment Models

| Model   | Description                             |
| ------- | --------------------------------------- |
| Public  | Shared infrastructure (AWS, Azure, GCP) |
| Private | Dedicated to one organization           |
| Hybrid  | Mix of public and private               |

### Service Models

| Model | Provider manages      | Customer manages |
| ----- | --------------------- | ---------------- |
| SaaS  | Everything            | Usage only       |
| IaaS  | Hardware, networking  | OS, apps, data   |
| PaaS  | Hardware, OS, runtime | Apps, data       |

### Other Key Concepts

- **Scalability** — ability to grow resources to meet demand
- **Elasticity** — automatically scale up/down based on load
- **Multitenancy** — multiple customers share the same infrastructure

---

## 1.4 Explain common networking ports, protocols, services, and traffic types

### Protocols and Ports

| Protocol                                           | Port                                                                     | Info                                                                                                    |
| -------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| FTP                                                | 20/21                                                                    | No secure                                                                                               |
| SFTP                                               | 22                                                                       |
| TFTP                                               | 69                                                                       |
| SSH                                                | 22                                                                       |
| Telnet                                             | 23                                                                       | No secure                                                                                               |
| SMTP<br>Simple Mail Transfer Protocol              | 25                                                                       |
| POP3 (Post Office Protocol Version 3)              | 110                                                                      |                                                                                                         |
| DNS                                                | 53                                                                       |
| DHCP                                               | 67/68                                                                    | Relay agents - forward DHCP requests and responses between clients and servers across different subnets |
| HTTP                                               | 80                                                                       |
| HTTPS                                              | 443                                                                      |
| NTP                                                | 123                                                                      |
| SNMP<br>（Simple Network Management Protocol）     | 161/162                                                                  |
| LDAP <br>（Lightweight Directory Access Protocol） | 389                                                                      |
| LDAPS                                              | 636                                                                      |
| SMB（Server Message Block）                        | 445                                                                      |
| Syslog                                             | 514                                                                      |
| SMTPS                                              | 587                                                                      |
| SQL Server                                         | 1433                                                                     |
| RDP                                                | 3389                                                                     |
| SIP                                                | 5060/5061                                                                |
| Remote Procedure Call                              | Session layer<br> Manage communication sessions between networked device |

### IP (Internet Protocol) Types

| Protocol | Description                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------- |
| ICMP     | Internet Control Message Protocol — ping, error messages                                        |
| TCP      | Transmission Control Protocol — reliable, connection-oriented                                   |
| UDP      | User Datagram Protocol — fast, connectionless                                                   |
| GRE      | Generic Routing Encapsulation — tunnel protocol                                                 |
| IPSec    | Internet Protocol Security — encrypts IP traffic<br> Used to establish secure `VPN connections` |
| AH       | Authentication Header — integrity + authentication, no encryption                               |
| ESP      | Encapsulating Security Payload — encryption + integrity                                         |
| IKE      | Internet Key Exchange — negotiates IPSec keys                                                   |

### Traffic Types

| Type      | Description                              |
| --------- | ---------------------------------------- |
| Unicast   | One sender → one receiver                |
| Multicast | One sender → group of receivers          |
| Anycast   | One sender → nearest receiver in a group |
| Broadcast | One sender → all devices on segment      |

---

## 1.5 Compare and contrast transmission media and transceivers

### Wireless

| Type             | Notes                                 |
| ---------------- | ------------------------------------- |
| 802.11 standards | Wi-Fi (see Domain 2.3 for full table) |
| Cellular         | 4G/5G mobile networks                 |
| Satellite        | Long range, high latency              |

### Wired

| Type                          | Notes                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| 802.3 standards               | Ethernet                                                                                          |
| UTP (Unshielded Twisted Pair) | Most common — no shielding, susceptible to EMI, cheaper                                           |
| STP (Shielded Twisted Pair)   | Foil/braid shielding around pairs — reduces EMI/crosstalk, used in high-interference environments |
| Single-mode fiber (SMF)       | 8–10 µm core, long distance > 500 meters<br>immune to interference                                |
| Multimode fiber (MMF)         | 50–62.5 µm core, high-speed, short distanc<br>immune to interference                              |
| Direct attach copper (DAC)    | Short-range(1-10m), passive copper cable for same rack connections                                |
| Twinaxial cable               | Variant of DAC                                                                                    |
| Coaxial cable                 | Used in cable TV, older networks                                                                  |
| Cable speeds                  | Varies by category/standard                                                                       |
| Plenum vs. non-plenum         | Plenum-rated cables are fire-resistant, required in air spaces                                    |

#### Twisted-Pair Cable Categories

| Category | Max Speed | Max Distance | Notes                                      |
| -------- | --------- | ------------ | ------------------------------------------ |
| Cat 5    | 100 Mbps  | 100 m        | Obsolete                                   |
| Cat 5e   | 1 Gbps    | 100 m        | Reduced crosstalk vs Cat 5                 |
| Cat 6    | 10 Gbps   | 55 m         | Internal separator reduces crosstalk       |
| Cat 6a   | 10 Gbps   | 100 m        | Augmented — supports full 100 m at 10 Gbps |
| Cat 7    | 10 Gbps   | 100 m        | Fully shielded (S/FTP), not TIA standard   |
| Cat 8    | 40 Gbps   | 30 m         | Data centers, short runs                   |

### Transceivers

| Form factor                   | Description                                                                                                    |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- |
| SFP                           | Small form-factor pluggable — 1 Gbps                                                                           |
| QSFP                          | Quad small form-factor pluggable — 40/100 Gbps                                                                 |
| Ethernet / Fibre Channel (FC) | Protocol carried by transceiver<br>High-speed networking technology designed specifically for storage networks |

### Connector Types

| Connector | Use                                     |
| --------- | --------------------------------------- |
| SC        | Subscriber connector — push-pull, fiber |
| LC        | Local connector — small, fiber          |
| ST        | Straight tip — twist-lock, fiber        |
| MPO       | Multi-fiber push on — multiple fibers   |
| RJ11      | Phone lines                             |
| RJ45      | Ethernet                                |
| F-type    | Coaxial / cable TV                      |
| BNC       | Bayonet Neill-Concelman — coaxial       |

---

## 1.6 Compare and contrast network topologies, architectures, and types

### Topologies

| Topology             | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| Mesh                 | Every device connects to multiple others — high redundancy    |
| Hybrid               | Combination of topologies                                     |
| Star / Hub and spoke | All devices connect to a central node                         |
| Spine and leaf       | Data center architecture — every leaf connects to every spine |
| Point to point       | Direct link between two devices                               |

### Three-Tier Hierarchical Model

| Tier         | Function                                          |
| ------------ | ------------------------------------------------- |
| Core         | High-speed backbone, connects distribution layers |
| Distribution | Routing, policy, aggregates access layer          |
| Access       | End devices connect here (PCs, phones)            |

- **Collapsed core** — core and distribution combined into one layer

### Traffic Flows

| Flow        | Description                                             |
| ----------- | ------------------------------------------------------- |
| North-south | Traffic between inside network and outside (internet)   |
| East-west   | Traffic between servers/services within the data center |

---

## 1.7 Given a scenario, use appropriate IPv4 network addressing

### Public vs. Private

| Range                        | Class | Use                                               |
| ---------------------------- | ----- | ------------------------------------------------- |
| 10.0.0.0/8                   | A     | Private                                           |
| 172.16.0.0–172.31.255.255/12 | B     | Private                                           |
| 192.168.0.0/16               | C     | Private                                           |
| 169.254.x.x                  | —     | APIPA (link-local, auto-assigned when DHCP fails) |
| 127.0.0.1                    | —     | Loopback/localhost                                |

### IPv4 Address Classes

| Class | Range   | Default Mask | Use                   |
| ----- | ------- | ------------ | --------------------- |
| A     | 1–126   | /8           | Large networks        |
| B     | 128–191 | /16          | Medium networks       |
| C     | 192–223 | /24          | Small networks        |
| D     | 224–239 | —            | Multicast             |
| E     | 240–255 | —            | Reserved/experimental |

### Subnetting

- **VLSM** (Variable Length Subnet Mask) — use different mask sizes within a network
- **CIDR** (Classless Inter-domain Routing) — notation like `/24`
- Usable hosts = **2ⁿ − 2** (subtract network address and broadcast address)
- Subnets = **2ˢ** where s = number of bits borrowed from host portion

#### Key Concepts

| Term              | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| Network address   | First address in a subnet — identifies the subnet (not assignable)         |
| Broadcast address | Last address in a subnet — sends to all hosts (not assignable)             |
| Usable host range | All addresses between network and broadcast                                |
| Subnet mask       | Defines which portion of IP is network vs host                             |
| Default gateway   | Router IP that hosts use to reach other networks (usually first usable IP) |

#### Subnet Cheat Sheet

| CIDR | Subnet Mask     | Subnets (from /24) | Usable Hosts | Host Range Example (192.168.1.0) |
| ---- | --------------- | ------------------ | ------------ | -------------------------------- |
| /24  | 255.255.255.0   | 1                  | 254          | .1 – .254                        |
| /25  | 255.255.255.128 | 2                  | 126          | .1 – .126 / .129 – .254          |
| /26  | 255.255.255.192 | 4                  | 62           | .1 – .62                         |
| /27  | 255.255.255.224 | 8                  | 30           | .1 – .30                         |
| /28  | 255.255.255.240 | 16                 | 14           | .1 – .14                         |
| /29  | 255.255.255.248 | 32                 | 6            | .1 – .6                          |
| /30  | 255.255.255.252 | 64                 | 2            | .1 – .2 (point-to-point links)   |
| /32  | 255.255.255.255 | —                  | 1            | Single host / loopback           |

#### How to Subnet — Step by Step

Given: `192.168.1.0/26`

1. **Subnet mask**: /26 → `255.255.255.192`
2. **Block size**: 256 − 192 = **64** (each subnet has 64 addresses)
3. **Usable hosts**: 64 − 2 = **62**
4. **Subnets**:

| Subnet | Network Address | First Host    | Last Host     | Broadcast     |
| ------ | --------------- | ------------- | ------------- | ------------- |
| 1      | 192.168.1.0     | 192.168.1.1   | 192.168.1.62  | 192.168.1.63  |
| 2      | 192.168.1.64    | 192.168.1.65  | 192.168.1.126 | 192.168.1.127 |
| 3      | 192.168.1.128   | 192.168.1.129 | 192.168.1.190 | 192.168.1.191 |
| 4      | 192.168.1.192   | 192.168.1.193 | 192.168.1.254 | 192.168.1.255 |

#### Magic Number Trick

The **magic number** = 256 − last octet of subnet mask

| Subnet Mask Last Octet | Magic Number (Block Size) |
| ---------------------- | ------------------------- |
| 128                    | 128                       |
| 192                    | 64                        |
| 224                    | 32                        |
| 240                    | 16                        |
| 248                    | 8                         |
| 252                    | 4                         |

Subnets start at multiples of the magic number: 0, 64, 128, 192 (for /26)
| /30 | 255.255.255.252 | 2 |

---

## 1.8 Summarize evolving use cases for modern network environments

### Software-Defined Networking (SDN) & SD-WAN

| Feature                   | Description                                     |
| ------------------------- | ----------------------------------------------- |
| Application aware         | Routes traffic based on application type        |
| Zero-touch provisioning   | Devices configure themselves automatically      |
| Transport agnostic        | Works over any link type (MPLS, broadband, LTE) |
| Central policy management | Single pane of glass for all WAN policies       |

### VXLAN (Virtual Extensible LAN)

- Extends Layer 2 networks over Layer 3 (IP) networks
- Used for data center interconnect (DCI)
- Uses Layer 2 encapsulation (tunneling)

### Zero Trust Architecture (ZTA)

| Principle                   | Description                                 |
| --------------------------- | ------------------------------------------- |
| Policy-based authentication | Every access request must be authenticated  |
| Authorization               | Explicit authorization required per session |
| Least privilege access      | Grant minimum access needed                 |

### SASE / SSE

- **SASE** (Secure Access Secure Edge) — combines networking and security in the cloud
- **SSE** (Security Service Edge) — security subset of SASE

### Infrastructure as Code (IaC)

| Concept                        | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| Automation                     | Playbooks/templates/reusable tasks                          |
| Configuration drift/compliance | Detect and remediate config changes                         |
| Upgrades                       | Automated version management                                |
| Dynamic inventories            | Auto-discover network devices                               |
| Source control                 | Version control, central repository, conflict ID, branching |

### IPv6 Addressing

| Feature                       | Description                                   |
| ----------------------------- | --------------------------------------------- |
| Mitigating address exhaustion | 128-bit addresses — 340 undecillion addresses |
| Tunneling                     | IPv6 over IPv4 networks                       |
| Dual stack                    | Device runs both IPv4 and IPv6                |
| NAT64                         | Translates between IPv6 and IPv4              |
