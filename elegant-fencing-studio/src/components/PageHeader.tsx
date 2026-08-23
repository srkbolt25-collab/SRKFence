import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type PageHeaderVariant = "default" | "surface" | "contrast";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  variant?: PageHeaderVariant;
  className?: string;
  /** Overrides default inner wrapper padding (`py-24`) when set — use with fixed-height heroes. */
  innerClassName?: string;
  /** Locks hero to explicit height from `className` (h/min-h/max-h); stops flex/content from stretching the band. */
  fixedHero?: boolean;
  children?: ReactNode;
  backgroundImage?: string | StaticImageData;
  overlayClassName?: string;
  imageClassName?: string;
  priority?: boolean;
  hideContent?: boolean;
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
  innerClassName,
  fixedHero,
  children,
  backgroundImage,
  overlayClassName,
  imageClassName,
  priority = false,
  hideContent = false,
}: PageHeaderProps) => {
  const descriptionClasses = cn(
    "max-w-2xl",
    fixedHero ? "mb-0 text-base sm:text-lg lg:text-xl sm:mb-1" : "mb-8 text-lg sm:text-xl",
    variant === "contrast" ? "text-primary-foreground/80" : "text-muted-foreground/90",
  );

  const fixedHeroTitleClass =
    "text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight";

  return (
    <section
      className={cn(
        "relative overflow-hidden -mt-20",
        /* flex + only absolute/abs-out-of-flow paint would collapse height vs aspect-ratio */
        fixedHero &&
          (hideContent
            ? "block shrink-0 overflow-hidden"
            : "flex shrink-0 flex-col overflow-hidden"),
        variantStyles[variant],
        className,
      )}
    >
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className={cn("object-cover", imageClassName)}
              sizes="100vw"
              priority={priority}
              loading={priority ? undefined : "lazy"}
              quality={65}
            />
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
      {!hideContent && (
        <div
          className={cn(
            "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            fixedHero &&
              "flex h-full min-h-0 max-h-full flex-col justify-center overflow-hidden",
            innerClassName ?? "py-24",
          )}
        >
          <div
            className={cn(
              "max-w-3xl animate-fade-in",
              fixedHero && "min-h-0 shrink",
            )}
          >
            <div
              className={cn(
                "inline-block px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20",
                fixedHero ? "mb-2 sm:mb-3" : "mb-4",
              )}
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
                {eyebrow}
              </span>
            </div>
            <h1
              className={
                fixedHero
                  ? fixedHeroTitleClass
                  : "text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight"
              }
            >
              {title}
            </h1>
            <p className={descriptionClasses}>{description}</p>
            {children}
          </div>
        </div>
      )}
    </section>
  );
};

export default PageHeader;

