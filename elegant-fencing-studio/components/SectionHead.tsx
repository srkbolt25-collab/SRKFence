export default function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="section-head"><p className="eyebrow red">{eyebrow}</p><h2>{title}</h2><p className="section-text">{text}</p></div>;
}
