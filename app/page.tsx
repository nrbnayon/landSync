"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Check, Database, Menu, Map, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Map, title: "See every parcel", text: "Keep property boundaries, zones, and ownership details in one clear view." },
  { icon: BarChart3, title: "Understand the pattern", text: "Turn land records into useful insights with trends, distributions, and KPIs." },
  { icon: Database, title: "Work from clean data", text: "Upload, review, filter, and export records without losing the source of truth." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f7f1] text-[#172b23]">
      <section className="relative bg-[#153d32] text-[#f5f1df]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(215,229,178,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(215,229,178,.35)_1px,transparent_1px)] [background-size:52px_52px]" />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d6e5b1] text-[#153d32]"><Map size={19} /></span>
            LandSync
          </Link>
          <div className="hidden items-center gap-8 text-sm text-[#d6e2cf] md:flex">
            <a href="#capabilities" className="hover:text-white">Capabilities</a>
            <a href="#workflow" className="hover:text-white">How it works</a>
            <a href="#about" className="hover:text-white">Why LandSync</a>
            <Link href="/login" className="rounded-full border border-[#c6d5a4] px-5 py-2.5 font-semibold text-[#edf4dc] transition hover:bg-[#d6e5b1] hover:text-[#153d32]">Sign in</Link>
          </div>
          <button aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && <div className="relative border-t border-white/10 px-6 pb-5 pt-3 md:hidden"><div className="flex flex-col gap-4 text-sm"><a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="#workflow" onClick={() => setMenuOpen(false)}>How it works</a><Link href="/login" className="font-semibold">Sign in <ArrowRight className="ml-1 inline" size={15} /></Link></div></div>}

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-16">
          <div>
            <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d6e5b1]"><span className="h-px w-8 bg-[#d6e5b1]" /> Land intelligence, made practical</p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Make every acre easier to understand.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#d6e2cf]">LandSync brings parcel records, ownership data, and operational insight into one calm, dependable workspace.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/login" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6e5b1] px-6 py-3.5 font-bold text-[#153d32] transition hover:bg-white">Open your workspace <ArrowRight size={18} /></Link>
              <a href="#capabilities" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 font-semibold text-[#f5f1df] transition hover:border-white">Explore capabilities</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-[#d6e2cf]"><span className="flex items-center gap-2"><Check size={17} className="text-[#d6e5b1]" /> Centralized records</span><span className="flex items-center gap-2"><Check size={17} className="text-[#d6e5b1]" /> Role-based access</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[530px]">
            <div className="absolute -right-5 -top-8 hidden h-32 w-32 rounded-full border border-[#d6e5b1]/30 sm:block" />
            <div className="relative rounded-[2rem] bg-[#e3e9c9] p-3 shadow-2xl shadow-black/20">
              <div className="rounded-[1.5rem] bg-[#f6f7f1] p-5 text-[#172b23] sm:p-7">
                <div className="mb-6 flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-[#71816c]">Portfolio overview</p><p className="mt-1 text-2xl font-bold">Land at a glance</p></div><span className="rounded-full bg-[#d9ead0] px-3 py-1 text-xs font-bold text-[#31733e]">Live data</span></div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3"><div className="rounded-xl bg-[#153d32] p-4 text-white"><p className="text-xs text-[#c8d9c6]">Total parcels</p><p className="mt-2 text-2xl font-bold">1,284</p><p className="mt-1 text-xs text-[#d6e5b1]">+8.4% this year</p></div><div className="rounded-xl bg-[#eaf0dc] p-4"><p className="text-xs text-[#71816c]">Land area</p><p className="mt-2 text-2xl font-bold">8,492</p><p className="mt-1 text-xs text-[#71816c]">hectares</p></div><div className="col-span-2 rounded-xl bg-[#eef1e9] p-4 sm:col-span-1"><p className="text-xs text-[#71816c]">Verified records</p><p className="mt-2 text-2xl font-bold">96.8%</p><div className="mt-2 h-1.5 rounded-full bg-[#d5dfd0]"><div className="h-full w-[96.8%] rounded-full bg-[#49ab41]" /></div></div></div>
                <div className="mt-4 rounded-xl border border-[#dce5d8] bg-white p-4"><div className="mb-4 flex justify-between text-xs font-semibold text-[#71816c]"><span>Parcel activity</span><span>Last 6 months</span></div><div className="flex h-28 items-end gap-2">{[35, 50, 42, 70, 58, 88, 76, 100, 82, 94, 78, 96].map((height, index) => <div key={index} className="flex-1 rounded-t bg-[#83bd72]" style={{ height: `${height}%`, opacity: index % 3 === 0 ? 0.55 : 1 }} />)}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4b9b50]">One source of truth</p><h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">From field records to confident decisions.</h2></div><div className="grid gap-4 sm:grid-cols-3">{features.map(({ icon: Icon, title, text }) => <article key={title} className="border-t-2 border-[#d6e5b1] pt-5"><Icon className="text-[#3e9648]" size={25} /><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#647368]">{text}</p></article>)}</div></div></section>

      <section id="workflow" className="border-y border-[#dce5d8] bg-[#eaf0dc]"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-24"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4b9b50]">A clearer rhythm</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">Good land data should move with you.</h2><p className="mt-5 max-w-md leading-7 text-[#647368]">Whether you are reviewing a single property or managing a growing portfolio, LandSync keeps the next action visible.</p><Link href="/login" className="mt-7 inline-flex items-center gap-2 font-bold text-[#28743d]">Start with your data <ArrowRight size={17} /></Link></div><div className="grid gap-4 sm:grid-cols-3">{[["01", "Bring it together", "Upload and organize parcel records in one shared workspace."], ["02", "Read the story", "Use dashboards to spot change across zones, owners, and rights."], ["03", "Move forward", "Export reliable information and act with more confidence."]].map(([number, title, text]) => <div key={number} className="rounded-2xl bg-[#f6f7f1] p-6"><span className="text-sm font-bold text-[#74a957]">{number}</span><h3 className="mt-12 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#647368]">{text}</p></div>)}</div></div></section>

      <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-28"><div className="relative"><Image src="/images/project.png" alt="Community using shared land resources" width={400} height={400} className="h-80 w-full rounded-[2rem] object-cover sm:h-[390px]" /><div className="absolute -bottom-5 right-5 max-w-[250px] rounded-xl bg-[#153d32] p-5 text-sm leading-6 text-[#d6e5b1] shadow-xl">Better records support better conversations about the land.</div></div><div><ShieldCheck className="text-[#4b9b50]" size={30} /><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Built for clarity, from the ground up.</h2><p className="mt-5 max-w-lg leading-7 text-[#647368]">LandSync gives teams a shared language for property information, with structured access and an interface that makes complex records easier to act on.</p><div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#dce5d8] pt-6"><div><p className="text-3xl font-bold text-[#28743d]">3x</p><p className="mt-1 text-sm text-[#647368]">faster record review</p></div><div><p className="text-3xl font-bold text-[#28743d]">100%</p><p className="mt-1 text-sm text-[#647368]">centralized visibility</p></div></div></div></section>

      <footer className="bg-[#153d32] px-6 py-10 text-[#d6e2cf] lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Link href="/" className="flex items-center gap-2 font-bold text-white"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d6e5b1] text-[#153d32]"><Map size={16} /></span>LandSync</Link><div className="flex gap-5 text-sm"><Link href="/login" className="hover:text-white">Sign in</Link><Link href="/register" className="hover:text-white">Create account</Link></div><p className="text-xs text-[#9cb29e]">© 2026 LandSync</p></div></footer>
    </main>
  );
}
