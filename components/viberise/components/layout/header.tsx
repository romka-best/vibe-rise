"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { BrandMark } from "../brand/brand-mark"
import * as React from "react"
import { motion } from "framer-motion"
import { fadeUp, staggerRow, hoverGlow } from "@/components/viberise/utils/motion-presets"

const BRAND = "#CCFF11"

export interface HeaderProps {
  theme: "light" | "dark"
  setTheme: (v: "light" | "dark") => void
}

export function Header({ theme, setTheme }: HeaderProps) {
  const nav = [
    { href: "#main", label: "Main" },
    { href: "#problem", label: "Problem" },
    { href: "#solution", label: "Solution" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#for-whom", label: "For whom" },
    { href: "#faq", label: "FAQ" },
  ]

  const headerRef = React.useRef<HTMLElement | null>(null)
  React.useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const setVar = () => {
      const h = el.offsetHeight
      document.documentElement.style.setProperty("--header-h", h + "px")
    }
    setVar()
    const onResize = () => requestAnimationFrame(setVar)
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href?.startsWith("#")) return
    const target = document.querySelector(href) as HTMLElement | null
    if (!target) return
    e.preventDefault()
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" })
    history.pushState(null, "", href)
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md dark:border-white/10 dark:bg-black/50"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-[var(--brand)] focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3">
        <motion.a
          href="/"
          className="group inline-flex items-center gap-2 font-extrabold tracking-tight text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          {...hoverGlow}
        >
          <span className="relative">
            <BrandMark
              size={28}
              className="text-[var(--brand)] transition group-hover:drop-shadow-[0_0_16px_rgba(204,255,17,0.6)]"
            />
          </span>
          <span className="leading-none">{"VibeRise"}</span>
        </motion.a>

        <motion.nav
          className="hidden md:flex items-center gap-1"
          variants={staggerRow(0.1)}
          initial="hidden"
          animate="show"
        >
          {nav.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              variants={fadeUp}
              className="nav-link relative rounded-md px-3 py-2 text-sm font-medium text-black/80 outline-none transition hover:text-black dark:text-white/80 dark:hover:text-white"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-[var(--brand)]" />
            ) : (
              <Moon className="h-4 w-4 text-[var(--brand)]" />
            )}
          </motion.button>
          <Link href="#waitlist" className="hidden sm:inline-flex">
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-[var(--brand)] text-black hover:bg-[color:rgb(204,255,17,0.9)]">
                {"Join Waitlist"}
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --brand: ${BRAND};
        }
        a.nav-link {
          position: relative;
        }
        a.nav-link::after {
          content: "";
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: 6px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(204, 255, 17, 0.8), transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 300ms ease;
        }
        a.nav-link:hover::after,
        a.nav-link:focus-visible::after {
          transform: scaleX(1);
        }
        a.nav-link:hover,
        a.nav-link:focus-visible {
          color: ${BRAND};
          text-shadow: 0 0 8px rgba(204, 255, 17, 0.55), 0 0 18px rgba(204, 255, 17, 0.35);
          filter: drop-shadow(0 0 6px rgba(204, 255, 17, 0.45));
        }
      `}</style>
    </header>
  )
}
