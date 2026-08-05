# Physical Security

- Physical security can also refer to protection from catastrophic damage to the data center.
- Keeping unauthorized or ill-intentioned people out of places that they do not belong
- Human Error is a major cause of data center downtime (60%)

## Depth of security

<img src="/image/depthofsecurity.png" alt="datacenterimage">

<br>

<img src="/image/datacenterprotection.png" alt="datacenterimage">

1.  Increasing security level when entering the data center

2.  Perimeter protection and intrusion detection

- Fencing / Walis
- Barbwire facing outwards, slanted 45 degrees
- Security control room/guard house
- Boom barriers
- Concrete bollards
- CCTV(Closed-Circuit Television) cameras
- Security zones
- Access control (badge) system
- Security awareness posters

## Access Criteria (for people)

- Personal identity
  - who are you
- Purpose of visit
  - why are you here
- Need to know
  - Grant access to specific people for specific tasks

### Physical Security Identification Methods

- What you have
  - keys, cards, tokens
- What you know
  - Password and PINs
- What you are
  - Physical traits
- Combining methods to increase reliability

## Other item need to monitor

Monitor at least

- Temperature / Humidity in various zones
- UPS status
- Water leakage
- Fire suppression
- Air conditioning
- Standby generator set

Nice to have

- Breaker / PDU level monitoring
- Rack door open / close
- Power, temperature, humidity inside the rack
- Pressure / airflow

## Monitoring system

- To have the ability to see at a glance everything is in a normal state
- To have peace of mind that should an alarm condition occurs, the relevant personnel will be informed（24x7 informing relevant staff）
- Have centralized monitoring capabilities that integrates with current monitoring software
- Keep a history of alarms and trending data for analysis（provide detailed reports）

<br>

1. Environmental Monitoring

- a network of sensors, data platforms, and communication tools designed to measure, record, and analyze environmental parameters
- air quality, temperature, humidity, and water quality—in real-time

<br>

2. Building Management System

- Provides High-level monitoring (i.e. full parameter monitoring)
- More detailed level compared to an EMS

<br>

3. Data Centre Infrastructure Management (DCIM)

<img src='/Image/DCIM.jpg'>

Integrates information technology and facility management disciplines to centralize monitoring, management and intelligent capacity planning of a data centre's critical systems

A lot of variances exist with most DCIM solutions to focus on:

- Asset management
- Power monitoring
- Environmental monitoring
- Capacity planning
- Change management

## Notification system for monitoring system

Should be able to alert `persons` and `groups` relevant to the alarm detected
Should be able to have `various thresholds`, both severity-based and timing-based with corresponding alerts
Alerts to be communicated by

- E-mail
- SNMP(Simple Network Management Protocol)
- SMS (Short Message Service)
- Audible alarm
- Voice dialling
