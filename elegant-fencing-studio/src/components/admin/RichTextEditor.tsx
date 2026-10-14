'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code2,
  Eraser,
  Heading2,
  Heading3,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  Pilcrow,
  Quote,
  Redo2,
  Table2,
  Underline,
  Undo2,
  Unlink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
}

const blockedTags = ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'button'];

function sanitizeHtml(html: string) {
  if (typeof window === 'undefined') return html;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  blockedTags.forEach((tag) => {
    doc.querySelectorAll(tag).forEach((node) => node.remove());
  });

  doc.querySelectorAll('*').forEach((element) => {
    [...element.attributes].forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim().toLowerCase();

      if (name.startsWith('on')) {
        element.removeAttribute(attribute.name);
      }
      if ((name === 'href' || name === 'src') && value.startsWith('javascript:')) {
        element.removeAttribute(attribute.name);
      }
    });
  });

  return doc.body.innerHTML;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Start writing your content…',
  minHeight = 420,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const savedRangeRef = useRef<Range | null>(null);
  const [sourceMode, setSourceMode] = useState(false);

  useEffect(() => {
    if (!editorRef.current || sourceMode) return;
    if (document.activeElement === editorRef.current) return;
    if (editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || '';
    }
  }, [value, sourceMode]);

  const wordCount = useMemo(() => {
    const text = value
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return text ? text.split(' ').length : 0;
  }, [value]);

  const sync = () => {
    if (!editorRef.current) return;
    onChange(sanitizeHtml(editorRef.current.innerHTML));
  };

  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      savedRangeRef.current = selection.getRangeAt(0).cloneRange();
    }
  };

  const restoreSelection = () => {
    if (!savedRangeRef.current) return;
    const selection = window.getSelection();
    if (!selection) return;
    selection.removeAllRanges();
    selection.addRange(savedRangeRef.current);
  };

  const exec = (command: string, commandValue?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, commandValue);
    sync();
  };

  const formatBlock = (tag: 'p' | 'h2' | 'h3' | 'blockquote') => {
    exec('formatBlock', tag);
  };

  const insertLink = () => {
    saveSelection();
    const url = window.prompt('Enter link URL (https://… or /internal-page):');
    if (!url) return;

    restoreSelection();
    editorRef.current?.focus();

    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0 && !selection.getRangeAt(0).collapsed) {
      document.execCommand('createLink', false, url);
    } else {
      const safeUrl = url.replace(/"/g, '&quot;');
      document.execCommand(
        'insertHTML',
        false,
        `<a href="${safeUrl}">${safeUrl}</a>`,
      );
    }
    sync();
  };

  const insertTable = () => {
    saveSelection();
    const rowsInput = window.prompt('Number of rows (1–10):', '3');
    if (!rowsInput) return;
    const colsInput = window.prompt('Number of columns (1–6):', '3');
    if (!colsInput) return;

    const rows = Math.min(10, Math.max(1, Number.parseInt(rowsInput, 10) || 1));
    const cols = Math.min(6, Math.max(1, Number.parseInt(colsInput, 10) || 1));

    const header = `<tr>${Array.from({ length: cols }, (_, index) => `<th>Heading ${index + 1}</th>`).join('')}</tr>`;
    const body = Array.from(
      { length: Math.max(0, rows - 1) },
      () => `<tr>${Array.from({ length: cols }, () => '<td>Cell</td>').join('')}</tr>`,
    ).join('');

    restoreSelection();
    editorRef.current?.focus();
    document.execCommand(
      'insertHTML',
      false,
      `<table><thead>${header}</thead><tbody>${body}</tbody></table><p><br></p>`,
    );
    sync();
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const html = event.clipboardData.getData('text/html');
    const text = event.clipboardData.getData('text/plain');

    if (html) {
      document.execCommand('insertHTML', false, sanitizeHtml(html));
    } else {
      document.execCommand('insertText', false, text);
    }
    sync();
  };

  const ToolbarButton = ({
    label,
    children,
    onClick,
  }: {
    label: string;
    children: React.ReactNode;
    onClick: () => void;
  }) => (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      title={label}
      aria-label={label}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
      className="h-9 w-9 shrink-0"
    >
      {children}
    </Button>
  );

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex flex-wrap items-center gap-1 border-b border-border bg-muted/40 p-2">
        {!sourceMode && (
          <>
            <ToolbarButton label="Paragraph" onClick={() => formatBlock('p')}>
              <Pilcrow className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Heading 2" onClick={() => formatBlock('h2')}>
              <Heading2 className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Heading 3" onClick={() => formatBlock('h3')}>
              <Heading3 className="h-4 w-4" />
            </ToolbarButton>

            <span className="mx-1 h-6 w-px bg-border" />

            <ToolbarButton label="Bold" onClick={() => exec('bold')}>
              <Bold className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Italic" onClick={() => exec('italic')}>
              <Italic className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Underline" onClick={() => exec('underline')}>
              <Underline className="h-4 w-4" />
            </ToolbarButton>

            <span className="mx-1 h-6 w-px bg-border" />

            <ToolbarButton label="Bulleted list" onClick={() => exec('insertUnorderedList')}>
              <List className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Numbered list" onClick={() => exec('insertOrderedList')}>
              <ListOrdered className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Blockquote" onClick={() => formatBlock('blockquote')}>
              <Quote className="h-4 w-4" />
            </ToolbarButton>

            <span className="mx-1 h-6 w-px bg-border" />

            <ToolbarButton label="Align left" onClick={() => exec('justifyLeft')}>
              <AlignLeft className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Align center" onClick={() => exec('justifyCenter')}>
              <AlignCenter className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Align right" onClick={() => exec('justifyRight')}>
              <AlignRight className="h-4 w-4" />
            </ToolbarButton>

            <span className="mx-1 h-6 w-px bg-border" />

            <ToolbarButton label="Add link" onClick={insertLink}>
              <Link2 className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Remove link" onClick={() => exec('unlink')}>
              <Unlink className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Insert table" onClick={insertTable}>
              <Table2 className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Horizontal line" onClick={() => exec('insertHorizontalRule')}>
              <Minus className="h-4 w-4" />
            </ToolbarButton>

            <span className="mx-1 h-6 w-px bg-border" />

            <ToolbarButton label="Clear formatting" onClick={() => exec('removeFormat')}>
              <Eraser className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Undo" onClick={() => exec('undo')}>
              <Undo2 className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Redo" onClick={() => exec('redo')}>
              <Redo2 className="h-4 w-4" />
            </ToolbarButton>
          </>
        )}

        <Button
          type="button"
          variant={sourceMode ? 'default' : 'outline'}
          size="sm"
          onClick={() => {
            if (sourceMode) {
              setSourceMode(false);
            } else {
              sync();
              setSourceMode(true);
            }
          }}
          className="ml-auto gap-2"
        >
          <Code2 className="h-4 w-4" />
          {sourceMode ? 'Visual editor' : 'HTML source'}
        </Button>
      </div>

      {sourceMode ? (
        <Textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-[420px] resize-y rounded-none border-0 font-mono text-sm focus-visible:ring-0"
          style={{ minHeight }}
          spellCheck={false}
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={sync}
          onBlur={sync}
          onKeyUp={saveSelection}
          onMouseUp={saveSelection}
          onPaste={handlePaste}
          data-placeholder={placeholder}
          className="min-h-[420px] w-full overflow-auto p-5 text-base leading-7 text-foreground outline-none empty:before:pointer-events-none empty:before:text-muted-foreground empty:before:content-[attr(data-placeholder)]
                     [&_a]:text-primary [&_a]:underline
                     [&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
                     [&_h2]:mb-3 [&_h2]:mt-7 [&_h2]:text-2xl [&_h2]:font-extrabold
                     [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-xl [&_h3]:font-bold
                     [&_hr]:my-6 [&_hr]:border-border
                     [&_li]:my-1
                     [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-7
                     [&_p]:my-3
                     [&_table]:my-5 [&_table]:w-full [&_table]:border-collapse
                     [&_td]:border [&_td]:border-border [&_td]:p-2
                     [&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:p-2 [&_th]:text-left [&_th]:font-bold
                     [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-7"
          style={{ minHeight }}
        />
      )}

      <div className="flex items-center justify-between border-t border-border bg-muted/20 px-3 py-2 text-xs text-muted-foreground">
        <span>{sourceMode ? 'Editing HTML source' : 'Visual WYSIWYG editor'}</span>
        <span>{wordCount.toLocaleString()} words</span>
      </div>
    </div>
  );
}
