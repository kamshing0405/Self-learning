# Raised floor and suspended ceiling

<img src="/image/airflow.jpeg" alt="Airflow">

The raised floor and suspended ceiling together form the `airflow` management system

Cold air rises from the underfloor `plenum` through `perforated tiles`

Hot air travels through the ceiling void back to the `CRAC/CRAH`.

Effective IT equipment height recommended 2,600–3,000mm+

## Raised floor (二重床) components

<img src="/image/flooring.jpeg" alt="Flooring">

1. The floor is elevated `30 cm to 90` cm above the concrete slab

2. Floor panels (フロアパネル) — `600×600mm` standard size

3. Pedestal + Stringer

4. Perforated `tiles` (穿孔タイル) (controlling cold airflow)

5. `Earthing` bonding

6. Advanced Cooling (The "Plenum")

- Targeted Cooling: cold air is pushed exactly where it's needed.

7. Cable Management

- Power and data cables are hidden below the floor
- Easy to organise airflow and keeps the workspace clean
- Increasing facility flexibility
- Underfloor piping and cables must not obstruct airflow

8. Loading Capacity

TIA-942 - concentrated load 8.9 kN (~900 kg) / High-density DCs may require 12 kN/m² or more

- Three types of loading capacity
  1. Uniform Distributed Load (UDL)
  - Applied over the entire area of the panel/tile
  - mainly deploying liquid-cooled AI clusters (like NVIDIA DGX racks)
  2. Concentrated (Point) Load
  - It measures the ability of a single floor tile to support a heavy load on a very small area
  3. Rolling Load (Dynamic Load)
  - It measures the stress on the floor while a heavy rack is being pushed across it on casters

## Ceiling Design (吊り天井)

### Open Ceiling

<img src="/image/Structuredeck.jpg" alt="Structure Deck">

1. Structural Ceiling Grid

- Typically made of extruded aluminum or heavy-gauge steel.

2. Integrated Support (The "Strut")

- The grid members have a continuous threaded `slot` (T-slot)
- To bolt Cable Trays, Fiber Runners, and Power Busways directly to the ceiling at any point without `creating dust or using a drill`

2. Ceiling Return Panels (May have)

- Airflow Management ( upper Plenum)
- Hot air from the servers is forced into this "attic" space and sucked back to the cooling units

3. Top Containment Ceiling Design

- In high-end data centers, these are almost always made of tempered `glass` or transparent polycarbonate framed in aluminum.

- By separating air streams,, this method and this method allow for higher supply air temperatures and reduced chiller load, leading to substantial energy savings.

<img src="/image/TopContainmentCeiling.webp" alt="Top Containment Ceiling">

<img src="/image/airflow.jpg" alt="Airflow">
