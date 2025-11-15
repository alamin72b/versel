import React, { type HTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

/**
 * Badge component for Figma designs.
 *
 * Sizes:
 *  - hero  → fixed 279x42
 *  - hug   → auto-width, same height as hero
 *  - sm    → small chip
 *  - howit → fixed 168x42 for "How it works" (includes responsive typography)
 *
 * Tones:
 *  - green   → bg: --color-mint-1, text: --color-brand
 *  - muted   → bg: --color-neutral-1, text: --color-light-dark
 *  - outline → transparent with border color --color-neutral-1
 *  - yellow  → bg: --color-accent, text: --color-brand
 *  - light   → bg: --color-light-green, text: --color-brand (used by How it works)
 */

const base =
  "inline-flex items-center justify-center box-border select-none whitespace-nowrap font-manrope font-semibold gap-[8px]";

const badge = cva(base, {
  variants: {
    size: {
      hero: "w-[279px] h-[42px] px-[24px] py-[8px] rounded-[999px] text-[20px] leading-[26px]",
      hug: "h-[42px] px-[24px] py-[8px] rounded-[999px] text-[20px] leading-[26px]",
      sm: "h-[28px] px-[10px] py-[4px] rounded-[999px] text-[12px]/[16px] gap-[6px]",
      why: "w-[227px]  h-[42px] px-[24px] py-[8px] rounded-[999px] text-[10px] leading-[18px] sm:text-[20px] sm:leading-[26px] font-manrope",
      howit:
        "w-[168px] h-[42px] px-[24px] py-[8px] rounded-[999px] text-[12px] leading-[20px] sm:text-[18px] sm:leading-[22px] md:text-[20px] md:leading-[24px] xl:text-[20px] xl:leading-[20px]",
    },
    tone: {
      // use CSS variables so you don't need Tailwind token names
      green: "bg-[var(--color-mint-1)] text-[var(--color-brand)]",
      muted: "bg-[var(--color-neutral-1)] text-[var(--color-light-dark)]",
      outline:
        "bg-transparent border border-[var(--color-neutral-1)] text-[var(--color-light-dark)]",
      yellow: "bg-[var(--color-accent)] text-[var(--color-brand)]",
      light: "bg-[var(--color-light-green)] text-[var(--color-brand)]",
      mint: "bg-[var(--color-mint-1)] text-[var(--color-brand)]",
    },
    state: {
      normal: "",
      subtle: "opacity-90",
    },
  },
  defaultVariants: {
    size: "hero",
    tone: "green",
    state: "normal",
  },
});

type BadgeProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badge> & {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
  };

export default function Badge({
  size = "hero",
  tone = "green",
  state = "normal",
  children,
  className,
  style,
  ...rest
}: BadgeProps) {
  return (
    <div
      role="note"
      aria-label={typeof children === "string" ? children : undefined}
      className={clsx(badge({ size, tone, state }), className)}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
