# TaskFlow

A kanban board application built with Angular, designed for managing tasks across different workflow stages.

## Overview

TaskFlow is a task management tool that organizes work into three columns: **To Do**, **In Progress**, and **Done**. Each task flows through the board as it progresses, providing a clear visual overview of work status.

## Tech Stack

- **Angular 19** — component-based frontend framework
- **TypeScript** — type-safe development
- **Angular Signals** — reactive state management
- **CSS** — scoped component styling

## Project Structure

```
src/app/
├── app.ts                 # Root component — holds task data, filters by status
├── app.html               # Board layout with three columns
├── app.css                # Global board styling (flexbox layout)
├── task.model.ts          # Task interface definition
├── column/
│   ├── column.ts          # Column component — receives title and tasks via input
│   ├── column.html        # Renders column header and task cards
│   └── column.css         # Column styling (background, border-radius)
└── task-card/
    ├── task-card.ts       # Task card component — displays a single task
    ├── task-card.html     # Task title and description layout
    └── task-card.css      # Card styling (shadow, spacing)
```

## Architecture

```
App (data owner)
 ├── Column "To Do"       ← receives filtered tasks
 │    └── TaskCard         ← displays single task
 ├── Column "In Progress"  ← receives filtered tasks
 │    └── TaskCard
 └── Column "Done"         ← receives filtered tasks
      └── TaskCard
```

Data flows top-down: `App` holds all tasks, filters them by status using `computed()` signals, and passes the filtered arrays to each `Column` via `input()`. Each `Column` iterates over its tasks with `*ngFor` and renders a `TaskCard` for each one.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
git clone https://github.com/yairMar1/task-flow.git
cd task-flow
npm install
```

### Development Server

```bash
npx ng serve
```

Navigate to `http://localhost:4200/`. The app automatically reloads on file changes.

### Build

```bash
npx ng build
```

Build artifacts are stored in the `dist/` directory.

## Roadmap

- [ ] Task service for centralized state management
- [ ] Add / edit / delete tasks via reactive forms
- [ ] Routing between board view and task detail view
- [ ] HTTP client integration with backend API
- [ ] Drag and drop between columns (Angular CDK)
- [ ] Interceptors, error handling, and signals optimization
- [ ] Deployment to Vercel / Netlify

## License

This project is for educational purposes.