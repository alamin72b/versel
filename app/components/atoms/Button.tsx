// app/components/atoms/Button.tsx
import React, { type ReactNode, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const baseStyles =
  "outline-0 font-[var(--font-roboto)] cursor-pointer inline-flex items-center justify-center box-border transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-brand)/0.12]";

const buttonVariants = cva(baseStyles, {
  variants: {
    variant: {
      default:
        "bg-[var(--color-brand)] text-white font-[600]  active:bg-[color:var(--color-brand)_/_0.9]",
      ghost:
        "bg-transparent border border-[var(--color-neutral-1)] text-[var(--color-text-default)] hover:bg-[var(--color-neutral-1)]",
      outline:
        "bg-white border border-[var(--color-neutral-1)] text-[var(--color-text-default)] hover:bg-[var(--color-neutral-1)]",
      yellow:
        "bg-[var(--color-accent)] text-[var(--color-text-default)] font-[600] hover:bg-[color:var(--color-accent)_/_0.95]",

       light_green:
        "bg-[var(--color-light-green)] text-[var(--color-text-default)] font-[600] hover:bg-[color:var(--color-accent)_/_0.95]",
      // pale green pill (Sign In)
      soft:
        "bg-[var(--color-mint-1)] text-[var(--color-brand)]  font-[600]",
      // dark pill (Sign Up)
      dark: "bg-[var(--color-text-default)] text-white font-[600]",
    },
    size: {
      default: "px-[30px] py-[10px] rounded-[8px] text-[16px]/[20px]",
      hero: "w-[192px] h-[58px] py-[16px] px-[40px] rounded-[999px] text-[20px]/[26px]",
      join: "w-[166px] h-[58px] px-[40px] py-[16px] rounded-[999px] gap-[8px] text-[20px]/[26px] font-[600] font-manrope",
      navSm: "w-[154px] h-[58px] pl-[12px] pr-[16px] rounded-[9999px] text-[15px]/[22px]",
      hug: "w-[145px] h-[58px] pl-[12px] pr-[12px] rounded-[9999px] text-[15px]/[22px]",
      primary:
        "w-[255px] h-[58px] pl-[16px] pr-[40px] rounded-[9999px] text-[18px]/[26px] font-[600]",
      cardSmall:
        "w-[244px] h-[40px] pl-[12px] pr-[16px] rounded-[25px] text-[14px]/[20px]",
      pricing:
        "w-[370px] h-[56px] pl-[16px] pr-[32px] rounded-[12px] text-[16px]/[22px]",
      formSubmit:
        "w-[556px] h-[68px] pl-[24px] pr-[24px] rounded-[9999px] text-[18px]/[26px]",
      ctaSmall:
        "w-[213px] h-[74px] pl-[16px] pr-[16px] rounded-[999px] text-[16px]/[22px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
  children: ReactNode;
};

const Button = ({ variant, size, className, children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={clsx(buttonVariants({ variant, size }), className)}>
      {children}
    </button>
  );
};

export default Button;
