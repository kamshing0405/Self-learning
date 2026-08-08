# 4.0 Network Security

## 4.1 Basic network security concepts

### Logical Security

#### Encryption

| Concept         | Description                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| Data in transit | Encrypt `data moving` across the network that it remains secure and private (VPN, HTTPS, SSL/TLS)     |
| Data at rest    | Encrypt stored on `physical data` (disk encryption) / only accessible via proper cryptographic `keys` |

#### Certificates & PKI

| Concept     | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| PKI         | Public Key Infrastructure — framework for issuing/managing `digital certificates` |
| Self-signed | Certificate signed by `itself`, not trusted by default                            |

#### Identity and Access Management (IAM)

| Method                                                             | Description                                                                                                                                               |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MFA<br>(Multifactor Authentication)                                | Two or more verification factors                                                                                                                          |
| SSO<br>(Single Sign-On)                                            | One login for multiple systems                                                                                                                            |
| RADIUS<br>( Remote Authentication Dial-in User Service)            | `centralized` AAA (ports 1812/1813)                                                                                                                       |
| LDAP<br>(Lightweight Directory Access Protocol)                    | Application protocol / distributed directory information services                                                                                         |
| SAML<br>(Security Assertion Markup Language )                      | Open standard / identidy provider and a service provider<br>XML-based, share authentication and authorization details between `different system` standard |
| OAuth                                                              | Open Authorization — allows third-party apps to access resources on behalf of a user without sharing passwords (e.g. "Login with Google")                 |
| TACACS+<br>(Terminal Access Controller Access-Control System Plus) | AAA for network devices (port 49) / separates these three functions which allows more flexibility                                                         |
| Time-based authentication                                          | OTP changes on a time interval (TOTP)                                                                                                                     |
| PAP<br> (Password Authentication Protocol)                         | `Password` Authentication Protocol — sends credentials in **plaintext**, no encryption, insecure, legacy only                                             |
| CHAP<br> (Challenge Handshake Authentication Protocol)             | **three-way handshake** with hashed challenge, never sends `password` over network                                                                        |
| EAP<br> (Extensible Authentication Protocol)                       | Framework supporting multiple auth methods, used with 802.1X and VPN<br>Types: EAP-TLS (`certificates`), PEAP (`password` inside TLS tunnel), EAP-TTLS    |

#### Authorization

| Concept                               | Description                                                                                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Least privilege                       | Grant only the minimum access required                                                                                                                            |
| Role-based access control (RBAC)      | Permissions assigned by role, not individual                                                                                                                      |
| Discretionary Access Control (DAC)    | `Resource owner` decides who can access — users can grant permissions to others (e.g. standard Linux/Windows file permissions)                                    |
| Mandatory Access Control (MAC)        | `OS enforces` access based on security labels/classifications — `users cannot change` permissions (e.g. SELinux, government systems)<br>Highly secure environment |
| Attribute-based Access Control (ABAC) | Access granted based on `multiple attributes` — user, resource, environment (e.g. department, time of day, location) — most flexible and granular model           |
| Geofencing                            | Restrict access based on geographic location                                                                                                                      |

### Physical Security

| Control | Description                           |
| ------- | ------------------------------------- |
| Camera  | Surveillance and deterrence           |
| Locks   | Restrict physical access to equipment |

### Deception Technologies

| Technology | Description                |
| ---------- | -------------------------- |
| Honeypot   | Attract and trap attackers |
| Honeynet   | Network of honeypots       |

### Common Security Terminology

| Term          | Definition                                                                 |
| ------------- | -------------------------------------------------------------------------- |
| Risk          | Potential for loss, damage, or destruction<br>Based on likelihood / impact |
| Vulnerability | `Weakness` that could be exploited                                         |
| Exploit       | Method used to take advantage of a vulnerability                           |
| Threat        | Potential cause of harm                                                    |
| CIA triad     | Confidentiality, Integrity, and Availability                               |

### Audits and Regulatory Compliance

| Standard      | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| Data locality | Laws requiring data to stay within a specific country/region      |
| PCI DSS       | Payment Card Industry Data Security Standards — for card payments |
| GDPR          | General Data Protection Regulation — EU data privacy law          |

### Network Segmentation

| Segment Type                                                                                                  | Description                                                              |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| IoT / IIoT                                                                                                    | Internet of Things / Industrial IoT — isolate from main network          |
| SCADA(supervisory control and data acquisition) / ICS(industrial control system) / OT(operational technology) | Industrial control systems — air-gap or strict segmentation              |
| Guest                                                                                                         | Separate network for visitors — no access to internal resources          |
| BYOD                                                                                                          | Bring Your Own Device — policy for personal devices on corporate network |

---

## 4.2 Summarize various types of attacks and their impact to the network

### Network Attacks

| Attack                                                     | Description                                                                                                      |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| DoS                                                        | Denial-of-service — overwhelm one system to deny service                                                         |
| DDoS                                                       | Distributed DoS — attack from many sources simultaneously                                                        |
| VLAN hopping                                               | Send packets from one VLAN to another<br>`Gain access to another VLAN` via `switch` spoofing or double `tagging` |
| MAC flooding                                               | Overflow switch `CAM table`, causing it to broadcast all traffic                                                 |
| ARP poisoning / ARP spoofing / Address Resolution Protocol | Send `fake ARP` replies to associate attacker's MAC with victim's IP                                             |
| DNS poisoning                                              | Corrupt `DNS cache` to redirect users to malicious IP                                                            |
| DNS spoofing                                               | Return `fraudulent DNS responses`                                                                                |
| Rogue DHCP                                                 | `Unauthorized` DHCP server assigns wrong gateway/DNS to clients                                                  |
| Rogue AP                                                   | `Unauthorized` access point on the network                                                                       |
| Evil twin                                                  | Rogue AP mimicking a legitimate `SSID` to intercept traffic                                                      |
| On-path attack                                             | Attacker positions themselves `between` two communicating parties (formerly MitM)                                |

### Social Engineering

| Attack           | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| Phishing         | `Fake emails` to steal credentials or install malware                |
| Dumpster diving  | Searching `trash` for sensitive information                          |
| Shoulder surfing | `Watching` someone enter credentials or PINs                         |
| Tailgating       | `Following` authorized person into restricted area                   |
| Malware          | `Software` designed to harm, steal data, or gain unauthorized access |

---

## 4.3 Network security features, defense techniques, and solutions

### Device Hardening

| Practice                            | Description                      |
| ----------------------------------- | -------------------------------- |
| Disable `unused` ports and services | Reduce attack surface            |
| Change default `passwords`          | Prevent easy unauthorized access |

### Network Access Control (NAC)

| Feature               | Description                                                                             |
| --------------------- | --------------------------------------------------------------------------------------- |
| Port security         | `Restrict` which MAC addresses can use a switch port                                    |
| 802.1X authentication | Requires credentials before network access / EAP to facilitate authentication processed |
| MAC filtering         | Only allow listed MAC addresses to connect                                              |

### Key Management

- Creation, distribution, storage, and maintenance of `cryptographic keys`
- Maintain the integrity and confidentiality

### Security Rules

| Feature                    | Description                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------- |
| ACL (Access Control List)  | Allowing or denying `packets` based on `IP addresses`, protocols, and port numbers |
| URL filtering              | Block access to specific websites or categories                                    |
| Content filtering          | Inspect and filter traffic based on content                                        |
| DLP (Data Loss Prevention) | Monitors and blocks sensitive data from leaving the network — ensure no leaked     |

### Zones

| Zone                 | Description                                                                       |
| -------------------- | --------------------------------------------------------------------------------- |
| Trusted              | Internal network — higher trust                                                   |
| Untrusted            | External network (internet) — no trust                                            |
| Screened subnet(DMZ) | Buffer zone between trusted and untrusted networks / Hosts public-facing services |
