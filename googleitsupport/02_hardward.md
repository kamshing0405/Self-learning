# Hardware

Hardware is any physical component of a computer system that you can physically touch.

---

## CPU (Central Processing Unit)

The "brain" of the computer — executes every instruction and calculation.

### Key Concepts

| Concept | Description |
|---------|------------|
| Clock speed | Measured in GHz — how many cycles per second the CPU executes |
| Cores | Independent processing units within a CPU (dual-core, quad-core, etc.) |
| Threads | Virtual cores — allows one core to handle multiple tasks (hyper-threading) |
| 32-bit vs 64-bit | 64-bit CPUs can handle more RAM and larger data |
| CPU sockets | LGA (Land Grid Array) — Intel; PGA (Pin Grid Array) — AMD |

### CPU Cache

Cache stores frequently accessed data closer to the CPU for faster access.

| Level | Speed | Size | Description |
|-------|-------|------|-------------|
| L1 | Fastest | Smallest | Data currently in use — per core |
| L2 | Fast | Medium | Recently accessed data not in use — per core |
| L3 | Slower | Largest | Shared by all cores — ~2× faster than RAM |

### Data Path

**RAM → MCC → EDB → CPU**

- **MCC (Memory Controller Chip)**: Bridge between CPU and RAM
- **EDB (External Data Bus)**: Row of wires connecting components — carries data from RAM to CPU

### Overclocking

- Runs CPU at higher frequency than manufacturer specifications
- Increases performance but generates more heat
- Requires: adequate cooling, compatible motherboard, careful voltage increases
- Risk: damage if not done properly

---

## RAM (Random Access Memory)

Temporary storage — holds data the CPU is actively using. Data is lost when power is off.

| Type | Description |
|------|------------|
| DRAM | Dynamic RAM — needs constant refreshing |
| SRAM | Static RAM — faster, used in CPU cache |
| DDR SDRAM | Double Data Rate — current standard (DDR4, DDR5) |
| DDR4 | Current mainstream standard |
| DDR5 | Latest generation — faster, higher capacity |

- More RAM = ability to run more programs simultaneously
- RAM is volatile (data lost on power off)
- Typical modern PC: 8–32 GB

---

## Motherboard

The main circuit board connecting all components.

### Key Components

| Component | Description |
|-----------|------------|
| Chipset | Controls communication between CPU, RAM, and peripherals |
| Northbridge | Connects CPU to high-speed components (RAM, GPU) — now integrated into CPU |
| Southbridge | Connects CPU to slower peripherals (USB, storage) |
| PCIe slots | Expansion slots for GPU, NIC, SSD |
| RAM slots | DIMM slots for memory sticks |
| SATA ports | Connect hard drives and SSDs |
| CPU socket | LGA or PGA socket for the processor |

### Form Factors

| Form Factor | Size | Use |
|------------|------|-----|
| ATX | Full size | Desktop standard |
| Micro ATX | Smaller | Compact desktops |
| Mini ITX | Very small | Small form-factor builds |

---

## Storage

### HDD vs SSD

| Feature | HDD | SSD |
|---------|-----|-----|
| Technology | Spinning magnetic platters | Flash memory chips |
| Speed | ~100–200 MB/s | ~500 MB/s – 7000 MB/s (NVMe) |
| Durability | Fragile (moving parts) | Durable (no moving parts) |
| Noise | Audible | Silent |
| Cost | Cheaper per GB | More expensive |
| Use case | Bulk storage | OS, applications |

### Storage Interfaces

| Interface | Description |
|-----------|------------|
| SATA | Standard for HDDs and SSDs — up to 600 MB/s |
| NVMe (PCIe) | Fast interface for M.2 SSDs — up to 7000+ MB/s |
| M.2 | Form factor for NVMe or SATA SSDs |

### Data Units

| Term | Meaning |
|------|---------|
| RPM | Rotations per minute — HDD speed (5400, 7200 RPM) |
| Seek time | Time for read head to find data |

---

## Power Supply Unit (PSU)

- Converts AC (from wall outlet) to DC (used by computer components)
- Measured in **Watts** — match to system requirements
- **80 Plus rating**: Efficiency certification (80 Plus, Bronze, Gold, Platinum, Titanium)
- Modular PSUs allow unused cables to be detached

---

## Mobile Devices

### System on a Chip (SoC)

- Integrates CPU, GPU, RAM, and other components onto a single chip
- Used in smartphones, tablets — saves space and power

### Display Types

| Type | Description |
|------|------------|
| LCD (Liquid Crystal Display) | Uses backlight — common in laptops |
| LED | LCD backlit by LEDs — more efficient |
| OLED | Each pixel produces its own light — deeper blacks, vivid colors |
| IPS | Wide viewing angles — accurate colors |
| TN | Fastest response time — used in gaming monitors |

---

## Peripherals & Connectors

A peripheral is any device connected externally to add functionality.

### USB Standards

| Standard | Speed | Notes |
|----------|-------|-------|
| USB 2.0 | 480 Mbps | Hi-Speed |
| USB 3.0 | 5 Gbps | SuperSpeed |
| USB 3.1 | 10 Gbps | SuperSpeed+ |
| USB 3.2 | 20 Gbps | |
| USB4 / Thunderbolt | 40–80 Gbps | Also carries video/power |

### USB Connector Types

| Connector | Use |
|-----------|-----|
| Type-A | Standard rectangular port |
| Type-B | Square, used on printers |
| Micro USB | Older Android phones |
| USB-C | Modern universal connector |
| Lightning | Apple devices |

### Display Connectors

| Connector | Notes |
|-----------|-------|
| VGA | Analog, older monitors |
| DVI | Digital/analog, older |
| HDMI | Digital audio + video |
| DisplayPort | High refresh rates, daisy-chaining |

### Other Connectors

| Connector | Use |
|-----------|-----|
| SATA | Internal storage |
| Molex | Power to internal drives (older) |
| DB9 (RS-232) | Serial port for older peripherals |
| Punch down block | Terminates telephone/data lines |
| POTS | Plain Old Telephone Service — analog line |
| DSL | Digital Subscriber Line — internet over phone line |
| Fiber optic | Light-based high-speed data transmission |

---

## BIOS / UEFI

| Feature | BIOS | UEFI |
|---------|------|------|
| Full name | Basic Input Output System | Unified Extensible Firmware Interface |
| Storage | ROM/Flash | Flash |
| Interface | Text-only | GUI with mouse support |
| Boot drive size | Max 2.1 TB (MBR) | Supports 9.4 ZB (GPT) |
| Boot speed | Slower | Faster (supports Secure Boot) |
| Secure Boot | No | Yes |

### POST (Power-On Self Test)

1. BIOS/UEFI runs POST — checks hardware is working correctly
2. Beep codes or on-screen error if hardware failure detected
3. BIOS initializes hardware and loads essential drivers
4. Boot device selected from boot order
5. OS bootloader is handed control

### CMOS

- **CMOS (Complementary Metal-Oxide-Semiconductor)**: Small chip storing BIOS settings (date, time, boot order)
- Powered by a small coin cell battery on the motherboard
- Clearing CMOS resets BIOS to factory defaults
