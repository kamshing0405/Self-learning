# 5.0 Network Troubleshooting (24%)

## 5.1 Explain the troubleshooting methodology

### CompTIA's Official Steps

| Step | Action                                                                                                                                                                                      |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Identify the problem** — gather information, question users, identify symptoms, determine if anything changed, duplicate the problem if possible, approach multiple problems individually |
| 2    | **Establish a theory of probable cause** — question the obvious, consider multiple approaches (top-to-bottom / bottom-to-top OSI model, divide and conquer)                                 |
| 3    | **Test the theory to determine the cause** — if confirmed, determine next steps; if not confirmed, establish a new theory or escalate                                                       |
| 4    | **Establish a plan of action** to resolve the problem and identify potential effects                                                                                                        |
| 5    | **Implement the solution** or escalate as necessary                                                                                                                                         |
| 6    | **Verify full system functionality** and implement preventive measures if applicable                                                                                                        |
| 7    | **Document findings**, actions, outcomes, and lessons learned throughout the process                                                                                                        |

---

## 5.2 Given a scenario, troubleshoot common cabling and physical interface issues

### Cable Issues

| Issue                             | Description                                                                                                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Incorrect cable                   | Wrong type — single mode vs. multimode fiber, wrong Cat category (5/6/7/8)<br>Telecommunications industry asssociation(TIA) <br> Speed / throughtput / Distance<br>STP vs. UTP |
| Signal degradation — Crosstalk    | Interference between adjacent wire pairs                                                                                                                                       |
| Signal degradation — Interference | External EMI from motors, fluorescent lights, etc.                                                                                                                             |
| Signal degradation — Attenuation  | Signal loss over distance                                                                                                                                                      |
| Improper termination              | Incorrect connector crimping or punch-down                                                                                                                                     |
| TX/RX transposed                  | Transmit and receive wires swapped                                                                                                                                             |

### Interface Issues

| Counter    | Meaning                                                               |
| ---------- | --------------------------------------------------------------------- |
| CRC errors | Cyclic Redundancy Check failures — data corruption, usually bad cable |
| Runts      | Frames smaller than 64 bytes — collision or duplex mismatch           |
| Giants     | Frames larger than 1518 bytes — MTU misconfiguration                  |
| Drops      | Frames dropped due to buffer overflow or congestion                   |

### Port Status

| Status                | Meaning                                                           |
| --------------------- | ----------------------------------------------------------------- |
| Error disabled        | Port shut down by switch due to a violation (e.g., port security) |
| Administratively down | Manually shut down by admin (`shutdown` command)                  |
| Suspended             | Port blocked by STP or LACP issue                                 |

### Hardware Issues

| Issue                       | Description                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| PoE — Power budget exceeded | Switch cannot supply enough power for all PoE devices                |
| PoE — Incorrect standard    | Device and switch using different PoE standards <br>PoE, PoE+, PoE++ |
| Transceiver mismatch        | Incompatible SFP modules on each end<br>wavelength, fiber            |
| Transceiver signal strength | Too weak or too strong optical signal<br>Receiver Sensitivity        |

---

## 5.3 Given a scenario, troubleshoot common issues with network services

### Switching Issues

| Issue                       | Cause                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| STP — Network loops         | Missing or misconfigured STP                                                                      |
| STP — Root bridge selection | Wrong device elected as root bridge                                                               |
| STP — Port roles            | Incorrect designated/root/blocking assignment                                                     |
| STP — Port states           | Port stuck in blocking or learning                                                                |
| Incorrect VLAN assignment   | Access port configured for wrong VLAN                                                             |
| ACLs                        | Access control list blocking legitimate traffic<br>Which traffic is permitted and which is denied |

### Routing Issues

| Issue                           | Cause                                 |
| ------------------------------- | ------------------------------------- |
| Route selection — Routing table | Missing or incorrect routes           |
| Default routes                  | Missing default gateway (`0.0.0.0/0`) |

### Addressing Issues

| Issue                     | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| Address pool exhaustion   | DHCP scope ran out of available IPs                          |
| Incorrect default gateway | Clients cannot reach other networks                          |
| Incorrect IP address      | Wrong IP assigned — may cause duplicate or unreachable       |
| Duplicate IP address      | Two devices share same IP — causes intermittent connectivity |
| Incorrect subnet mask     | Devices on same subnet treated as different networks         |

---

## 5.4 Given a scenario, troubleshoot common performance issues

### Wired Performance

| Issue                           | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| Congestion/contention           | Too many devices competing for bandwidth       |
| Bottlenecking                   | One link or device limiting overall throughput |
| Bandwidth — Throughput capacity | Actual throughput lower than expected          |
| Latency                         | Delay in packet delivery                       |
| Packet loss                     | Packets not reaching destination               |
| Jitter                          | Variation in latency — impacts VoIP and video  |

### Wireless Performance

| Issue                          | Cause                                               |
| ------------------------------ | --------------------------------------------------- |
| Interference                   | Other wireless devices, microwaves, cordless phones |
| Channel overlap                | Adjacent APs using overlapping channels             |
| Signal degradation or loss     | Distance, walls, interference                       |
| Insufficient wireless coverage | AP placement or count inadequate                    |
| Client disassociation issues   | Client repeatedly drops from AP                     |
| Roaming misconfiguration       | Client fails to roam between APs smoothly           |

---

## 5.5 Given a scenario, use the appropriate tool or protocol to solve networking issues

### Software Tools

| Tool                          | Use                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| Protocol analyzer (Wireshark) | Capture and analyze network traff, making it ideal for detecting `network-based` attacks    |
| `ping`                        | Test ICMP reachability                                                                      |
| `traceroute` / `tracert`      | Trace path to destination                                                                   |
| `nslookup`                    | Basic DNS query                                                                             |
| `tcpdump`                     | Command-line packet capture                                                                 |
| `dig`                         | Detailed DNS query                                                                          |
| `netstat`                     | Show active connections and listening ports                                                 |
| `ip` / `ifconfig`             | Show/configure network interfaces                                                           |
| `arp`                         | View ARP cache                                                                              |
| Nmap                          | Port scanner and network discovery                                                          |
| LLDP / CDP                    | Link Layer / Cisco Discovery Protocol — identify connected devices                          |
| Speed tester                  | Measure internet bandwidth                                                                  |
| PuTTY                         | Free SSH/Telnet/Serial client for Windows — `connect to remote devices` for troubleshooting |

### Hardware Tools

| Tool                       | Use                                            |
| -------------------------- | ---------------------------------------------- |
| Toner                      | Trace cable runs through walls/ceilings                                                        |
| Cable tester               | Check cable continuity and wiring                                                              |
| Cable crimper              | Attach RJ45/RJ11 connectors to the end of a cable — used when making or repairing patch cables |
| Punch down tool            | Terminate wires into keystone jacks or patch panels (110 block, Krone)                         |
| Taps                       | Passive network taps for traffic capture                                                       |
| Wi-Fi analyzer             | Scan wireless channels and signal strength                                                     |
| Visual fault locator (VFL) | Find breaks in fiber using visible laser light                                                 |
| Multimeter                 | Measures voltage, current, and resistance — verify power delivery, check for short circuits or open wires in copper cabling |

### Basic Networking Device Commands

| Command                  | Output                             |
| ------------------------ | ---------------------------------- |
| `show mac-address-table` | MAC-to-port mappings on a switch   |
| `show route`             | Routing table                      |
| `show interface`         | Interface status, errors, counters |
| `show config`            | Running or startup configuration   |
| `show arp`               | ARP cache (IP-to-MAC mappings)     |
| `show vlan`              | VLAN database and port assignments |
| `show power`             | PoE power budget and usage         |
