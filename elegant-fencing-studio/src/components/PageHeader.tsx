import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeaderVariant = "default" | "surface" | "contrast";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  variant?: PageHeaderVariant;
  className?: string;
  children?: ReactNode;
  backgroundImage?: string;
  overlayClassName?: string;
}

const variantStyles: Record<PageHeaderVariant, string> = {
  default: "bg-gradient-subtle",
  surface: "bg-card",
  contrast: "bg-primary text-primary-foreground",
};

const PageHeader = ({
  eyebrow,
  title,
  description,
  variant = "default",
  className,
  children,
  backgroundImage,
  overlayClassName,
}: PageHeaderProps) => {
  const descriptionClasses = cn(
    "text-lg sm:text-xl mb-8 max-w-2xl",
    variant === "contrast" ? "text-primary-foreground/80" : "text-muted-foreground/90",
  );

  return (
    <section className={cn("relative overflow-hidden", variantStyles[variant], className)}>
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/50",
              overlayClassName,
            )}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(142_55%_48%/0.12)_0%,transparent_60%)]" />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
              {eyebrow}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">{title}</h1>
          <p className={descriptionClasses}>{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

