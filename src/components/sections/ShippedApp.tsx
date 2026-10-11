"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { shippedApp } from "@/lib/data";
import { Apple, Smartphone, Bell, Images, CalendarDays, Languages, CheckCircle2 } from "lucide-react";

function PhoneMockup({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`relative w-44 h-[22rem] rounded-[2.2rem] bg-slate-900 p-2 shadow-2xl shadow-teal-900/40 ring-1 ring-white/10 ${className}`}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 h-4 w-16 rounded-full bg-black z-10" />
      <div className="h-full w-full rounded-[1.7rem] overflow-hidden">{children}</div>
    </div>
  );
}

function GalleryScreen() {
  const tiles = ["bg-amber-300", "bg-teal-300", "bg-rose-300", "bg-violet-300", "bg-sky-300", "bg-lime-300"];
  return (
    <div className="h-full bg-gradient-to-b from-white to-teal-50 p-3 pt-9 space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-3 w-20 rounded-full bg-teal-700/80" />
        <Bell className="h-4 w-4 text-teal-700" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {tiles.map((t, i) => (
          <div key={i} className={`aspect-square rounded-xl ${t}`} />
        ))}
      </div>
      <div className="space-y-1.5">
        <div className="h-2 w-full rounded-full bg-slate-300/70" />
        <div className="h-2 w-2/3 rounded-full bg-slate-300/50" />
      </div>
      <div className="rounded-2xl bg-teal-700 p-2.5 flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-white/90" />
        <div className="space-y-1 flex-1">
          <div className="h-2 w-4/5 rounded-full bg-white/90" />
          <div className="h-2 w-1/2 rounded-full bg-white/60" />
        </div>
      </div>
    </div>
  );
}

function ScheduleScreen() {
  const rows = [
    { c: "bg-amber-400", w: "w-3/4" },
    { c: "bg-teal-400", w: "w-2/3" },
    { c: "bg-rose-400", w: "w-4/5" },
    { c: "bg-violet-400", w: "w-1/2" },
  ];
  return (
    <div className="h-full bg-slate-900 p-3 pt-9 space-y-3">
      <div className="h-3 w-16 rounded-full bg-teal-400" />
      <div className="rounded-2xl bg-teal-900 p-3 space-y-2">
        <div className="h-2 w-1/2 rounded-full bg-teal-200" />
        <div className="h-2 w-4/5 rounded-full bg-teal-300/50" />
        <div className="h-4 w-12 rounded-full bg-amber-400" />
      </div>
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`h-2.5 w-2.5 rounded-full ${r.c}`} />
            <div className={`h-2.5 rounded-full bg-slate-600 ${r.w}`} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-16 rounded-xl bg-slate-800" />
        <div className="h-16 rounded-xl bg-slate-800" />
      </div>
    </div>
  );
}

const featureIcons = [Images, CalendarDays, Bell, Languages];

export function ShippedApp() {
  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl border bg-gradient-to-br from-teal-600/10 via-card to-amber-500/10 shadow-xl">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="relative grid lg:grid-cols-2 gap-10 p-8 md:p-12 items-center">
        {/* Copy */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-teal-600 hover:bg-teal-600 text-white">Live on the stores</Badge>
            {shippedApp.platforms.map((p) => (
              <Badge key={p} variant="outline" className="gap-1.5">
                {p === "iOS" ? <Apple className="h-3 w-3" /> : <Smartphone className="h-3 w-3" />}
                {p}
              </Badge>
            ))}
            <Badge variant="secondary">{shippedApp.role} · {shippedApp.year}</Badge>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">{shippedApp.name}</h3>
            <p className="text-lg text-primary font-medium mt-1">{shippedApp.subtitle}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">{shippedApp.summary}</p>

          <div className="flex gap-2 flex-wrap" dir="rtl">
            {shippedApp.languages.map((l) => (
              <span
                key={l}
                className="rounded-full border border-teal-600/30 bg-teal-600/10 px-3 py-1 text-sm font-medium text-teal-700 dark:text-teal-300"
              >
                {l}
              </span>
            ))}
          </div>

          <ul className="space-y-2.5">
            {shippedApp.highlights.map((h, i) => {
              const Icon = featureIcons[i] ?? CheckCircle2;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1.5">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span>{h}</span>
                </motion.li>
              );
            })}
          </ul>

          <div className="flex flex-wrap gap-2 pt-1">
            {shippedApp.stack.map((s) => (
              <Badge key={s} variant="outline" className="text-xs">
                {s}
              </Badge>
            ))}
          </div>
        </div>

        {/* Phones */}
        <div className="relative flex justify-center items-center h-[26rem]">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -12 }}
            whileInView={{ opacity: 1, y: 0, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute left-[8%] sm:left-[14%]"
          >
            <PhoneMockup>
              <GalleryScreen />
            </PhoneMockup>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 12 }}
            whileInView={{ opacity: 1, y: 0, rotate: 7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute right-[8%] sm:right-[14%] top-8"
          >
            <PhoneMockup>
              <ScheduleScreen />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
