# Micro-Frontend Architecture

This repository contains a **Micro-Frontend Architecture** built using **React** and **Vite Module Federation**.  
It showcases modular application design, reusability, and communication between multiple independently developed micro-frontends.

---
###  [Live Host app](https://host-app-sepia.vercel.app/)
###  [Live Email app](https://email-app-mfe.vercel.app/)
###  [Live Chat app](https://micro-frontend-pi.vercel.app/)


## Project Overview

The goal of this project was to design and implement a scalable micro-frontend system with three main parts:

| Application | Type | Description |
|--------------|------|-------------|
| **Host App** | Main Application | Serves as the shell/wrapper for all micro-frontends. Manages layout, routing, and shared design system. |
| **Chat App** | Micro-Frontend | A standalone application responsible for chat functionality (sending and receiving messages). |
| **Email App** | Micro-Frontend | A standalone application responsible for email management (viewing and composing emails). |

Each app can run **independently** or be **dynamically integrated** into the host using **Module Federation**.

---

## Key Features 

### Micro-Frontend Architecture
- Implemented using **Vite + @originjs/vite-plugin-federation**.
- Each micro-app runs independently with its own build and deploy process.
- The Host dynamically loads and renders the Chat and Email apps at runtime.

### Shared Design System
- A **centralized design system** is defined in the Host app.
- Shared components (`Card`, `Button`, `Input`) and a common **theme** ensure consistent UI across micro-apps.

### Communication Between Applications
- Used **Custom Events** for communication.
- Chat app can send messages to the Host, and the Host can send responses back to the Chat app.

### Scalability & Modularity
- Architecture supports easy addition of future micro-apps (e.g., Dashboard, Analytics).
- Each app has isolated code and dependencies, reducing coupling and improving maintainability.

---

## 🛠️ Tech Stack

| Category | Tools / Libraries |
|-----------|------------------|
| **Framework** | React (with Hooks) |
| **Build Tool** | Vite |
| **Micro-Frontend Framework** | @originjs/vite-plugin-federation |
| **Styling** | Tailwind CSS |
| **UI Components** | Custom reusable design system from Host |
| **Icons** | Lucide-React |
| **Deployment** | Vercel |

---


---

## Setup & Run Locally

### Clone the repository
```bash
git clone https://github.com/simran-dhiman01/micro-frontend.git
cd micro-frontend
```
### Install dependencies
```bash
cd host-app && npm install
cd ../chat-app && npm install
cd ../email-app && npm install
```
### Runs apps locally
```bash
cd chat-app && npm run dev
cd email-app && npm run dev
cd host-app && npm run dev
```
## Key Architectural Decisions & Trade-offs

### 1. Micro-Frontend Framework
- **Decision:** Used **Vite Module Federation** (`@originjs/vite-plugin-federation`)
- **Reasoning:** Enables dynamic loading of independent micro-apps (Chat, Email) within a single Host application.
- **Trade-off:** Slightly less mature ecosystem compared to Webpack’s Module Federation

---

### 2. Build Tool
- **Decision:** **Vite**
- **Reasoning:** Offers lightning-fast development with hot module replacement (HMR) and optimized builds.
- **Trade-off:** Some advanced Module Federation setups may need manual configuration.

---

### 3. Communication Mechanism
- **Decision:** Used **Browser Custom Events**
- **Reasoning:** Provides a simple, framework-agnostic way for Host and Micro-Apps to exchange data without tight coupling.
- **Trade-off:** Not persistent, not ideal for complex or multi-user real-time systems.

---

### 4. Design System Ownership
- **Decision:** Centralized the **Design System** inside the **Host Application**
- **Reasoning:** Ensures consistent UI, theme, and reusable components across all micro-frontends.
- **Trade-off:** Micro-apps depend on the host for design updates.

---

### 7. Scalability Strategy
- **Decision:** **Isolated Builds + Shared Design System**
- **Reasoning:** Each micro-app can be built, deployed, or versioned independently.
- **Trade-off:** Managing dependency versions across multiple apps increases maintenance.

---




