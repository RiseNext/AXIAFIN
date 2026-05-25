import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
};

export function LogoMark({
  className,
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="AXIAFIN"
      className={cn("shrink-0", className)}
    >
      {/* Vibrant royal-blue rounded square background */}
      <rect x="0" y="0" width="64" height="64" rx="14" fill="#2A2FD0" />
      {/* Open 'A' triangle — wider, taller, more prominent */}
      <path
        d="M32 11 L55 48 L43 48 L32 28 L21 48 L9 48 Z"
        fill="#FFFFFF"
      />
      {/* Lime base bar — wider, lower */}
      <rect x="6" y="51" width="52" height="8" rx="4" fill="#7AC23C" />
    </svg>
  );
}

export function Logo({
  className,
  variant = "dark",
  showWordmark = true,
}: Props) {
  const wordmarkColor = variant === "dark" ? "text-ink" : "text-white";

  return (
    <Link
      href="/"
      aria-label="AXIAFIN — Home"
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <LogoMark
        size={36}
        className="transition-transform duration-500 ease-out group-hover:rotate-[-6deg]"
      />
      {showWordmark && (
        <span
          className={cn(
            "font-display text-[22px] font-bold tracking-[-0.01em] leading-none inline-flex items-baseline",
            wordmarkColor,
          )}
        >
          A<span className="text-lime">X</span>IAFIN
        </span>
      )}
    </Link>
  );
}
