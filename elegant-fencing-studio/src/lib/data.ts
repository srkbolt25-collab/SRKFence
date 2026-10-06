// Build compatibility shim for components/CategoryCard.tsx
// The component imports this only as a TypeScript type:
//   import type { CategoryInfo } from '@/lib/data';
//
// Keep this permissive so it matches the existing category object shape
// without changing runtime behavior.
export type CategoryInfo = Record<string, any>;
