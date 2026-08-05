# Operating System

An Operating System (OS) is the whole package that manages computer resources and lets us interact with it.

## Main OS Types

| OS | Developer | Notes |
|----|-----------|-------|
| Windows | Microsoft | Most common desktop OS |
| macOS | Apple | Unix-based, Apple hardware only |
| Linux | Community/Linus Torvalds | Open source, many distributions |
| Chrome OS | Google | Cloud-focused, runs on Chromebooks |
| Android / iOS | Google / Apple | Mobile operating systems |

---

## OS Architecture

```
┌─────────────────────┐
│     User Space      │  ← Applications, GUI, Shell
├─────────────────────┤
│    Kernel Space     │  ← Core OS functions
│  ┌───────────────┐  │
│  │ Process Mgmt  │  │
│  │ Memory Mgmt   │  │
│  │ File Mgmt     │  │
│  │ I/O Mgmt      │  │
│  └───────────────┘  │
├─────────────────────┤
│      Hardware       │
└─────────────────────┘
```

### Kernel

The kernel is the core of the OS — it has complete control over the system.

| Kernel Function | Description |
|----------------|------------|
| Process management | Scheduling which processes run and when |
| Memory management | Allocating and freeing RAM |
| File management | Reading/writing files on storage |
| I/O management | Communicating with input/output devices |

### User Space

| Component | Description |
|-----------|------------|
| GUI (Graphical User Interface) | Visual interface — windows, icons, menus |
| Shell / CLI | Text-based interface — Bash (Linux/Mac), PowerShell/CMD (Windows) |
| Applications | Programs the user runs (browser, office apps) |

---

## File Systems

The file system controls how data is stored and retrieved on storage devices.

| File System | OS | Notes |
|------------|-----|-------|
| NTFS | Windows | Supports large files, permissions, encryption |
| FAT32 | Cross-platform | Max 4 GB file size, max 2 TB volume |
| exFAT | Cross-platform | No file size limit, used for USB drives |
| ext4 | Linux | Standard Linux file system |
| APFS | macOS | Apple's modern file system (SSD optimized) |
| HFS+ | macOS | Older Apple file system |

### File System Concepts

| Concept | Description |
|---------|------------|
| File path | Location of a file (e.g., `C:\Users\Keith\file.txt`) |
| Root directory | Top of the file system (`/` on Linux, `C:\` on Windows) |
| Metadata | File info — name, size, created date, permissions |
| Block storage | Data stored in fixed-size blocks on disk |

---

## Process Management

| Concept | Description |
|---------|------------|
| Program | Inactive code stored on disk |
| Process | A running instance of a program |
| Thread | A unit of execution within a process |
| Multitasking | OS rapidly switches between processes (time-slicing) |
| PID | Process ID — unique number assigned to each process |

### Process States

| State | Description |
|-------|------------|
| Running | Currently executing on CPU |
| Ready | Waiting to be assigned to CPU |
| Blocked/Waiting | Waiting for I/O or resource |
| Terminated | Process has finished |

### Task Manager / Process Tools

| OS | Tool |
|----|------|
| Windows | Task Manager (`Ctrl+Shift+Esc`), `tasklist` |
| Linux | `top`, `htop`, `ps aux` |
| macOS | Activity Monitor, `top` |

---

## Memory Management

| Concept | Description |
|---------|------------|
| Virtual memory | Uses disk space as extra RAM when physical RAM is full |
| Swap space | Linux term for virtual memory on disk |
| Page file | Windows term for virtual memory file |
| Paging | Moving data between RAM and virtual memory in pages |
| Memory leak | Program continuously uses more RAM without releasing it |

---

## I/O Management

- Kernel manages communication between software and hardware devices
- Uses **drivers** — software that tells the OS how to talk to specific hardware
- **Interrupt (IRQ)**: Hardware signals the CPU that it needs attention
- **Buffer**: Temporary storage area while data is being transferred

---

## User Space & Shell

### Windows Command Line

| Command | Description |
|---------|------------|
| `dir` | List directory contents |
| `cd` | Change directory |
| `mkdir` | Create directory |
| `del` | Delete file |
| `copy` / `xcopy` | Copy files |
| `ipconfig` | Show IP configuration |
| `ping` | Test connectivity |
| `tasklist` | List running processes |
| `taskkill` | Kill a process |
| `sfc /scannow` | System file checker |

### Linux / macOS Command Line

| Command | Description |
|---------|------------|
| `ls` | List directory contents |
| `cd` | Change directory |
| `mkdir` | Create directory |
| `rm` | Remove file |
| `cp` | Copy files |
| `mv` | Move/rename files |
| `cat` | Display file content |
| `grep` | Search text in files |
| `chmod` | Change file permissions |
| `sudo` | Run as administrator |
| `ps aux` | List running processes |
| `kill` | Terminate process |
| `df -h` | Show disk usage |
| `top` | Real-time process monitor |

---

## File Permissions

### Linux Permissions

```
-rwxr-xr--
 │││││││││└─ other: read only
 ││││││└──── group: read+execute
 │││└─────── owner: read+write+execute
 └────────── file type (- = file, d = directory)
```

| Permission | Symbol | Value |
|------------|--------|-------|
| Read | r | 4 |
| Write | w | 2 |
| Execute | x | 1 |

- `chmod 755 file` → owner: rwx, group: r-x, other: r-x
- `chown user:group file` → change ownership

### Windows Permissions

| Permission | Description |
|------------|------------|
| Full Control | Read, write, modify, delete, change permissions |
| Modify | Read, write, and delete |
| Read & Execute | View and run files |
| Read | View only |
| Write | Create and modify |

---

## Logs

Logs are files that record system events — the system's diary.

| OS | Log Location |
|----|-------------|
| Windows | Event Viewer (`eventvwr.msc`) |
| Linux | `/var/log/` (syslog, auth.log, kern.log) |
| macOS | Console app, `/var/log/` |

### Log Types

| Log | Description |
|-----|------------|
| System log | OS events, driver errors |
| Application log | App-specific events |
| Security log | Login attempts, permission changes |
| Setup log | Installation events |

---

## The Boot Process

1. **Power on** — electricity flows to components
2. **POST** — BIOS/UEFI checks hardware
3. **Boot device selected** — from configured boot order (HDD, USB, CD, network)
4. **Bootloader runs** — loads the OS (GRUB for Linux, Windows Boot Manager for Windows)
5. **Kernel loads** — initializes hardware drivers and system services
6. **Init/systemd** — starts background services (Linux)
7. **Login screen** — OS is ready

### Boot Methods

| Method | Use Case |
|--------|---------|
| USB drive | Install OS, recovery |
| Optical Media (DVD) | Install OS (older) |
| Network (PXE) | Boot from network server |
| Hard drive | Normal startup |

---

## Virtual Machines (VMs)

| Concept | Description |
|---------|------------|
| VM | Software emulation of a physical computer |
| Hypervisor | Software that creates and manages VMs |
| Type 1 (Bare metal) | Runs directly on hardware (VMware ESXi, Hyper-V) |
| Type 2 (Hosted) | Runs on top of an OS (VirtualBox, VMware Workstation) |
| Snapshot | Save current VM state to restore later |
| Clone | Copy of a VM |

**Benefits:**
- Run multiple OSes on one machine
- Isolated test environments
- Easy backup and recovery
- Efficient use of hardware

---

## Remote Access

| Tool | OS | Protocol |
|------|----|---------|
| Remote Desktop (RDP) | Windows | Port 3389 |
| SSH | Linux/macOS | Port 22 |
| VNC | Cross-platform | Various ports |
| TeamViewer | Cross-platform | Proprietary |

---

## OS Updates & Patching

- **Security patches**: Fix vulnerabilities
- **Feature updates**: Add new functionality
- **Driver updates**: Improve hardware compatibility
- Best practice: Keep OS updated to protect against known threats
