# DevFlow CLI 🚀

<div align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue.svg" alt="TypeScript">
  <img src="https://img.shields.io/badge/React-18+-61DAFB.svg" alt="React">
</div>

<div align="center">
  <h3>Professional Developer Tools Suite</h3>
  <p>Automate your development workflow with elegant, production-ready tools</p>
  
  <a href="https://devflow-cli.vercel.app">🌐 Live Demo</a> •
  <a href="#installation">📦 Installation</a> •
  <a href="#features">✨ Features</a> •
  <a href="#documentation">📚 Documentation</a>
</div>

---

## 🎯 Overview

DevFlow CLI is a comprehensive developer productivity suite that automates common development workflows. Built with modern web technologies, it provides both a beautiful web interface and powerful command-line tools to streamline your development process.

### 🌟 Key Features

- **🏗️ Project Scaffolding** - Generate modern React, Node.js, and full-stack applications with best practices
- **🔀 Git Flow Automation** - Streamline branching, merging, and release workflows
- **🧪 API Testing Suite** - Generate comprehensive API tests and mock data
- **📊 Workflow Analytics** - Track productivity metrics and development patterns
- **🌙 Dark/Light Mode** - Professional UI with system preference detection
- **⚡ Real-time Terminal** - Interactive command execution with live output
- **📱 Responsive Design** - Works seamlessly across all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/emmanuelos/devflow-cli.git
cd devflow-cli

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Available Tools

### 1. React App Scaffold
Create modern React TypeScript applications with:
- ⚡ Vite build system
- 🎨 Tailwind CSS styling
- 📝 TypeScript configuration
- 🧪 Testing setup (Jest + React Testing Library)
- 📦 ESLint + Prettier
- 🔧 VS Code settings

```bash
devflow create react-app my-project
```

### 2. Git Flow Helper
Automate Git workflows:
- 🌿 Initialize Git Flow branching model
- 🔀 Create feature/hotfix/release branches
- 🏷️ Automated semantic versioning
- 📋 Generate changelogs

```bash
devflow git init-flow
devflow git feature start my-feature
devflow git release 1.2.0
```

### 3. API Test Suite
Generate comprehensive API testing:
- 🧪 Automated test generation
- 📊 Mock data creation
- 🔍 Response validation
- 📈 Performance benchmarking

```bash
devflow test api --endpoint /users --methods GET,POST,PUT,DELETE
```

### 4. Workflow Analytics
Track development productivity:
- ⏱️ Time tracking
- 📊 Command usage statistics
- 🎯 Productivity insights
- 📈 Performance trends

```bash
devflow stats --period week
devflow stats --export csv
```
