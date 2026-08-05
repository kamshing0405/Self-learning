## Cooling System flow (冷却システム)

1. Server heat (サーバーの熱)
2. Absorbed by CRAC/CRAH (CRAC/CRAH で吸収)
3. chilled water produced by Chiller (Chiller で冷水製造)
4. heat dissipated into the atmosphere by Cooling Tower (Cooling Tower で大気へ放熱)

## Server heat

### Heat generation sources in data center

- IT equipment
- Power Distribution Losses
- Lighting
- Human Occupancy

### Air Distribution Methods

`Raised Floor`

- 600 mm square tiles
- Air Distribution: Downflow
- Cooling Plenum -> maximize efficiency
- Static Pressure -> maintain airflow

### Airflow Management & Containment

Racks are arranged alternating front-to-front and back-to-back. This physically separates cool supply air from hot exhaust air.

Without separation, cold and hot air mix — creating hot spots where servers overheat. This forces CRAC units to work harder, wasting energy and raising PUE. Adding physical containment panels eliminates mixing almost entirely.

分離しないと冷気と熱気が混合し、サーバーが十分に冷えません。

1.  cold aisle Containment (コールドアイル)

<br>

<img src="../image/coldaisle.png" alt="Cold Aisle Containment" width="400"/>

<br>

- Encloses the cold aisle, creating a pressurized chamber that delivers cool air exclusively to the server intakes
- Pros
  - `Easy` to install
  - `Cost-effective`

- Cons
  - `Hot` Workspace
  - Efficiency `issue`

<br>

2. Hot Aisle Containment (ホットアイル)（mainly used）

<br>

<img src="../image/hotaisle.png" alt="Hot Aisle Containment" width="400"/>

<br>

- HACS focuses on capturing hot exhaust air directly from the IT equipment and directing it into a closed return system.
- Pros
  - High `efficiency`
  - `Comfortable` Environment
- Cons
  - More `complex` installation
  - `Higher cost` / Fire Suppression

<br>

Concerning point in building design

- Physical Barriers
- Fire Protection
- Performance Metrics
- Ride-through Capability
  - `HAC` generally offers `better` thermal ride-through time than `CAC` during a cooling failure because it maintains a larger reservoir of cool air in the room

<br>

## CRAC(Computer Room Air Conditioner)

<img src='../image/crac.webp'>

- Mechanism (`DX System`)
- Self-contained refrigerant cycle. Works independently — no external chiller needed
- Small to mid-size DCs

## CRAH (Computer Room Air Handler)

<img src='../image/crah.webp' class=''>

- Mechanism (Chilled Water): Unlike a CRAC, a CRAH does not have a compressor inside. It functions as a heat exchanger using chilled water supplied by an external Chiller plant.

- Chilled Water Loop + Refrigerant loop + Condenser Water Loop
- Chiller System
  - The chiller is the `heart` of large-scale DC cooling.
  - It refrigerates water down to 7–12°C and pumps it to `CRAH` units throughout the facility.
  - Multiple chillers run in parallel with `N+1 redundancy`

  - Uses chilled water supplied by an external chiller plant. No internal refrigerant cycle

- Evaporator
  - provide coolilled water (7C-12C) and return hot water (12C-18C)
  - ΔT = 14 - 7 = 7°C
  - Centrifugal Compressor

- PUE / Water Usage Effectiveness

Air flow containment

- panels, doors, and blanking plates to prevent cold and hot air from mixing.

Cold aisle containment encloses the cold aisle so cold air only reaches server intakes. Hot aisle containment captures exhaust air directly and routes it back to the CRAH. Blanking panels fill empty rack slots to prevent air bypass.

- Key evulation

- PUE (Power Usage Effectiveness) = Total DC power ÷ IT equipment power
- WUE (Water Usage Effectiveness) = Annual water used (L) ÷ IT energy (kWh)
