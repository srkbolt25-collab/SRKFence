import { getProductTechnicalContent, type TechnicalContentBlock } from '@/lib/productTechnicalContent';

function groupedCells(row: string[]) {
  const groups: { value: string; span: number }[] = [];
  for (const value of row) {
    const last = groups[groups.length - 1];
    if (last && last.value === value) last.span += 1;
    else groups.push({ value, span: 1 });
  }
  return groups;
}

function TechnicalTable({ block }: { block: Extract<TechnicalContentBlock, { type: 'table' }> }) {
  return (
    <div className="technical-table-wrap">
      <table className="technical-table">
        <tbody>
          {block.rows.map((row, rowIndex) => {
            const cells = groupedCells(row);
            const headerRow = rowIndex < block.headerRows;
            return (
              <tr key={rowIndex}>
                {cells.map((cell, cellIndex) => {
                  const Tag = headerRow ? 'th' : 'td';
                  return <Tag key={`${rowIndex}-${cellIndex}`} colSpan={cell.span}>{cell.value}</Tag>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function ContentBlock({ block, index }: { block: TechnicalContentBlock; index: number }) {
  if (block.type === 'heading') {
    if (block.level === 1) return <h2 className="technical-h2" id={`technical-${index}`}>{block.text}</h2>;
    if (block.level === 2) return <h3 className="technical-h3" id={`technical-${index}`}>{block.text}</h3>;
    return <h4 className="technical-h4" id={`technical-${index}`}>{block.text}</h4>;
  }
  if (block.type === 'paragraph') return <p className="technical-copy">{block.text}</p>;
  if (block.type === 'list') {
    const Tag = block.ordered ? 'ol' : 'ul';
    return <Tag className="technical-list">{block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</Tag>;
  }
  return <TechnicalTable block={block} />;
}

export default function ProductTechnicalContent({ slug, productName }: { slug: string; productName: string }) {
  const content = getProductTechnicalContent(slug);
  if (!content) return null;

  return (
    <section className="section technical-content-section">
      <div className="container technical-content-container">
        <div className="section-head technical-content-head">
          <p className="eyebrow">Technical Product Reference</p>
          <h2>Detailed {productName} Specifications, Standards & Applications</h2>
          <p className="section-text">Technical page content for specification review, procurement and project enquiries.</p>
        </div>
        <div className="technical-content-body">
          {content.blocks.map((block, index) => <ContentBlock key={`${block.type}-${index}`} block={block} index={index} />)}
        </div>
      </div>
    </section>
  );
}
