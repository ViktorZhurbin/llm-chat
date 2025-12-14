# CLAUDE.md

You are an expert in JavaScript, and web application development. You write maintainable, performant, and accessible code.

## Tech Stack

**Core:**
- React 19.2.3
- TypeScript 5.9.3 (strict mode)
- Rsbuild v1.6 (Rspack-based build tool)

**UI & Styling:**
- Mantine v8.3.10 (component library)
- CSS Modules for component-scoped styles
- Tabler Icons (@tabler/icons-react)

**Editors:**
- Tiptap v3.13.0 (chat message editor) with @mantine/tiptap
- BlockNote v0.44.2 (document editor) with @blocknote/mantine

**Database:**
- InstantDB (@instantdb/react v0.22.87) - real-time database with schema definition

**Code Quality:**
- Biome v2.3.8 (linting and formatting)

## Project Structure

```
src/
├── blocks/          # Shared layout components (Header)
├── feature/         # Feature modules (feature-based architecture)
│   ├── chat/        # Chat functionality with messages and editor
│   └── docs/        # Document editing functionality
├── lib/             # Shared utilities and configurations
├── types/           # TypeScript type definitions
└── ui/              # Reusable UI components
```

## Architecture Patterns

### Routing
- **NO routing library** (no React Router)
- State-based view switching in App component: `useState<"chat" | "docs">`
- Simple navigation via Header component

### State Management
- **NO state management library** (no Redux, Zustand, etc.)
- Uses React built-in hooks (useState, useEditor)
- InstantDB handles all data persistence and real-time sync

### Database (InstantDB)

**Initialization:** `src/lib/db.ts`
```typescript
export const db = init({
  appId: process.env.PUBLIC_INSTANT_APP_ID,
  schema,
  useDateObjects: true,
});
```

**Schema:** `src/instant.schema.ts` defines entities (messages, docs, $files, $users)

**Query Pattern:**
```typescript
const { isLoading, error, data } = db.useQuery({ messages: {} });
```

**Mutation Pattern:**
```typescript
db.transact(
  db.tx.messages[id()].update({
    id: id(),
    content,
    createdAt: Date.now(),
  })
);
```

## Code Conventions

### TypeScript
- Use path alias `~/*` for imports (maps to `src/*`)
- Strict type checking enabled
- Props interface pattern for components
- NO non-null assertions (e.g., `value!.prop`)

### React
- Functional components only (no class components)
- NO `React.createElement` usage
- Composition over configuration

### Styling
- CSS Modules for component-specific styles
- Co-locate styles with components (ComponentName.module.css)
- Use Mantine theme tokens for colors/spacing
- Custom dark mode color palette in `src/lib/theme-dark.ts`

### Code Style (Biome)
- Tab indentation
- Double quotes for strings
- Auto-organize imports
- Run `npm run format` before committing

## Environment Variables

- `PUBLIC_INSTANT_APP_ID` - InstantDB application ID (defined in `.env.local`)

## Commands

- `npm run dev` - Start the dev server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run format` - Format code with Biome

## Docs

- Rsbuild: https://rsbuild.rs/llms.txt
- Rspack: https://rspack.rs/llms.txt
- Mantine v8: https://mantine.dev/llms.txt
- BlockNote:
  - https://github.com/TypeCellOS/BlockNote/tree/main/docs/content/docs
  - https://www.blocknotejs.org/docs
- Tiptap: https://tiptap.dev/docs/editor/getting-started/overview
- InstantDB: https://www.instantdb.com/docs
