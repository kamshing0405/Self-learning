# Applications

## DNS (Domain Name System)

### Why DNS?
- Humans use names like `www.google.com`; routers use IP addresses like `142.250.80.46`
- DNS translates human-readable names → IP addresses

### DNS Hierarchy
DNS is organized as a tree:

```
Root (.)
├── .com
│   ├── google.com
│   └── berkeley.edu
├── .edu
│   └── berkeley.edu
│       └── eecs.berkeley.edu
└── .org
```

| Level | Description |
| ----- | ----------- |
| Root servers | 13 root server clusters (labeled A–M); know all TLD servers |
| TLD servers | `.com`, `.edu`, `.org`, etc. |
| Authoritative servers | Hold actual records for a domain (e.g. `google.com`) |
| Recursive resolver | Queries on behalf of clients; caches results |

### DNS Resolution Process
1. Client asks its **recursive resolver** (usually provided by ISP or 8.8.8.8)
2. Recursive resolver queries the **root** → root points to TLD server
3. Resolver queries **TLD server** → TLD points to authoritative server
4. Resolver queries **authoritative server** → gets the actual IP address
5. Resolver caches the result and returns it to the client

> "DNS queries always start at the root."

Most queries skip steps 2–4 because the resolver has **cached** previous answers.

### DNS Record Types

| Record | Description |
| ------ | ----------- |
| **A** | Domain → IPv4 address |
| **AAAA** | Domain → IPv6 address |
| **CNAME** | Alias — points one name to another name |
| **MX** | Mail exchange — mail server for a domain (with priority) |
| **NS** | Name server — which server is authoritative for a zone |
| **PTR** | Reverse lookup — IP → domain name |
| **TXT** | Text record — used for SPF, DKIM, domain verification |
| **SRV** | Service record — hostname + port for specific services |

### Caching and TTL
- Each DNS record has a **TTL (Time-To-Live)** — how long it can be cached
- Caching reduces load on high-level servers and speeds up resolution
- Recursive resolvers serve many clients → larger combined cache benefit

### DNS Protocol
- Uses **UDP port 53** for regular queries (fast, stateless)
- Uses **TCP port 53** for zone transfers (large data)

### DNS Security
| Feature | Description |
| ------- | ----------- |
| **DNSSEC** | Digitally signs DNS records to prevent tampering |
| **DoH** | DNS over HTTPS — encrypts queries via HTTPS (port 443) |
| **DoT** | DNS over TLS — encrypts queries via TLS (port 853) |
| **DNS poisoning** | Attack — corrupting DNS cache to redirect users to malicious IPs |

---

## HTTP (HyperText Transfer Protocol)

### Overview
- Application-layer protocol for transferring web content
- Runs over TCP (reliable delivery)
- **HTTP** runs on port 80; **HTTPS** (HTTP over TLS) runs on port 443

### HTTP Request-Response Model
```
Client → Server:  GET /index.html HTTP/1.1
                  Host: www.example.com

Server → Client:  HTTP/1.1 200 OK
                  Content-Type: text/html
                  [HTML content]
```

### Common HTTP Methods
| Method | Description |
| ------ | ----------- |
| GET | Retrieve a resource |
| POST | Submit data (e.g. form submission) |
| PUT | Update a resource |
| DELETE | Remove a resource |

### HTTP Status Codes
| Code | Meaning |
| ---- | ------- |
| 200 | OK — success |
| 301/302 | Redirect |
| 404 | Not Found |
| 500 | Internal Server Error |

### HTTP Versions

| Version | Key Feature |
| ------- | ----------- |
| HTTP/1.0 | New TCP connection per request |
| HTTP/1.1 | Persistent connections, pipelining |
| HTTP/2 | Multiplexing — multiple requests over one TCP connection |
| HTTP/3 | Runs over QUIC (UDP-based) — eliminates TCP head-of-line blocking |

### Cookies and State
HTTP is **stateless** by default — each request is independent. Cookies are used to maintain state (e.g. login sessions, shopping carts).
