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
            "font-display text-[22px] font-bold tracking-[-0.01em] leading-none inline-flex items-center",
            wordmarkColor,
          )}
        >
          A<SplitX />IAFIN
        </span>
      )}
    </Link>
  );
}

/**
 * The "X" in the AXIAFIN wordmark — split into two diagonal strokes:
 *   ▸ \ stroke (top-left → bottom-right) inherits the surrounding text colour
 *     (dark ink on light navbars, white on dark sections).
 *   ▸ / stroke (top-right → bottom-left) is the brand lime green so the letter
 *     reads as half-dark / half-green exactly like the reference logotype.
 */
function SplitX() {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      style={{
        display: "inline-block",
        width: "0.78em",
        height: "0.78em",
        verticalAlign: "middle",
        marginInline: "0.015em",
        marginBottom: "0.06em",
      }}
    >
      {/* "\" stroke — inherits text colour (ink / white) via currentColor */}
      <polygon points="0,0 22,0 100,100 78,100" fill="currentColor" />
      {/* "/" stroke — brand lime green, drawn on top so it reads as green at the crossover */}
      <polygon points="78,0 100,0 22,100 0,100" fill="#7AC23C" />
    </svg>
  );
}
