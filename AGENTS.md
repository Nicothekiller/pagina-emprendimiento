# Development Guidelines

## Project Overview

This is an e-commerce website for selling products from independent musicians. The site displays a catalog of musicians and their products, including instruments, albums, merchandise, and services.

### Technology Stack

- **Framework**: SvelteKit (Svelte 5 with runes)
- **Styling**: Tailwind CSS v4 (always use Tailwind, never write custom CSS)
- **Package Manager**: Bun
- **Deployment**: Static adapter

### Pages

- **Home (`/`)**: Landing page with hero, products preview, musician catalog preview, and company info
- **Productos (`/productos`)**: Full product catalog
- **Catálogo (`/catalogo`)**: List of musicians
- **Músico (`/catalogo/[id]`)**: Individual musician detail page with their products

## Running Commands

All commands must be run through Nix. Do NOT use npm, bun, or any other package manager directly.

### Development

```bash
nix develop && bun run dev
```

### Build

```bash
nix develop && bun run build
```

### Type checking

```bash
nix develop && bun run check
```

### Formatting

```bash
nix develop && bun run format
```

### Linting

```bash
nix develop && bun run lint
```

## Styling Guidelines

- **Always use Tailwind CSS**. Do not write custom CSS in `<style>` blocks.
- Use the `dark:` variant for dark mode styles (e.g., `dark:bg-gray-900`).
- The dark mode uses the `.dark` class on the `<html>` element.
- All components must have both light and dark mode variants.

## Notes

- Always enter the nix shell first with `nix develop` before running any development commands.
- The project uses bun as the package manager within the nix environment.
- Tailwind CSS v4 is used for styling with dark mode support via the `.dark` class.
