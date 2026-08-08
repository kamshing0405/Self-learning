# 3.0 Network Operations

## 3.1 Organizational processes and procedures

### Documentation

| Document                    | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| Physical diagrams           | Shows actual hardware locations and physical connections          |
| Logical diagrams            | Shows IP addresses, VLANs, routing — not physical layout          |
| Rack diagrams               | Equipment layout within racks                                     |
| Cable maps and diagrams     | Cable runs, labels, patch locations                               |
| Network diagrams            | Layer 1 (physical), Layer 2 (switching), Layer 3 (routing)        |
| Asset inventory             | Hardware, software, licensing, warranty support                   |
| IPAM                        | IP address management — tracks IP allocation                      |
| SLA                         | Service-level agreement — defines uptime/performance expectations |
| Wireless survey<br>Heat map | Visual map of wireless signal coverage                            |

### Life-Cycle Management

| Phase               | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| EOL                 | End-of-life — vendor stops selling the product              |
| EOS                 | End-of-support — vendor stops providing updates and support |
| Software management | Patches/bug fixes, OS updates, firmware updates             |
| Decommissioning     | Proper removal and disposal of retired equipment            |

### Change Management

| Phase                                          | Description                                                       |
| ---------------------------------------------- | ----------------------------------------------------------------- |
| **Request process tracking / service request** | All changes must be documented and approved before implementation |

### Configuration Management

| Type                          | Description                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------- |
| Production configuration      | Active running config on devices                                              |
| Backup configuration          | Saved copy in case of failure                                                 |
| Baseline/golden configuration | Known-good reference configuration, used to restore a device to a known state |

---

## 3.2 Network Monitoring Technologies

### SNMP (Simple Network Management Protocol)

Monitoring solution that tracks the health and performance of devices across the network,including bandwidth usage, uptime, and potential hardware failures.

| Component                            | Description                                                                                                      |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Traps                                | `Unsolicited` alerts sent from agent to manager<br>rpoactive monitoring                                          |
| MIB<br>(Management Information Base) | Database of managed objects<br>Object Identifier in a hierarchical structure that define the proper-ties         |
| v2c<br>(extension)                   | Community strings (plaintext), bulk queries<br>Simplicity and effectiveness in network monitoring and management |
| v3                                   | Authentication + encryption — recommended                                                                        |
| Community strings                    | Password-like identifiers for SNMPv1/v2c                                                                         |
| Authentication                       | Used in SNMPv3                                                                                                   |

### Monitoring Methods

| Method                                              | Description                                                                                                      |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Flow data                                           | Capturing and alalyzing metadata about network traffic<br>Traffic patterns, bandwidth usage                      |
| Packet capture                                      | Full packet `data capture` for `deep` analysis<br>Intercepting and logging traffic / diagnose performance issues |
| Baseline metrics                                    | Standard level of normal network perfoermance                                                                    |
| Anomaly alerting/notification                       | Alerts when traffic deviates from baseline                                                                       |
| Log aggregation — Syslog collector                  | Centralized collection of syslog messages                                                                        |
| SIEM<br>(Security Information and Event Management) | Real-time analysis / correlates logs for security events                                                         |
| API integration                                     | Pull monitoring data programmatically                                                                            |
| Port mirroring                                      | Copy traffic from one port to a monitoring port (SPAN) / withour impacting the network's performance             |

### Monitoring Solutions

| Solution                 | Description                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Network discovery        | Ad hoc(manually) or scheduled(regular) scanning to find devices<br>maintaining an updated inventory of network `assets` |
| Traffic analysis         | Examining the data packets flowing thhrough the network<br>Usage patterns, bandwidth, bottlenecks                       |
| Performance monitoring   | Track CPU, memory, interface utilization<br>Evaluate the health and efficiency of the network                           |
| Availability monitoring  | Operational nad accessible                                                                                              |
| Configuration monitoring | Tracking changes / alerts administrators to change                                                                      |

---

## 3.3 Disaster recovery (DR) concepts

### DR Metrics

| Metric | Description                                                |
| ------ | ---------------------------------------------------------- |
| RPO    | Recovery Point Objective — max acceptable data loss (time) |
| RTO    | Recovery Time Objective — max acceptable downtime          |
| MTTR   | Mean Time To Repair — average time to fix a failure        |
| MTBF   | Mean Time Between Failures — average time between failures |

### DR Sites

| Site      | Description                                          |
| --------- | ---------------------------------------------------- |
| Cold site | Empty facility, no equipment — longest recovery time |
| Warm site | Facility with some equipment, not fully operational  |
| Hot site  | Fully operational mirror site — fastest recovery     |

### High-Availability Approaches

| Mode           | Description                                      |
| -------------- | ------------------------------------------------ |
| Active-active  | Both systems handle traffic simultaneously       |
| Active-passive | Primary handles traffic, secondary is on standby |

### Testing

Ensuring that recovery procedures are effective and up-ta-date

| Type               | Description                                             |
| ------------------ | ------------------------------------------------------- |
| Tabletop exercises | `Discussion-based` walkthrough of DR procedures         |
| Validation tests   | Actually `execution` of the disaster recovery processes |

---

## 3.4 Implement IPv4 and IPv6 network services

### Dynamic Addressing — DHCP

| Concept                                        | Description                                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Reservations                                   | Always assign `same IP` to a specific MAC address                                          |
| Scope                                          | `Range` of IP addresses available for assignment                                           |
| Lease time                                     | `How long` a client can use an IP before renewing                                          |
| Options                                        | Additional settings (gateway, DNS, NTP)                                                    |
| Relay / IP helper                              | Forward DHCP requests and responses between clients and servers across different `subnets` |
| Exclusions                                     | IPs within `scope` that are `not handed out`                                               |
| SLAAC<br>(Stateless Address Autoconfiguration) | IPv6 self-assigns without DHCP                                                             |

### Name Resolution — DNS

| Record Type | Description                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS         | Naming system                                                                                                                                                               |
| DNSSEC      | DNS Security Extensions — digitally signs DNS records                                                                                                                       |
| DoH         | DNS over HTTPS — encrypts DNS queries via HTTPS                                                                                                                             |
| DoT         | DNS over TLS — encrypts DNS queries via TLS                                                                                                                                 |
| A           | IPv4 address                                                                                                                                                                |
| AAAA        | IPv6 address                                                                                                                                                                |
| CNAME       | Canonical name — `alias` to another name                                                                                                                                    |
| MX          | `Mail` exchange — specify the mail servers                                                                                                                                  |
| TXT         | Text record - hold text info for sources outside of the domain / verifying domain ownership / implementing email security                                                   |
| NS          | Name server / delegating subdomains                                                                                                                                         |
| PTR         | Pointer — map an IP address to a domain name / reverse DNS lookup                                                                                                           |
| SRV         | Service record — specifies the hostname and port for `specific services` (e.g. SIP, XMPP, LDAP)<br>Format: `_service._proto.name TTL class SRV priority weight port target` |

| Zone Type             | Description                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| Forward               | Resolves name → `IP`                                                                                   |
| Reverse               | Resolves IP → `name`                                                                                   |
| Authoritative         | Has the final authority over its own `records`                                                         |
| Non-authoritative     | `Cached` results from other servers                                                                    |
| Primary               | `Main` copy of zone data                                                                               |
| Secondary             | `Read-only` copy of zone data                                                                          |
| Recursive DNS Queries | DNS server `queries` on behalf of the client                                                           |
| Hosts file            | Local file that overrides DNS (`/etc/hosts`) / simple form of local DNS / testing web site deplotments |

### Time Protocols

| Protocol | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| NTP      | Network Time Protocol — synchronizes clocks (port 123)                  |
| PTP      | Precision Time Protocol — microsecond accuracy for industrial/financial |
| NTS      | Network Time Security — secure, authenticated NTP                       |

---

## 3.5 Network access and management methods

### VPN Types

| Type               | Description                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| Site-to-site VPN   | Connects two `entire` networks over the internet                                                          |
| Client-to-site VPN | Individual user connects to `company` network                                                             |
| Clientless         | `Browser-based` VPN, no software needed                                                                   |
| Split tunnel       | Only some traffic goes through VPN<br> increase security by routing all traffic through company's network |
| Full tunnel        | All traffic goes through VPN                                                                              |

### Connection Methods

| Method  | Description                                                                                                                |
| ------- | -------------------------------------------------------------------------------------------------------------------------- |
| SSH     | Encrypted command-line access (port 22)                                                                                    |
| GUI     | Graphical management interface (web UI)                                                                                    |
| API     | Programmatic access for automation                                                                                         |
| Console | Direct `physical connection` via serial/console cable                                                                      |
| PuTTY   | Free SSH/Telnet client for Windows(terminal emulator) — commonly used to `connect to routers, switches, and Linux servers` |

### Management Approaches

| Approach               | Description                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| Jump box / host        | First connect, stepping stone from one security zone                                           |
| In-band management     | Network devices through the `same network connections and paths` used for normal data trafffic |
| Out-of-band management | `Separate, dedicated channel` management network (separate from production)                    |
