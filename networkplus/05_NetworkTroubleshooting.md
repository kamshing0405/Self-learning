# 5.0 Network Troubleshooting

## 5.1 Network troubleshooting methodology

### CompTIA's Official Steps

| Step | Action                                                                                                                                                                                                             |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | **Identify the problem**<br>Gather `information`<br>Question `users`<br>Identify `symptoms`<br>Determine if anything `changed`<br>`Duplicate` the problem if possible<br>`Approach` multiple problems individually |
| 2    | **Establish a theory of probable cause**<br>Question the `obvious`<br>Consider multiple `approaches` (top-to-bottom / bottom-to-top OSI model, divide and conquer)                                                 |
| 3    | **Test the theory to determine the cause**<br>If confirmed, determine next steps<br>If not confirmed, establish a new theory or escalate                                                                           |
| 4    | **Establish a plan of action**<br>`Resolve` the problem and identify potential `effects`                                                                                                                           |
| 5    | **Implement the solution** or **escalate as necessary**                                                                                                                                                            |
| 6    | **Verify full system functionality** and **implement preventive measures if applicable**                                                                                                                           |
| 7    | **Document** findings, actions, outcomes, and lessons learned throughout the process                                                                                                                               |

---

## 5.2 Common cabling and physical interface issues

### Cable Issues

| Issue                             | Description                                                                                                                                                                       |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incorrect cable                   | Wrong type<br>Single mode vs. multimode fiber<br>wrong Cat category (5/6/7/8)<br>Telecommunications industry asssociation(TIA) <br> Speed / throughtput / Distance<br>STP vs. UTP |
| Signal degradation — Crosstalk    | One cable or channel interferes with a signal on another cable or channel<br>Near-End Carsstalk - transmitting end<br>Far-End Crrosstalk - receiving end                          |
| Signal degradation — Interference | External `EMI` from motors, fluorescent lights, etc.                                                                                                                              |
| Signal degradation — Attenuation  | Signal loss over `distance`                                                                                                                                                       |
| Improper termination              | Not correctly terminated with the appropriate connector or techniques                                                                                                             |
| TX/RX transposed                  | Transmit and receive wires swapped                                                                                                                                                |

### Interface Issues

| Counter                                      | Meaning                                                     |
| -------------------------------------------- | ----------------------------------------------------------- |
| CRC(Cyclic Redundancy Check failures) errors | Mismatch in the data checksum                               |
| Runts                                        | Frames smaller than 64 bytes — collision or duplex mismatch |
| Giants                                       | Frames larger than 1518 bytes — MTU misconfiguration        |
| Drops                                        | Frames `dropped` due to buffer overflow or congestion       |

### Port Status

| Status                | Meaning                                                             |
| --------------------- | ------------------------------------------------------------------- |
| Error disabled        | Port `shut down` by switch due to a violation (e.g., port security) |
| Administratively down | `Manually` shut down by admin (`no shutdown` command)               |
| Suspended             | Port `temporarily disable` by STP or LACP issue                     |

### Hardware Issues

| Issue                                            | Description                                                          |
| ------------------------------------------------ | -------------------------------------------------------------------- |
| PoE(Power over Ethernet) — Power budget exceeded | Switch `cannot supply enough power` for all PoE devices              |
| PoE — Incorrect standard                         | Device and switch using different PoE standards <br>PoE, PoE+, PoE++ |
| Transceiver mismatch                             | Incompatible SFP modules on each end<br>wavelength, fiber            |
| Transceiver signal strength                      | Too weak or too strong optical signal<br>Receiver Sensitivity        |

---

## 5.3 Common network issues

### Switching Issues

| Issue                       | Cause                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| STP(spanning tree protocol) | Preventing network loops                                                                          |
| STP — Root bridge selection | Central reference point / bridge priorities                                                       |
| STP — Port roles            | Root / Designated / Blocked / Issues / Resolution                                                 |
| STP — Port states           | Blocking / Listening / Learning / Forwarding / Issues / Resolution                                |
| Incorrect VLAN assignment   | Network segmentation issues / unable to communicate                                               |
| Access Control Lists        | Access control list blocking legitimate traffic<br>Which traffic is permitted and which is denied |

### Routing Issues

| Issue                | Cause                                 |
| -------------------- | ------------------------------------- |
| Routing table issue  | Missing or incorrect routes           |
| Default routes issue | Missing default gateway (`0.0.0.0/0`) |

### Addressing Issues

| Issue                     | Description                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Address pool exhaustion   | DHCP scope ran out of available IPs                                                     |
| Incorrect default gateway | Clients `cannot reach` other networks                                                   |
| Incorrect IP address      | Wrong IP assigned — may cause duplicate or unreachable                                  |
| Duplicate IP address      | Two devices share `same` IP — causes intermittent connectivity                          |
| Incorrect subnet mask     | Improper network segmentation, causing devices to fail in communicating with each other |

---

## 5.4 Common performance issues

### Wired Performance

| Issue                           | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| Congestion/contention           | `Too many` devices competing for bandwidth       |
| Bottlenecking                   | One link or device `limiting` overall throughput |
| Bandwidth — Throughput capacity | `Actual` throughput lower than `expected`        |
| Latency                         | `Delay` in packet delivery                       |
| Packet loss                     | Packets not `reaching` destination               |
| Jitter                          | `Variation` in latency — impacts VoIP and video  |

### Wireless Performance

| Issue                          | Cause                                                    |
| ------------------------------ | -------------------------------------------------------- |
| Interference                   | From other wireless devices, microwaves, cordless phones |
| Channel overlap                | Configure access points to use nonoverlapping channels   |
| Signal degradation or loss     | Distance, walls, interference<br>weaker signal           |
| Insufficient wireless coverage | Dead zone                                                |
| Client disassociation issues   | Client repeatedly drops from AP                          |
| Roaming misconfiguration       | Client fails to roam between APs smoothly                |

---

## 5.5 Tool or protocol to solve networking issues

### Software Tools

| Tool                                                 | Use                                                                                                                               |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Protocol analyzer (`Wireshark`)                      | Capture and analyze `network traff`, making it ideal for detecting `network-based` attacks                                        |
| `ping`                                               | Test `ICMP reachability` / test connectivity to target device                                                                     |
| `traceroute` / `tracert`                             | Trace `path packets` to destination / route                                                                                       |
| `nslookup`                                           | Basic `DNS` query / hostname                                                                                                      |
| `tcpdump`                                            | Packet analyzer / captures or filters TCP/IP packets                                                                              |
| `dig`                                                | Detailed DNS query / more information                                                                                             |
| `netstat`                                            | Show active `network connections`, routing tables and listening ports                                                             |
| `ip` / `ifconfig`                                    | Show/configure `network configuration` of a device                                                                                |
| `arp`                                                | View ARP cache / IP-to-MAC address translation tables                                                                             |
| Nmap                                                 | Network scanning tool / Port scanner and network discovery                                                                        |
| LLDP / CDP<br> Link Layer / Cisco Discovery Protocol | Identify connected devices <br>Advertise their identity, capabilities, and configuration to directly connected `neighbor devices` |
| Speed tester                                         | Measure internet bandwidth                                                                                                        |
| PuTTY                                                | Free SSH/Telnet/Serial client for Windows — `connect to remote devices` for troubleshooting                                       |

### Hardware Tools

| Tool                       | Use                                                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Toner                      | Trace cable runs through walls/ceilings                                                                                     |
| Cable tester               | Vertofy the integrity and performance                                                                                       |
| Cable crimper              | Attach RJ45/RJ11 connectors to the end of a cable — used when making or repairing patch cables                              |
| Punch down tool            | Terminate wires into keystone jacks or patch panels (110 block, Krone)                                                      |
| Taps                       | Passive network taps for traffic capture / Creates a copy of the data packets                                               |
| Wi-Fi analyzer             | Scan wireless channels and signal strength                                                                                  |
| Visual fault locator (VFL) | Find breaks in `fiber` using visible laser light                                                                            |
| Multimeter                 | Measures voltage, current, and resistance — verify power delivery, check for short circuits or open wires in copper cabling |

### Basic Networking Device Commands

| Command                  | Output                                      |
| ------------------------ | ------------------------------------------- |
| `show mac-address-table` | MAC-to-`port` mappings on a switch          |
| `show route`             | Routing table                               |
| `show interface`         | Interface `status`, errors, counters        |
| `show config`            | Running or startup configuration            |
| `show arp`               | ARP cache (IP-to-MAC mappings)              |
| `show vlan`              | VLAN database and `switch port` assignments |
| `show power`             | PoE power budget and usage                  |
