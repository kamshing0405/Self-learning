# Networking

Networking connects computers and devices so they can share data and resources.

---

## The Internet

- A massive global network of interconnected computers and devices
- Built on a network of physical cables (fiber, copper, wireless signals)
- Uses a common set of protocols (TCP/IP) so all devices can communicate

### ISP (Internet Service Provider)

- Company that provides internet access (e.g., AT&T, Comcast, BT, PCCW)
- Connects your home/office network to the wider internet
- Types of connections: DSL, Cable, Fiber, Satellite, 5G

---

## Network Layers — TCP/IP Model

| Layer | Description | Protocols |
|-------|------------|-----------|
| Application | User-facing services | HTTP, DNS, SMTP, FTP |
| Transport | End-to-end communication | TCP, UDP |
| Internet | Logical addressing, routing | IP, ICMP, ARP |
| Network Access | Physical transmission | Ethernet, Wi-Fi |

### TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Connection-oriented (handshake) | Connectionless |
| Reliability | Guaranteed delivery | No guarantee |
| Speed | Slower (overhead) | Faster |
| Use case | Web, email, file transfer | Video streaming, VoIP, gaming |

---

## IP Addressing

### IPv4

- 32-bit address written as 4 octets: `192.168.1.1`
- About 4.3 billion possible addresses — nearly exhausted

| Class | Range | Default Mask | Use |
|-------|-------|-------------|-----|
| A | 1–126 | /8 | Large networks |
| B | 128–191 | /16 | Medium networks |
| C | 192–223 | /24 | Small networks |
| D | 224–239 | — | Multicast |

### Private IP Ranges (RFC 1918)

| Range | Class |
|-------|-------|
| 10.0.0.0 – 10.255.255.255 | A |
| 172.16.0.0 – 172.31.255.255 | B |
| 192.168.0.0 – 192.168.255.255 | C |

- **Loopback**: `127.0.0.1` — points back to your own machine
- **APIPA**: `169.254.x.x` — auto-assigned when DHCP fails

### IPv6

- 128-bit address: `2001:0db8:85a3::8a2e:0370:7334`
- About 340 undecillion addresses — solves IPv4 exhaustion
- Factors limiting IPv4: number of internet-connected devices, number of websites

---

## MAC Address

- **Media Access Control (MAC) address**: Unique hardware identifier burned into every NIC
- 48 bits, written as `00:1A:2B:3C:4D:5E`
- Used for communication on the same local network (Layer 2)
- First 3 bytes: OUI (manufacturer ID); Last 3 bytes: device-specific

**IP vs MAC:**

| Feature | IP Address | MAC Address |
|---------|-----------|-------------|
| Layer | Layer 3 (Network) | Layer 2 (Data Link) |
| Assigned by | DHCP or manual | Manufacturer |
| Scope | Globally routable | Local network only |
| Changes | Can change | Fixed (can be spoofed) |

---

## Network Hardware

| Device | Layer | Function |
|--------|-------|---------|
| Hub | 1 | Broadcasts data to all ports |
| Switch | 2 | Forwards frames based on MAC address |
| Router | 3 | Routes packets between networks using IP |
| Modem | 1 | Converts digital signal to analog (and back) for ISP connection |
| Access Point (AP) | 2 | Extends network wirelessly |
| Firewall | 3–7 | Filters traffic based on rules |

---

## Network Cables & Wireless

### Ethernet (Wired)

| Standard | Speed | Max Distance |
|----------|-------|-------------|
| Cat 5 | 100 Mbps | 100 m |
| Cat 5e | 1 Gbps | 100 m |
| Cat 6 | 10 Gbps | 55 m |
| Cat 6a | 10 Gbps | 100 m |
| Fiber optic | 10–100+ Gbps | Km range |

### Wi-Fi Standards

| Standard | Max Speed | Frequency |
|----------|-----------|-----------|
| 802.11b | 11 Mbps | 2.4 GHz |
| 802.11g | 54 Mbps | 2.4 GHz |
| 802.11n (Wi-Fi 4) | 600 Mbps | 2.4/5 GHz |
| 802.11ac (Wi-Fi 5) | 3.5 Gbps | 5 GHz |
| 802.11ax (Wi-Fi 6) | 9.6 Gbps | 2.4/5/6 GHz |

---

## Network Stack

Data travels through layers as it moves between applications and the network.

```
Application (HTTP request)
      ↓
Transport (TCP segment — adds port numbers)
      ↓
Internet (IP packet — adds IP addresses)
      ↓
Network Access (Ethernet frame — adds MAC addresses)
      ↓
Physical (bits sent over wire/wireless)
```

On the receiving end, layers are unwrapped in reverse (encapsulation/decapsulation).

---

## Key Protocols

### DNS (Domain Name System)

- Translates human-readable domain names to IP addresses
- `www.google.com` → `142.250.80.4`
- **DNS resolution process**: Local cache → Hosts file → Recursive resolver → Root server → TLD server → Authoritative server

| DNS Record | Purpose |
|-----------|---------|
| A | Domain → IPv4 |
| AAAA | Domain → IPv6 |
| CNAME | Alias to another domain |
| MX | Mail server |
| TXT | Text info (SPF, verification) |

### DHCP (Dynamic Host Configuration Protocol)

- Automatically assigns IP addresses to devices on a network
- **DORA process**: Discover → Offer → Request → Acknowledge
- Assigns: IP address, subnet mask, default gateway, DNS server

### HTTP / HTTPS

| Protocol | Port | Description |
|----------|------|------------|
| HTTP | 80 | Hypertext Transfer Protocol — web traffic (unencrypted) |
| HTTPS | 443 | HTTP + TLS encryption — secure web traffic |

- The Web is essentially a collection of hypertext documents (HTML) linked together
- URLs, browsers, and web servers communicate using HTTP/HTTPS

---

## NAT (Network Address Translation)

- Allows multiple devices on a private network to share one public IP address
- Router translates private IPs to its public IP when traffic goes to the internet
- Helps conserve IPv4 addresses

---

## Ports

- Software addresses that direct traffic to the right application
- Range: 0–65535

| Port | Protocol |
|------|---------|
| 20/21 | FTP |
| 22 | SSH |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 67/68 | DHCP |
| 80 | HTTP |
| 110 | POP3 |
| 143 | IMAP |
| 443 | HTTPS |
| 3389 | RDP |

---

## Network Types

| Type | Scope |
|------|-------|
| PAN | Personal (Bluetooth) |
| LAN | Building/campus |
| WAN | Wide area (city, country, global) |
| WLAN | Wireless LAN |
| VPN | Encrypted tunnel over internet |

---

## IoT (Internet of Things)

- Everyday physical devices connected to the internet
- Examples: smart thermostats, security cameras, smart locks, medical devices
- Security concern: many IoT devices have weak default security settings
- Best practice: isolate IoT devices on a separate network/VLAN
