import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "gold" | "outline-light" | "outline-dark" | "ghost-link";

export function Button({
  href,
  children,
  variant = "gold",
  size,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm";
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  const cls = ["btn", `btn--${variant}`, size ? `btn--${size}` : "", className].filter(Boolean).join(" ");

  if (isExternal) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
