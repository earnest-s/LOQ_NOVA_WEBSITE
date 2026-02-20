# LOQ Nova Website

Official product website for **LOQ Nova v3.0.0** — an advanced, low-overhead system utility built for direct hardware optimization on LOQ systems.

## Overview
This repository contains the complete redesigned website for the LOQ Nova application. The design language specifically reflects an enterprise-grade, hardware-level architecture — prioritizing high density, strict geometric layouts, minimal styling, and a near-zero marketing feel.

## Tech Stack
* **React** (via Vite)
* **Tailwind CSS v4** for clean, utility-first styling
* **Framer Motion** for subtle, non-intrusive scroll animations

## Features
* **Enterprise Dark Theme**: Strictly operating in the `#0b0f14` to `#e5e7eb` color range, accented by a single high-contrast coral (`#e8644a`).
* **Subtle Motion Design**: Animated via Framer Motion, exclusively utilizing simple translates and opacity fades to maintain a professional response curve.
* **Component Architecture**: 
  * `Hero` - Minimal, high-impact typography with a subtle depth gradient.
  * `Product Showcase` - Dense, alternating layouts demonstrating hardware telemetry and control interfaces.
  * `RGB Engine` - Deep-dive hardware lighting specs.
  * `Performance Modes` - Interactive system envelope toggle.
  * `Architecture` - Bold grid metrics demonstrating `< 0.5% CPU Idle` and zero OEM bloat.

## Development Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`

*Built for the performance purist.*
