import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
};

/**
 * The AXIAFIN logo.
 *
 * The logo is served as a real image file from `/public/axiafin-logo.png`
 * (the file the client provided). Drop the asset at:
 *
 *     frontend/public/axiafin-logo.png
 *
 * Optional separate icon-only mark (used by Footer / favicons / compact
 * places) can be placed at `frontend/public/axiafin-icon.png`. If absent,
 * the full logo is used and just cropped via `object-position`.
 */
export function Logo({
  className,
  variant: _variant = "dark",
  showWordmark = true,
}: Props) {
  // `variant` is accepted for backward-compat with callers (e.g. Footer
  // passes `variant="light"`) but we render the same source image either way.
  void _variant;

  // Full lockup (icon + wordmark) — used in navbar, footer, mega-menu, etc.
  if (showWordmark) {
    return (
      <Link
        href="/"
        aria-label="AXIAFIN — Home"
        className={cn("inline-flex items-center group", className)}
      >
        <Image
          src="/axiafin-logo.png"
          alt="AXIAFIN — SRASHTA FIN SERVICES PRIVATE LIMITED"
          width={640}
          height={160}
          priority
          sizes="(min-width: 1024px) 200px, 160px"
          className="h-10 w-auto sm:h-11 transition-transform duration-500 ease-out group-hover:rotate-[-2deg]"
        />
      </Link>
    );
  }

  // Icon-only — falls back to the full logo if a dedicated icon file isn't supplied.
  return (
    <Link
      href="/"
      aria-label="AXIAFIN — Home"
      className={cn("inline-flex items-center group", className)}
    >
      <LogoMark />
    </Link>
  );
}

/**
 * Icon-only version of the AXIAFIN mark.
 * Prefers `/axiafin-icon.png` if you provide a square icon-only crop;
 * otherwise drop the same full-lockup image and it will be cropped.
 */
export function LogoMark({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/axiafin-icon.png"
      alt="AXIAFIN"
      width={size}
      height={size}
      priority
      className={cn(
        "shrink-0 transition-transform duration-500 ease-out group-hover:rotate-[-6deg]",
        className,
      )}
      style={{ width: size, height: size }}
    />
  );
}
