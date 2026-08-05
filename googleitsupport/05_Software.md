# Software

Software is a collection of instructions that tells hardware what to do.

---

## Types of Software

| Type                 | Description                   | Examples                              |
| -------------------- | ----------------------------- | ------------------------------------- |
| System software      | Manages hardware and platform | OS, drivers, firmware                 |
| Application software | Programs users interact with  | Browser, Word, Photoshop              |
| Utility software     | Maintenance and support tools | Antivirus, disk cleaner, backup tools |

---

## Software Licenses

| License Type | Description                                             |
| ------------ | ------------------------------------------------------- |
| Commercial   | Paid, proprietary — you buy the right to use            |
| Freeware     | Free to use, but source code is closed                  |
| Open source  | Source code available — free to use, modify, distribute |
| Shareware    | Free trial, pay for full version                        |
| EULA         | End User License Agreement — legal terms for use        |

---

## Firmware

Software permanently stored in hardware — runs before the OS loads.

| Firmware        | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| BIOS            | Basic Input/Output System — older, initializes hardware on startup  |
| UEFI            | Unified Extensible Firmware Interface — modern replacement for BIOS |
| Router firmware | Software embedded in routers/switches                               |
| Drive firmware  | Manages HDD/SSD operation                                           |

---

## Programming & Scripting

### How Code Becomes a Program

| Step        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| Source code | Human-written code (Python, C++, Java)                        |
| Compiler    | Translates source code into machine code (binary) — done once |
| Interpreter | Translates and runs code line by line — done at runtime       |
| Assembler   | Converts assembly language to machine code                    |

### Assembly Language

- Low-level language that maps closely to machine code
- Human-readable representation of binary instructions
- Example: `MOV AX, 1` → moves value 1 into register AX

### Scripting Languages

Scripts automate repetitive tasks without compilation.

**Windows:**

| Tool         | Description                                                |
| ------------ | ---------------------------------------------------------- |
| PowerShell   | Powerful scripting — object-based, manages Windows systems |
| Batch (.bat) | Simple command scripts — legacy MS-DOS                     |

**Linux / Unix / macOS:**

| Tool | Description                                   |
| ---- | --------------------------------------------- |
| Bash | Most common shell script for Unix/Linux/macOS |
| Zsh  | Extended version of Bash — default in macOS   |
| sh   | Original Unix shell                           |

**Cross-platform:**

| Language   | Common Use                                         |
| ---------- | -------------------------------------------------- |
| Python     | Automation, data processing, system administration |
| JavaScript | Web development, automation (Node.js)              |
| Ruby       | Web apps, scripting                                |

---

## Version Control

Tracks changes to code over time — allows rollback and collaboration.

| Tool            | Description                                     |
| --------------- | ----------------------------------------------- |
| Git             | Most popular distributed version control system |
| GitHub / GitLab | Cloud platforms for hosting Git repositories    |
| SVN             | Older centralized version control               |

### Basic Git Concepts

| Concept           | Description                               |
| ----------------- | ----------------------------------------- |
| Repository (repo) | Project folder tracked by Git             |
| Commit            | Saved snapshot of changes                 |
| Branch            | Separate line of development              |
| Merge             | Combine branches                          |
| Pull request      | Request to merge changes into main branch |

---

## Software Installation & Management

### Windows

| Method                 | Tool                             |
| ---------------------- | -------------------------------- |
| Installer (.exe, .msi) | Double-click to run setup wizard |
| Microsoft Store        | App store for Windows            |
| Package manager        | `winget`, Chocolatey             |

### Linux

| Distro         | Package Manager | Commands                    |
| -------------- | --------------- | --------------------------- |
| Ubuntu/Debian  | apt             | `apt install`, `apt update` |
| Red Hat/CentOS | yum/dnf         | `yum install`, `dnf update` |
| Arch           | pacman          | `pacman -S`                 |

### macOS

| Method    | Tool                                       |
| --------- | ------------------------------------------ |
| App Store | GUI app store                              |
| Homebrew  | Community package manager — `brew install` |
| DMG files | Drag-and-drop installation                 |

---

## Malware & Security Software

### Types of Malware

| Type       | Description                                         |
| ---------- | --------------------------------------------------- |
| Virus      | Attaches to files, spreads when executed            |
| Worm       | Self-replicates across networks without user action |
| Trojan     | Disguised as legitimate software                    |
| Ransomware | Encrypts files, demands payment                     |
| Spyware    | Secretly monitors user activity                     |
| Adware     | Displays unwanted advertisements                    |
| Rootkit    | Hides itself deep in OS — hard to detect            |
| Keylogger  | Records keystrokes                                  |

### Antivirus / Anti-malware

- Scans files and processes for known malware signatures
- Real-time protection monitors activity
- Keep definitions updated

---

## Software Troubleshooting

| Issue               | Common Causes                        | Solutions                         |
| ------------------- | ------------------------------------ | --------------------------------- |
| App won't open      | Corrupt install, missing dependency  | Reinstall, check dependencies     |
| App crashes         | Bug, insufficient RAM, corrupt file  | Update app, check logs, reinstall |
| Slow performance    | Too many processes, low RAM, malware | Task manager, clean startup, scan |
| Compatibility issue | Wrong OS version, 32/64-bit mismatch | Check system requirements         |

### General Troubleshooting Steps

1. Identify the problem — what changed?
2. Reproduce the issue
3. Check event logs / error messages
4. Google the specific error code
5. Try updating or reinstalling
6. Check for malware
7. Escalate if needed

---

## Cloud Software (SaaS)

Software as a Service — applications hosted in the cloud, accessed via browser.

| Example                | Category           |
| ---------------------- | ------------------ |
| Google Workspace       | Productivity       |
| Microsoft 365          | Productivity       |
| Salesforce             | CRM                |
| Zoom                   | Video conferencing |
| Slack                  | Team communication |
| Dropbox / Google Drive | Cloud storage      |

**Advantages:**

- No local installation required
- Automatic updates
- Accessible from anywhere
- Pay-per-use pricing

---

## IT Automation & Configuration Management

| Tool                    | Use                                                |
| ----------------------- | -------------------------------------------------- |
| Puppet                  | Automate server configuration                      |
| Chef                    | Automate infrastructure                            |
| Ansible                 | Agentless automation via SSH                       |
| Terraform               | Infrastructure as code — provision cloud resources |
| Bash/PowerShell scripts | Simple automation tasks                            |
