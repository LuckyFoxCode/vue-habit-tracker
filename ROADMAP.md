## Phase A — Vue Foundation (Reactivity Basics)

- [x] Step 1 — Clean project scaffold (Vite + Vue 3 + TS)
- [x] Step 2 — Minimal layout (container + header)
- [x] Step 3 — Add Habit (ref + v-model)
- [x] Step 4 — Render habit list (v-for)
- [x] Step 5 — Delete habit
- [x] Step 6 — Prevent empty input

### What you learn:

- `<script setup>`
- ref()
- reactive arrays
- v-model
- event handling
- basic TypeScript integration

### Goal:

Understand how Vue reactivity actually works.

## Phase B — Domain Modeling & Clean Types

- [x] Step 7 — Create `types/habit.ts`
- [x] Step 8 — Define Habit entity (id, title, createdAt, completedDates)
- [x] Step 9 — Move mock data outside component
- [x] Step 10 — Extract business logic from template

### Focus:

Domain-first thinking.
UI should not own business logic.

## Phase C — Completion Logic & Streak System

- [ ] Step 11 — Mark habit as completed for today
- [ ] Step 12 — Prevent duplicate completion per day
- [ ] Step 13 — Create helper for "today date"
- [ ] Step 14 — Implement streak calculation
- [ ] Step 15 — Add computed streak badge
- [ ] Step 16 — Visual indicator (done / not done)

### Concepts:

- computed()
- derived state
- pure functions
- date manipulation
- logic separation

### Key idea:

Derived state must never be stored manually.

## Phase D — Component Architecture

- [ ] Step 17 — Extract HabitItem component
- [ ] Step 18 — Extract HabitList component
- [ ] Step 19 — Extract HabitForm component
- [ ] Step 20 — Props & emits
- [ ] Step 21 — Avoid prop drilling where possible

### What you learn:

- component boundaries
- one responsibility per component
- clean data flow (parent → child → event up)

### Architecture goal:

App.vue becomes orchestration only.

## Phase E — Composables Layer

- [ ] Step 22 — Create `composables/useHabits.ts`
- [ ] Step 23 — Move state logic inside composable
- [ ] Step 24 — Expose actions (add, remove, toggle)
- [ ] Step 25 — Expose computed (stats, streaks)
- [ ] Step 26 — Refactor UI to use composable

### Concepts:

- Composition API patterns
- reusable state logic
- separation of concerns

This is where you start thinking like a Vue developer.

## Phase F — Global State (Pinia)

- [ ] Step 27 — Install Pinia
- [ ] Step 28 — Create habitStore
- [ ] Step 29 — Move composable logic to store
- [ ] Step 30 — Define getters for stats
- [ ] Step 31 — Use store in components

### Focus:

Single source of truth.
Predictable architecture.

## Phase G — Persistence Layer

- [ ] Step 32 — Save habits to localStorage
- [ ] Step 33 — Auto-load on app start
- [ ] Step 34 — Watch store changes
- [ ] Step 35 — Handle corrupted storage safely

### Concepts:

- watch()
- side effects
- persistence abstraction

### Key idea:

State layer independent from storage layer.

## Phase H — Routing & Multi-Page Structure

- [ ] Step 36 — Install Vue Router
- [ ] Step 37 — Create HomeView
- [ ] Step 38 — Create StatsView
- [ ] Step 39 — Create SettingsView
- [ ] Step 40 — Navigation layout

### Concepts:

- SPA structure
- route-based views
- layout separation

### Architecture target:

Scalable structure similar to real-world apps.

## Phase I — Statistics Dashboard

- [ ] Step 41 — Total completions count
- [ ] Step 42 — Best streak calculation
- [ ] Step 43 — Weekly completion summary
- [ ] Step 44 — Integrate Chart library
- [ ] Step 45 — Performance optimization (computed efficiency)

This simulates real product features.

## Phase J — UX & Polish

- [ ] Step 46 — Empty states
- [ ] Step 47 — Basic animations (transition)
- [ ] Step 48 — Responsive layout
- [ ] Step 49 — Dark mode
- [ ] Step 50 — Keyboard accessibility

### Goal:

From "project" to "portfolio-ready app".

## Phase K — Production Thinking

- [ ] Step 51 — Environment variables
- [ ] Step 52 — Build optimization check
- [ ] Step 53 — Lint & strict TS cleanup
- [ ] Step 54 — README with architecture explanation
- [ ] Step 55 — Deploy (Netlify / Vercel)

### Final mindset:

You are not building a demo.
You are building a structured frontend application.

# Optional Stretch Goals

- Habit categories
- Weekly goals (target per week)
- Drag & drop reordering
- Supabase backend
- User authentication
- PWA mode
- IndexedDB storage provider

# Learning Milestones

After Phase C:
You understand Vue reactivity.

After Phase F:
You understand Vue architecture.

After Phase I:
You understand real app state modeling.

After Phase K:
You are no longer “just learning Vue”.
