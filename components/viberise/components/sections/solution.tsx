"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, LineChart, Users, Timer, ShieldCheck, BadgeDollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { sectionReveal, fadeUp, popIn, staggerRow } from "@/components/viberise/utils/motion-presets"

export function Solution() {
  const items = [
    { title: "Launch Your Personal IPO", desc: "Anyone can issue their tokens and raise capital.", icon: Rocket },
    { title: "Invest in Potential", desc: "Buy tokens of people with a high chance to win.", icon: LineChart },
    { title: "Grow Together", desc: "Earn when they achieve milestones and success.", icon: Users },
  ] as const

  const metrics = [
    { icon: Timer, label: "Time to launch", value: "< 24h" },
    { icon: BadgeDollarSign, label: "Fees", value: "Low & transparent" },
    { icon: ShieldCheck, label: "Compliance", value: "Designed-in" },
  ] as const

  return (
    <motion.section
      id="solution"
      className="border-t border-black/10 dark:border-white/10 vh-section"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20% 0px" }}
    >
      <div className="container mx-auto min-h-full px-4 flex items-center">
        <div className="w-full">
          <motion.h2 className="text-3xl md:text-4xl font-bold" variants={fadeUp}>
            {"A Marketplace Where Human Potential Is the Asset."}
          </motion.h2>

          <motion.div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={staggerRow(0.1)}>
            {items.map((item) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} variants={popIn} whileHover={{ y: -2 }}>
                  <Card className="group border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:rgba(204,255,17,0.15)] ring-1 ring-[rgba(204,255,17,0.3)]">
                          <Icon className="h-5 w-5 text-[var(--brand)]" />
                        </span>
                        <CardTitle>{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-black/70 dark:text-white/70">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div className="mt-8 grid gap-4 sm:grid-cols-3" variants={staggerRow(0.2)}>
            {metrics.map((m) => {
              const Icon = m.icon
              return (
                <motion.div key={m.label} variants={fadeUp}>
                  <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-black/40">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(204,255,17,0.15)] ring-1 ring-[rgba(204,255,17,0.3)]">
                      <Icon className="h-4 w-4 text-[var(--brand)]" />
                    </span>
                    <div>
                      <div className="text-sm text-black/60 dark:text-white/60">{m.label}</div>
                      <div className="font-semibold">{m.value}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="mt-10 rounded-2xl border border-black/10 bg-white/60 px-5 py-4 dark:border-white/10 dark:bg-black/40"
            variants={popIn}
          >
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="max-w-2xl">
                <p className="font-medium">
                  {"Ready to build with us? Join the waitlist and be first to know when creators launch."}
                </p>
              </div>
              <Link href="#waitlist" className="inline-flex">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-[var(--brand)] text-black hover:bg-[color:rgb(204,255,17,0.9)]">
                    {"Join Waitlist"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
