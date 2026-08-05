# Grounding Design

Grounding (or earthing) is the process of creating a low-resistance physical connection between an electrical circuit and the Earth.

## Reason of grounding

- Safety
  - Clear electrical faults
  - Prevent Damage from Static Electricity
- Enhance Network Performance
- Comply with Industry Standards and Regulations

## Signal Reference Grid (SRG)

<img src="/image/SRG.jpeg" alt="SRG">

It is a specialized grounding network specifically designed to support high-frequency digital equipment

Main purpose:

1. Reduce Electrical Noise (EMI/RFI)
2. Ensure Equipotential Bonding

- All metallic structures — such as racks, cabinets, cable trays, and raised floor pedestals — are bonded to the SRG. This ensures that no potential difference exists between equipment, preventing ground loops and signal disturbances.

3. Enhance Safety:

- The SRG helps dissipate fault currents safely to the main grounding system, reducing shock hazards for personnel and protecting equipment from damage.

4. Support High-Frequency Performance:

- Modern data centers run high-speed digital signals. The SRG provides a low-impedance path for high-frequency return currents, ensuring signal integrity and optimal equipment performance.

5. All racks must be individually bonded to the SRG and Serial bonding is not allowed
