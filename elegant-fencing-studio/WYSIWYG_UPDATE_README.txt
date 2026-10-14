SRK Fence – Admin Blog WYSIWYG Editor Patch

Target branch:
- clean-recovery

What changed:
- Replaces the Blog Post HTML textarea with a visual WYSIWYG editor.
- Keeps HTML source editing available with a Visual/HTML toggle.
- No new npm dependency is required.

Toolbar:
- Paragraph, H2, H3
- Bold, Italic, Underline
- Bulleted and numbered lists
- Blockquote
- Left / center / right alignment
- Add link / remove link
- Insert table
- Horizontal line
- Clear formatting
- Undo / redo
- HTML source mode
- Word count

Safety:
- Pasted rich HTML strips script/style/iframe/object/embed/form/input/button tags.
- Inline event-handler attributes and javascript: URLs are removed.

Files:
- elegant-fencing-studio/src/components/admin/RichTextEditor.tsx
- elegant-fencing-studio/src/components/pages/admin/BlogPage.tsx

Manual upload:
Upload/replace these paths in the GitHub clean-recovery branch.
Then wait for the Vercel preview build to show Ready before promoting to Production.
