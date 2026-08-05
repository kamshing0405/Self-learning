# 4.0 Network Security (14%)

## 4.1 Explain the importance of basic network security concepts

### Logical Security

#### Encryption

| Concept         | Description                                       |
| --------------- | ------------------------------------------------- |
| Data in transit | Encrypt data moving across the network (TLS, VPN) |
| Data at rest    | Encrypt stored data (disk encryption)             |

#### Certificates & PKI

| Concept     | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| PKI         | Public Key Infrastructure — framework for issuing/managing certificates |
| Self-signed | Certificate signed by itself, not trusted by default                    |

#### Identity and Access Management (IAM)

| Method                    | Description                                                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| MFA                       | Multifactor Authentication — two or more factors                                                                                                     |
| SSO                       | Single Sign-On — one login for multiple systems                                                                                                      |
| RADIUS                    | Remote Authentication Dial-in User Service — `centralized` AAA (ports 1812/1813)                                                                     |
| LDAP                      | Lightweight Directory Access Protocol — directory queries (port 389)                                                                                 |
| SAML                      | Security Assertion Markup Language — SSO federation<br>XML-based, share authentication and authorization details between `different system` standard |
| OAuth                     | Open Authorization — allows third-party apps to access resources on behalf of a user without sharing passwords (e.g. "Login with Google")            |
| TACACS+                   | Terminal Access Controller Access Control System Plus — AAA for network devices (port 49)                                                            |
| Time-based authentication | OTP changes on a time interval (TOTP)                                                                                                                |

#### Authorization

| Concept                               | Description                                                                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Least privilege                       | Grant only the minimum access required                                                                                                                        |
| Role-based access control (RBAC)      | Permissions assigned by role, not individual                                                                                                                  |
| Mandatory Access Control (MAC)        | OS enforces access based on security labels/classifications — users cannot change permissions (e.g. SELinux, government systems)<br>Highly secure environment |
| Discretionary Access Control (DAC)    | Resource owner decides who can access — users can grant permissions to others (e.g. standard Linux/Windows file permissions)                                  |
| Attribute-based Access Control (ABAC) | Access granted based on multiple attributes — user, resource, environment (e.g. department, time of day, location) — most flexible and granular model         |
| Geofencing                            | Restrict access based on geographic location                                                                                                                  |

### Physical Security

| Control | Description                           |
| ------- | ------------------------------------- |
| Camera  | Surveillance and deterrence           |
| Locks   | Restrict physical access to equipment |

### Deception Technologies

| Technology | Description                                  |
| ---------- | -------------------------------------------- |
| Honeypot   | Decoy system to attract and detect attackers |
| Honeynet   | Network of honeypots                         |

### Common Security Terminology

| Term          | Definition                                       |
| ------------- | ------------------------------------------------ |
| Risk          | Likelihood × impact of a threat                  |
| Vulnerability | Weakness that could be exploited                 |
| Exploit       | Method used to take advantage of a vulnerability |
| Threat        | Potential cause of harm                          |
| CIA triad     | Confidentiality, Integrity, and Availability     |

### Audits and Regulatory Compliance

| Standard      | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| Data locality | Laws requiring data to stay within a specific country/region      |
| PCI DSS       | Payment Card Industry Data Security Standards — for card payments |
| GDPR          | General Data Protection Regulation — EU data privacy law          |

### Network Segmentation

| Segment Type     | Description                                                              |
| ---------------- | ------------------------------------------------------------------------ |
| IoT / IIoT       | Internet of Things / Industrial IoT — isolate from main network          |
| SCADA / ICS / OT | Industrial control systems — air-gap or strict segmentation              |
| Guest            | Separate network for visitors — no access to internal resources          |
| BYOD             | Bring Your Own Device — policy for personal devices on corporate network |

---

## 4.2 Summarize various types of attacks and their impact to the network

### Network Attacks

| Attack         | Description                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| DoS            | Denial-of-service — overwhelm one system to deny service                        |
| DDoS           | Distributed DoS — attack from many sources simultaneously                       |
| VLAN hopping   | Gain access to another VLAN via switch spoofing or double tagging               |
| MAC flooding   | Overflow switch CAM table, causing it to broadcast all traffic                  |
| ARP poisoning  | Send fake ARP replies to associate attacker's MAC with victim's IP              |
| ARP spoofing   | Another term for ARP poisoning                                                  |
| DNS poisoning  | Corrupt DNS cache to redirect users to malicious IP                             |
| DNS spoofing   | Return fraudulent DNS responses                                                 |
| Rogue DHCP     | Unauthorized DHCP server assigns wrong gateway/DNS to clients                   |
| Rogue AP       | Unauthorized access point on the network                                        |
| Evil twin      | Rogue AP mimicking a legitimate SSID to intercept traffic                       |
| On-path attack | Attacker positions themselves between two communicating parties (formerly MitM) |

### Social Engineering

| Attack           | Description                                         |
| ---------------- | --------------------------------------------------- |
| Phishing         | Fake emails to steal credentials or install malware |
| Dumpster diving  | Searching trash for sensitive information           |
| Shoulder surfing | Watching someone enter credentials or PINs          |
| Tailgating       | Following authorized person into restricted area    |

### Malware

- Software designed to harm, steal data, or gain unauthorized access
- Types: virus, worm, ransomware, spyware, trojan, rootkit

---

## 4.3 Given a scenario, apply network security features, defense techniques, and solutions

### Device Hardening

| Practice                          | Description                      |
| --------------------------------- | -------------------------------- |
| Disable unused ports and services | Reduce attack surface            |
| Change default passwords          | Prevent easy unauthorized access |

### Network Access Control (NAC)

| Feature       | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| Port security | Restrict which MAC addresses can use a switch port                     |
| 802.1X        | Port-based authentication — requires credentials before network access |
| MAC filtering | Only allow listed MAC addresses to connect                             |

### Key Management

- Proper generation, storage, rotation, and revocation of cryptographic keys

### Security Rules

| Feature                    | Description                                                                    |
| -------------------------- | ------------------------------------------------------------------------------ |
| ACL (Access Control List)  | Permit or deny traffic based on IP/port rules                                  |
| URL filtering              | Block access to specific websites or categories                                |
| Content filtering          | Inspect and filter traffic based on content                                    |
| DLP (Data Loss Prevention) | Monitors and blocks sensitive data from leaving the network — ensure no leaked |

### Zones

| Zone            | Description                                       |
| --------------- | ------------------------------------------------- |
| Trusted         | Internal network — higher trust                   |
| Untrusted       | External network (internet) — no trust            |
| Screened subnet | DMZ — semi-trusted zone for public-facing servers |
