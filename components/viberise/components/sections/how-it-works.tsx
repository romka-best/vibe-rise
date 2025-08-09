"use client"

import { MarketChart } from "../visuals/market-chart"
import { motion } from "framer-motion"
import { sectionReveal, fadeUp, popIn, staggerRow } from "@/components/viberise/utils/motion-presets"

export function HowItWorks() {
  const steps = [
    { title: "Create & Launch", desc: "Talent creates a profile and issues tokens." },
    { title: "Invest & Support", desc: "Investors buy tokens and help the growth." },
    { title: "Rise & Profit", desc: "Token price grows, dividends are distributed." },
  ] as const

  return (
    <motion.section
      id="how-it-works"
      className="border-t border-black/10 dark:border-white/10 vh-section"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20% 0px" }}
    >
      <div className="container mx-auto min-h-full px-4 flex items-center">
        <div className="w-full">
          <motion.div className="grid gap-8 md:grid-cols-3" variants={staggerRow(0.05)}>
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                className="relative rounded-2xl border border-black/10 p-6 dark:border-white/10 bg-white/60 dark:bg-black/40"
                variants={popIn}
                whileHover={{ y: -2 }}
              >
                <div className="absolute -top-3 left-6 rounded-full bg-[var(--brand)] px-3 py-1 text-xs font-bold text-black shadow">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-black/70 dark:text-white/70">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-10" variants={fadeUp}>
            <MarketChart />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
