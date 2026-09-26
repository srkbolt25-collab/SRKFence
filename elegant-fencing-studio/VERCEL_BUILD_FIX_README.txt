SRK Fence – Vercel build fix

Error fixed:
components/CategoryCard.tsx: Cannot find module '@/lib/data'

What this patch does:
- Adds lib/data.ts with the missing CategoryInfo type export.
- Also includes src/lib/data.ts in case the project's @ alias points to ./src/*.
- No runtime logic or blog content is changed.

Use only the path that matches your tsconfig:
- "@/*": ["./*"]       -> lib/data.ts
- "@/*": ["./src/*"]   -> src/lib/data.ts

The Vercel screenshot shows this is a source/type-resolution error, not a banner/blog-content error.
