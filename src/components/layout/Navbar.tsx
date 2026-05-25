"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/nav-links";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenMega(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenMega(null), 140);
  };

  const isElevated = scrolled || isOpen || !!openMega;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isElevated
          ? "bg-mist/90 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(10,25,41,0.10)] border-b border-ink/[0.06]"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 3xl:px-14 h-20 flex justify-between items-center"
      >
        <Logo />

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const hasMega = !!link.groups?.length;
            const active = isActive(link.href);
            return (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  hasMega && (cancelClose(), setOpenMega(link.name))
                }
                onMouseLeave={() => hasMega && scheduleClose()}
              >
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  aria-expanded={hasMega ? openMega === link.name : undefined}
                  aria-haspopup={hasMega ? "menu" : undefined}
                  onFocus={() => hasMega && setOpenMega(link.name)}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5",
                    active
                      ? "text-indigo"
                      : "text-ink hover:text-indigo",
                  )}
                >
                  {link.name}
                  {hasMega && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        openMega === link.name && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-4 right-4 h-[2px] rounded-full brand-gradient"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="group px-5 py-2.5 text-sm font-semibold bg-indigo text-white rounded-xl hover:bg-indigo-deep transition-all shadow-[0_8px_24px_-10px_rgba(61,67,201,0.55)] hover:shadow-[0_12px_30px_-10px_rgba(61,67,201,0.6)] hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Book Consultation
            <ArrowUpRight
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-ink p-2 -mr-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {openMega && (
          <motion.div
            key={openMega}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute left-0 right-0 top-20 border-t border-ink/[0.06]"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="bg-mist/95 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(10,25,41,0.18)]">
              <div className="mx-auto w-full max-w-[80rem] xl:max-w-[90rem] 2xl:max-w-[104rem] 3xl:max-w-[116rem] 4xl:max-w-[132rem] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 3xl:px-14 py-10">
                <MegaMenuContent name={openMega} />
              </div>
              <div className="hairline" aria-hidden="true" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: "easeOut" }}
            className="lg:hidden bg-mist/95 backdrop-blur-xl border-b border-ink/[0.06] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <MobileNavItem key={link.name} link={link} />
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full py-3 text-sm font-semibold bg-indigo text-white text-center rounded-xl shadow-[0_8px_24px_-10px_rgba(61,67,201,0.55)]"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaMenuContent({ name }: { name: string }) {
  const link = navLinks.find((l) => l.name === name);
  if (!link?.groups) return null;
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10"
      role="menu"
    >
      {link.groups.map((group) => (
        <div key={group.heading}>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo mb-4">
            {group.heading}
          </p>
          <ul className="space-y-2.5">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  className="group flex items-start text-sm text-ink hover:text-indigo transition-colors leading-snug"
                >
                  <span className="link-underline">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MobileNavItem({ link }: { link: (typeof navLinks)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const hasGroups = !!link.groups?.length;

  return (
    <div className="border-b border-ink/[0.04] last:border-b-0">
      <div className="flex items-center">
        <Link
          href={link.href}
          className="flex-1 block px-3 py-3.5 text-base font-medium text-ink"
        >
          {link.name}
        </Link>
        {hasGroups && (
          <button
            type="button"
            aria-label={expanded ? `Collapse ${link.name}` : `Expand ${link.name}`}
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className="p-3 text-ink/60"
          >
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-200",
                expanded && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <AnimatePresence initial={false}>
        {hasGroups && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-3 space-y-4">
              {link.groups!.map((group) => (
                <div key={group.heading}>
                  <p className="px-3 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo">
                    {group.heading}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-sm text-ink/80"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
