import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "earth" | "outline-light" | "outline-dark";

const base =
  "inline-block px-8 py-4 text-center text-[0.8rem] font-normal uppercase tracking-[0.14em] transition-colors duration-300";

const variants: Record<ButtonVariant, string> = {
  earth: "bg-earth text-white hover:bg-earth-dark",
  "outline-light": "border border-white/70 text-white hover:bg-white hover:text-ink",
  "outline-dark": "border border-ink text-ink hover:bg-ink hover:text-white",
};

export function buttonClasses(variant: ButtonVariant = "earth"): string {
  return `${base} ${variants[variant]}`;
}

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "earth",
  children,
  className,
}: ButtonProps) {
  const classes = `${buttonClasses(variant)} ${className ?? ""}`;
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
