# 3.0 Network Operations (19%)

## 3.1 Explain the purpose of organizational processes and procedures

### Documentation

| Document                 | Description                                                       |
| ------------------------ | ----------------------------------------------------------------- |
| Physical diagrams        | Shows actual hardware locations and physical connections          |
| Logical diagrams         | Shows IP addresses, VLANs, routing — not physical layout          |
| Rack diagrams            | Equipment layout within racks                                     |
| Cable maps and diagrams  | Cable runs, labels, patch locations                               |
| Network diagrams         | Layer 1 (physical), Layer 2 (switching), Layer 3 (routing)        |
| Asset inventory          | Hardware, software, licensing, warranty support                   |
| IPAM                     | IP address management — tracks IP allocation                      |
| SLA                      | Service-level agreement — defines uptime/performance expectations |
| Wireless survey/heat map | Visual map of wireless signal coverage                            |

### Life-Cycle Management

| Phase               | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| EOL                 | End-of-life — vendor stops selling the product              |
| EOS                 | End-of-support — vendor stops providing updates and support |
| Software management | Patches/bug fixes, OS updates, firmware updates             |
| Decommissioning     | Proper removal and disposal of retired equipment            |

### Change Management

- **Request process tracking / service request** — all changes must be documented and approved before implementation

### Configuration Management

| Type                          | Description                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------- |
| Production configuration      | Active running config on devices                                              |
| Backup configuration          | Saved copy in case of failure                                                 |
| Baseline/golden configuration | Known-good reference configuration, used to restore a device to a known state |

---

## 3.2 Given a scenario, use network monitoring technologies

### SNMP (Simple Network Management Protocol)

Monitoring solution that tracks the health and performance of devices across the network,including bandwidth usage, uptime, and potential hardware failures.

| Component         | Description                                               |
| ----------------- | --------------------------------------------------------- |
| Traps             | Unsolicited alerts sent from agent to manager             |
| MIB               | Management Information Base — database of managed objects |
| v2c               | Community strings (plaintext), bulk queries               |
| v3                | Authentication + encryption — recommended                 |
| Community strings | Password-like identifiers for SNMPv1/v2c                  |
| Authentication    | Used in SNMPv3                                            |

### Monitoring Methods

| Method                             | Description                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------- |
| Flow data                          | NetFlow/sFlow — traffic statistics and patterns                                 |
| Packet capture                     | Full packet data capture for deep analysis                                      |
| Baseline metrics                   | Normal performance values to compare against                                    |
| Anomaly alerting/notification      | Alerts when traffic deviates from baseline                                      |
| Log aggregation — Syslog collector | Centralized collection of syslog messages                                       |
| SIEM                               | Security Information and Event Management — correlates logs for security events |
| API integration                    | Pull monitoring data programmatically                                           |
| Port mirroring                     | Copy traffic from one port to a monitoring port (SPAN)                          |

### Monitoring Solutions

| Solution                 | Description                                      |
| ------------------------ | ------------------------------------------------ |
| Network discovery        | Ad hoc or scheduled scanning to find devices     |
| Traffic analysis         | Identify top talkers, protocols, bandwidth usage |
| Performance monitoring   | Track CPU, memory, interface utilization         |
| Availability monitoring  | Track uptime and detect outages                  |
| Configuration monitoring | Alert on unauthorized configuration changes      |

---

## 3.3 Explain disaster recovery (DR) concepts

### DR Metrics

| Metric | Description                                                |
| ------ | ---------------------------------------------------------- |
| RPO    | Recovery Point Objective — max acceptable data loss (time) |
| RTO    | Recovery Time Objective — max acceptable downtime          |
| MTTR   | Mean Time To Repair — average time to fix a failure        |
| MTBF   | Mean Time Between Failures — average time between failures |
| MTTF   | Mean Time To Failure — average time a device operates before it fails (used for non-repairable components) |

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

| Type               | Description                                    |
| ------------------ | ---------------------------------------------- |
| Tabletop exercises | Discussion-based walkthrough of DR procedures  |
| Validation tests   | Actually test failover and recovery procedures |

---

## 3.4 Given a scenario, implement IPv4 and IPv6 network services

### Dynamic Addressing — DHCP

| Concept           | Description                                                          |
| ----------------- | -------------------------------------------------------------------- |
| Reservations      | Always assign same IP to a specific MAC address                      |
| Scope             | Range of IP addresses available for assignment                       |
| Lease time        | How long a client can use an IP before renewing                      |
| Options           | Additional settings (gateway, DNS, NTP)                              |
| Relay / IP helper | Forwards DHCP requests across subnets                                |
| Exclusions        | IPs within scope that are not handed out                             |
| SLAAC             | Stateless Address Autoconfiguration — IPv6 self-assigns without DHCP |

### Name Resolution — DNS

| Record Type | Description                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A           | IPv4 address                                                                                                                                                                |
| AAAA        | IPv6 address                                                                                                                                                                |
| CNAME       | Canonical name — alias to another name                                                                                                                                      |
| MX          | Mail exchange — mail server for domain<br>Sending mail server will check MX record                                                                                          |
| TXT         | Text record (Sender Policy Framework (SPF) - Secure email, DomainKeys Identified Mail(DKIM), domain verification)                                                           |
| NS          | Name server record                                                                                                                                                          |
| PTR         | Pointer — reverse DNS lookup                                                                                                                                                |
| SRV         | Service record — specifies the hostname and port for `specific services` (e.g. SIP, XMPP, LDAP)<br>Format: `_service._proto.name TTL class SRV priority weight port target` |

| Dynamic DNS (DDNS) | Automatically updates DNS records when a device's IP address changes — useful for hosts with dynamic public IPs (e.g. home servers, remote access) |

| Zone Type         | Description                                |
| ----------------- | ------------------------------------------ |
| Forward           | Resolves name → IP                         |
| Reverse           | Resolves IP → name                         |
| Authoritative     | Holds the actual DNS records for the zone  |
| Non-authoritative | Cached results from other servers          |
| Primary           | Main copy of zone data                     |
| Secondary         | Read-only copy of zone data                |
| Recursive         | DNS server queries on behalf of the client |

| Security Feature | Description                                           |
| ---------------- | ----------------------------------------------------- |
| DNSSEC           | DNS Security Extensions — digitally signs DNS records |
| DoH              | DNS over HTTPS — encrypts DNS queries via HTTPS       |
| DoT              | DNS over TLS — encrypts DNS queries via TLS           |
| Hosts file       | Local file that overrides DNS (`/etc/hosts`)          |

### Time Protocols

| Protocol | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| NTP      | Network Time Protocol — synchronizes clocks (port 123)                  |
| PTP      | Precision Time Protocol — microsecond accuracy for industrial/financial |
| NTS      | Network Time Security — secure, authenticated NTP                       |

---

## 3.5 Compare and contrast network access and management methods

### VPN Types

| Type               | Description                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| Site-to-site VPN   | Connects two entire networks over the internet                                                            |
| Client-to-site VPN | Individual user connects to company network                                                               |
| Clientless         | Browser-based VPN, no software needed                                                                     |
| Split tunnel       | Only some traffic goes through VPN<br> increase security by routing all traffic through company's network |
| Full tunnel        | All traffic goes through VPN                                                                              |

### Connection Methods

| Method  | Description                                                                                           |
| ------- | ----------------------------------------------------------------------------------------------------- |
| SSH     | Encrypted command-line access (port 22)                                                               |
| GUI     | Graphical management interface (web UI)                                                               |
| API     | Programmatic access for automation                                                                    |
| Console | Direct physical connection via serial/console cable                                                   |
| PuTTY   | Free SSH/Telnet client for Windows — commonly used to connect to routers, switches, and Linux servers |

### Management Approaches

| Approach               | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| Jump box / host        | Hardened intermediary server used to access other systems securely |
| In-band management     | Management traffic uses the same network as production traffic     |
| Out-of-band management | Dedicated management network (separate from production)            |
