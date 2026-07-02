import Link from "next/link";
import type { ReactNode } from "react";

export default function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group/arrow inline-flex items-center gap-3 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-earth transition-colors duration-300 hover:text-earth-dark ${className ?? ""}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover/arrow:translate-x-1.5"
      >
        →
      </span>
    </Link>
  );
}
