# What is data center?

- Specialized facility designed
  - to house `servers, storage systems, networking `
- A wide range of digital services
  - `websites, cloud computing, data storage, financial` etc
  - DC market is forecast to surpass `$500` billion by 2030
- Critical National `Infrastructure`
- `24` hour `365` day per year

## Type of data center

| Type              | Description                                               |
| ----------------- | --------------------------------------------------------- |
| Enterprise        | `Self`-owned                                              |
| Colocation (Colo) | Provide service to multiple `tenants`                     |
| Hyperscale        | `Massive` self-built facilities for global services       |
| Edge              | Distributed near `users` for ultra-low latency. (5G, IOT) |
| Cloud             | `Virtualised` resources on demand                         |

## Reliability, Efficiency, Security

1. Reliability (Availability levels)

- 99.999% -> 5.26 min downtime
- 99.99% -> 52.6 min downtime
- 99.9% -> 8.76 hour downtime
- 99.9% -> 87.6 hour downtime

2. 3 type of downtime

- Planned downtime (scheduled maintenance, upgrades)
- Unplanned downtime (failtures, disasters, human errors)
- Partial downtime

Main `causes` of downtime in Unplanned downtime

- Power failure (25%)
- Human error (22%) -> $9000 lost per min
- Cooling failure (12%) / Natural disaster

3. Impact

- Financial
  - lost revenue
  - SLA penalties
- Reputational
  - Brand damage
  - customer trust
- Legal
  - GDPR fines

## Standard

| 規格名            | 発行機関                 | 主な用途                  | 認証                 |
| ----------------- | ------------------------ | ------------------------- | -------------------- |
| ANSI/TIA-942      | TIA（米国）              | Design・設計・構造・配線  | あり（Rated 1〜4）   |
| Uptime Tier I〜IV | Uptime Institute（米国） | Operation・可用性・冗長性 | あり（Tier認証）     |
| ISO/IEC 22237     | ISO / IEC（国際）        | DC全体・国際標準          | なし（ガイドライン） |
| EN 50600          | CENELEC（欧州）          | 欧州DC標準                | あり（クラス1〜4）   |
| ISO/IEC 27001     | ISO（国際）              | 情報セキュリティ管理      | あり（ISMS認証）     |

### ANSI/TIA-942

<img src='../image/datacentertiers.webp'>

Coverage:

1. building `structure`
2. `power` distribution
3. `cooling` systems
4. `telecommunications` cabling

## Location & Building Requirements

| Category               | Key Considerations       | Strategic Objectives                                                        |
| ---------------------- | ------------------------ | --------------------------------------------------------------------------- |
| Geographical Location  | Hazards / Environment    | Earthquake, flooding, typhoon, lightning                                    |
| Infrastructure Support | Power / Water / cost     | Power and water supply, Power cost, fuel reserve                            |
| Networking             | carriers / MMR / Cabling | At least two independent carriers, Cabling design(separate physical routes) |
| Building               | structural               | Floor load capacity, Clear ceiling height, Loading access                   |
| Physical Security      | Layered Defense          | Implement `Mantrap` entries, 24/7 CCTV, assess ability                      |
| Thermal & Fire         | Cooling & Safety         | HVIC, fire suppression                                                      |
| Scalability            | Modular Growth           | Ensure high floor-loading capacity and vertical clearance                   |
| Cost & Logistics       | TCO & Accessibility      | PUE, WUE, tax incentives, and 24/7 technician access                        |
