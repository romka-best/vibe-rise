"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircleQuestion, Mail, LifeBuoy } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { sectionReveal, fadeUp, popIn, staggerRow } from "@/components/viberise/utils/motion-presets"

export function FAQ() {
  const items = [
    { q: "What is VibeRise?", a: "A marketplace where human potential is the asset you can invest in." },
    { q: "How do tokens work?", a: "Tokens represent a stake in a person's potential and future earnings." },
    { q: "Is this compliant?", a: "We’re designing with compliance top-of-mind and will share more soon." },
  ] as const

  return (
    <motion.section
      id="faq"
      className="border-t border-black/10 dark:border-white/10 vh-section"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20% 0px" }}
    >
      <div className="container mx-auto min-h-full px-4 flex items-center">
        <div className="w-full">
          <motion.h2 className="text-3xl md:text-4xl font-bold" variants={fadeUp}>
            {"FAQ"}
          </motion.h2>

          <motion.div className="mt-6" variants={staggerRow(0.05)}>
            <Accordion type="single" collapsible className="w-full">
              {items.map((qa, i) => (
                <AccordionItem key={qa.q} value={`item-${i}`}>
                  <AccordionTrigger>{qa.q}</AccordionTrigger>
                  <AccordionContent className="text-black/70 dark:text-white/70">{qa.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 dark:border-white/10 dark:bg-black/40"
            variants={popIn}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(204,255,17,0.15)] ring-1 ring-[rgba(204,255,17,0.3)]">
                  <MessageCircleQuestion className="h-4 w-4 text-[var(--brand)]" />
                </span>
                <div>
                  <div className="font-semibold">{"Still have questions?"}</div>
                  <p className="text-sm text-black/70 dark:text-white/70">
                    {"Reach out or join the waitlist — we’ll keep you posted as we launch."}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="mailto:hello@viberise.app" className="inline-flex">
                  <Button
                    variant="outline"
                    className="border-black/15 bg-white/60 hover:bg-white/80 dark:border-white/15 dark:bg-white/10"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {"Email us"}
                  </Button>
                </a>
                <Link href="#waitlist" className="inline-flex">
                  <Button className="bg-[var(--brand)] text-black hover:bg-[color:rgb(204,255,17,0.9)]">
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    {"Join Waitlist"}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
