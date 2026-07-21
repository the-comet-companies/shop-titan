'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    PRICING,
    usd,
    computeTotals,
    type CalcState,
    type ModelId,
    type SummaryLine,
} from '@/lib/pricing-calculator';

const MAX_GROSS = 500000;
const SLIDER_MAX = 150000;

function StepLabel({ children, hint }: { children: React.ReactNode; hint?: string }) {
    return (
        <div className="flex items-baseline justify-between gap-4 border-b border-structural-border dark:border-gray-800 pb-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-charcoal dark:text-white">{children}</span>
            {hint && <span className="text-[11px] uppercase tracking-wider text-secondary-text dark:text-gray-500">{hint}</span>}
        </div>
    );
}

function SumLine({ line }: { line: SummaryLine }) {
    return (
        <div className="flex items-baseline justify-between gap-3 py-1.5 text-sm">
            <span className="text-white/75">{line.label}</span>
            <span className="font-semibold text-white">{usd(line.amt)}</span>
        </div>
    );
}

export default function PricingCalculator() {
    const [state, setState] = useState<CalcState>({ model: 'diy', gross: 25000, seo: false, ads: false, email: false, brand: false });
    const t = computeTotals(state);
    const baseWaived = state.gross < PRICING.monthly.baseTrigger;

    const setGross = (v: number) => setState((s) => ({ ...s, gross: Math.max(0, Math.min(MAX_GROSS, v)) }));
    const toggle = (k: 'seo' | 'ads' | 'email' | 'brand') => setState((s) => ({ ...s, [k]: !s[k] }));

    const addonRows: { key: 'seo' | 'ads' | 'email' | 'brand'; name: string; desc: string; price: string }[] = [
        { key: 'seo', name: PRICING.addons.seo.name, desc: PRICING.addons.seo.desc, price: '$750/mo' },
        { key: 'ads', name: PRICING.addons.ads.name, desc: PRICING.addons.ads.desc, price: '$1,000/mo' },
        { key: 'email', name: PRICING.addons.email.name, desc: PRICING.addons.email.desc, price: '$600/mo' },
        { key: 'brand', name: PRICING.addons.brand.name, desc: PRICING.addons.brand.desc, price: '$1,500+' },
    ];

    return (
        <>
            {/* ───── HERO ───── */}
            <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-mobile text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-[1.05] mb-6">
                        Built to sell.
                        <br />
                        <span className="text-primary">Two ways to launch.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A fully SEO-optimized ecommerce storefront, built on the same platform that powers our flagship. Pick your model, estimate your monthly, and add what you need. <span className="font-semibold text-charcoal dark:text-white">We win when you win.</span> All pricing in USD.
                    </p>
                </div>
            </section>

            {/* ───── CALCULATOR ───── */}
            <section className="bg-surface dark:bg-gray-950 py-12 md:py-16 border-y border-structural-border dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-mobile grid lg:grid-cols-5 gap-10 lg:gap-14">
                    {/* LEFT: CONTROLS */}
                    <div className="lg:col-span-3">
                        {/* STEP: MODEL */}
                        <div className="mb-10">
                            <StepLabel hint="click to select">Choose your model</StepLabel>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {(Object.keys(PRICING.models) as ModelId[]).map((id) => {
                                    const m = PRICING.models[id];
                                    const active = state.model === id;
                                    return (
                                        <button
                                            key={id}
                                            type="button"
                                            onClick={() => setState((s) => ({ ...s, model: id }))}
                                            aria-pressed={active}
                                            className={`relative text-left rounded-2xl border-2 p-6 transition-colors ${
                                                active
                                                    ? 'border-primary bg-primary text-white shadow-card'
                                                    : 'border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 text-charcoal dark:text-white hover:border-primary/50'
                                            }`}
                                        >
                                            <span
                                                className={`absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full border text-xs ${
                                                    active ? 'border-white bg-white text-primary' : 'border-structural-border dark:border-gray-700 text-transparent'
                                                }`}
                                                aria-hidden="true"
                                            >
                                                <span className="material-symbols-outlined text-base">check</span>
                                            </span>
                                            <div className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-3 ${active ? 'text-white/80' : 'text-secondary-text dark:text-gray-500'}`}>
                                                {m.tag}
                                            </div>
                                            <div className="text-xl font-bold tracking-tight leading-snug mb-3">{m.headline}</div>
                                            <div className="text-3xl font-bold tracking-tight">{usd(m.setupTotal)}</div>
                                            <div className={`text-sm mt-1 ${active ? 'text-white/80' : 'text-secondary-text dark:text-gray-400'}`}>{m.sub}</div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* STEP: SETUP */}
                        <div className="mb-10">
                            <StepLabel hint={`${usd(t.model.balance)} balance only after Day 90`}>Setup</StepLabel>
                            <div className="rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
                                <div className="flex-1">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-secondary-text dark:text-gray-500 mb-1">Deposit</div>
                                    <div className="text-2xl font-bold text-charcoal dark:text-white">{usd(t.model.deposit)}</div>
                                    <div className="text-xs text-secondary-text dark:text-gray-500 mt-1">Kickoff</div>
                                </div>
                                <span className="material-symbols-outlined text-secondary-text dark:text-gray-600 rotate-90 sm:rotate-0" aria-hidden="true">arrow_forward</span>
                                <div className="flex-1">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-secondary-text dark:text-gray-500 mb-1">Day 90 Balance</div>
                                    <div className="text-2xl font-bold text-charcoal dark:text-white">{usd(t.model.balance)}</div>
                                    <div className="text-xs text-secondary-text dark:text-gray-500 mt-1">If you continue</div>
                                </div>
                                <span className="material-symbols-outlined text-secondary-text dark:text-gray-600 rotate-90 sm:rotate-0" aria-hidden="true">arrow_forward</span>
                                <div className="flex-1">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-secondary-text dark:text-gray-500 mb-1">Total Setup</div>
                                    <div className="text-2xl font-bold text-primary">{usd(t.model.setupTotal)}</div>
                                    <div className="text-xs text-secondary-text dark:text-gray-500 mt-1">USD</div>
                                </div>
                            </div>
                            <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed mt-3">{t.model.disc}</p>
                        </div>

                        {/* STEP: MONTHLY ESTIMATOR */}
                        <div className="mb-10">
                            <StepLabel hint="drag or type your gross sales">Estimate your monthly</StepLabel>
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <div className="flex items-center border border-charcoal/70 dark:border-gray-600 px-4 py-3">
                                    <span className="text-lg font-semibold text-secondary-text dark:text-gray-500 mr-1">$</span>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        aria-label="Gross sales per month"
                                        value={new Intl.NumberFormat('en-US').format(state.gross)}
                                        onChange={(e) => setGross(parseInt(e.target.value.replace(/[^0-9]/g, ''), 10) || 0)}
                                        className="w-28 bg-transparent text-xl font-bold text-charcoal dark:text-white outline-none"
                                    />
                                </div>
                                <span className="text-sm uppercase tracking-wider text-secondary-text dark:text-gray-500">gross sales / month</span>
                            </div>
                            <input
                                type="range"
                                min={0}
                                max={SLIDER_MAX}
                                step={1000}
                                value={Math.min(SLIDER_MAX, state.gross)}
                                onChange={(e) => setGross(parseInt(e.target.value, 10))}
                                aria-label="Gross sales slider"
                                className="w-full accent-primary"
                            />
                            <div className="flex justify-between text-xs text-secondary-text dark:text-gray-500 mt-1 mb-6">
                                <span>$0</span><span>$50K</span><span>$100K</span><span>$150K+</span>
                            </div>

                            <div className="border-t border-structural-border dark:border-gray-700 divide-y divide-dotted divide-structural-border dark:divide-gray-700">
                                <div className={`flex items-baseline justify-between py-3 text-sm ${baseWaived ? 'opacity-50' : ''}`}>
                                    <span className="text-charcoal dark:text-gray-200">Monthly base {baseWaived ? '(waived under $10K)' : ''}</span>
                                    <span className="font-semibold text-charcoal dark:text-white">{usd(baseWaived ? 0 : PRICING.monthly.baseFee)}</span>
                                </div>
                                {t.rev.parts.map((p) => (
                                    <div key={p.label} className={`flex items-baseline justify-between py-3 text-sm ${p.active ? '' : 'opacity-50'}`}>
                                        <span className="text-charcoal dark:text-gray-200">
                                            {(p.rate * 100).toFixed(p.rate === 0.025 ? 1 : 0)}% on {usd(p.amt)}
                                            <span className="text-secondary-text dark:text-gray-500"> · {p.label}</span>
                                        </span>
                                        <span className="font-semibold text-charcoal dark:text-white">{usd(p.fee)}</span>
                                    </div>
                                ))}
                                <div className="flex items-baseline justify-between py-3">
                                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-charcoal dark:text-white">Base + revenue share</span>
                                    <span className="text-lg font-bold text-primary">{usd(t.base + t.rev.total)}</span>
                                </div>
                            </div>

                            <div className="bg-charcoal dark:bg-gray-800 text-white px-4 py-3 mt-4 text-sm leading-relaxed">
                                {baseWaived ? (
                                    <>
                                        <span className="font-semibold">Base fee waived.</span> The $500 monthly base does not apply until you cross $10,000 gross in a single month. We do not get paid a base until you are earning.
                                    </>
                                ) : (
                                    <>
                                        <span className="font-semibold">Base fee active.</span> You have crossed $10,000 gross, so the $500 base applies from this month forward.
                                    </>
                                )}
                            </div>
                        </div>

                        {/* STEP: ADD-ONS */}
                        <div>
                            <StepLabel hint="optional · either model">Add-ons</StepLabel>
                            <div className="divide-y divide-structural-border dark:divide-gray-800">
                                {addonRows.map((a) => (
                                    <label
                                        key={a.key}
                                        className="flex items-center gap-4 py-3.5 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={state[a.key]}
                                            onChange={() => toggle(a.key)}
                                            className="h-5 w-5 accent-primary shrink-0"
                                        />
                                        <span className="flex-1">
                                            <span className="block text-sm font-semibold text-charcoal dark:text-white">{a.name}</span>
                                            <span className="block text-xs text-secondary-text dark:text-gray-400">{a.desc}</span>
                                        </span>
                                        <span className="text-sm font-bold text-charcoal dark:text-white shrink-0">{a.price}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: SUMMARY */}
                    <div className="lg:col-span-2">
                        <div className="lg:sticky lg:top-28 rounded-2xl overflow-hidden border border-structural-border dark:border-gray-800 bg-charcoal dark:bg-gray-900 shadow-card">
                            <div className="px-6 py-5 border-b border-white/10">
                                <div className="text-lg font-bold text-white tracking-tight">Your Estimate</div>
                                <div className="text-xs uppercase tracking-[0.18em] text-white/60 mt-1">{t.model.name}</div>
                            </div>
                            <div className="px-6 py-5">
                                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-2">One-time (setup + one-time add-ons)</div>
                                {t.oneTimeLines.map((l) => <SumLine key={l.label} line={l} />)}
                                <div className="flex items-baseline justify-between border-t border-white/15 mt-2 pt-3 mb-6">
                                    <span className="text-xs font-bold uppercase tracking-wider text-white/70">Total One-Time</span>
                                    <span className="text-2xl font-bold text-white">{usd(t.oneTime)}</span>
                                </div>

                                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-2">Monthly (base + add-ons + revenue share)</div>
                                {t.monthlyLines.map((l) => <SumLine key={l.label} line={l} />)}
                                <div className="flex items-baseline justify-between border-t border-white/15 mt-2 pt-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-white/70">Total Monthly</span>
                                    <span className="text-2xl font-bold text-white">{usd(t.monthlyTotal)}/mo</span>
                                </div>
                                <p className="text-xs text-white/50 mt-2">
                                    Revenue share moves with your sales, shown here at {usd(state.gross)} gross/mo.
                                </p>

                                <Link
                                    href="/reach-out"
                                    className="mt-6 w-full px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    Choose This Plan
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </Link>
                                <p className="text-[11px] text-white/40 leading-relaxed mt-4">
                                    Estimate only. Revenue share is calculated on actual monthly gross (Total Sales − Sales Tax − Processing Fees − Shipping − Refunds) and reconciled monthly; the monthly total shown includes revenue share at the sales level you set. Not a contract.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───── COMPARISON ───── */}
            <section className="bg-background-light dark:bg-background-dark py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-mobile">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                        What You Get · DIY vs DFY
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-structural-border dark:border-gray-800">
                        <table className="w-full text-sm md:text-base bg-surface dark:bg-gray-950">
                            <thead>
                                <tr className="border-b border-structural-border dark:border-gray-800 text-left">
                                    <th className="px-5 py-4 font-bold text-charcoal dark:text-white">Deliverable</th>
                                    <th className="px-5 py-4 font-bold text-charcoal dark:text-white">Model 1 · DIY</th>
                                    <th className="px-5 py-4 font-bold text-charcoal dark:text-white">Model 2 · DFY</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-structural-border dark:divide-gray-800">
                                {PRICING.comparison.map((r) => (
                                    <tr key={r.deliverable}>
                                        <td className="px-5 py-4 font-medium text-charcoal dark:text-gray-200">{r.deliverable}</td>
                                        <td className={`px-5 py-4 ${r.diyWe ? 'text-primary font-semibold' : 'text-secondary-text dark:text-gray-400'}`}>{r.diy}</td>
                                        <td className={`px-5 py-4 ${r.dfyWe ? 'text-primary font-semibold' : 'text-secondary-text dark:text-gray-400'}`}>{r.dfy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ───── DFY FULL BUILD ───── */}
            <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-mobile">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                        Done-For-You · The Full Build
                    </h2>
                    <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-10">
                        Model 2 includes <span className="font-semibold text-charcoal dark:text-white">everything in DIY</span> (the platform, hosting, security, automatic upgrades, and training) <span className="font-semibold text-charcoal dark:text-white">plus the entire build below, done for you before you launch.</span> With DIY these are yours to build and load; with Done-For-You they are handled end to end.
                    </p>
                    <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10">
                        {PRICING.dfyBuild.map((g) => (
                            <div key={g.group}>
                                <h3 className="flex items-baseline justify-between gap-3 border-b border-structural-border dark:border-gray-700 pb-2 mb-4">
                                    <span className="text-sm font-bold uppercase tracking-[0.18em] text-charcoal dark:text-white">{g.group}</span>
                                    <span className="text-[11px] uppercase tracking-wider text-secondary-text dark:text-gray-500 whitespace-nowrap">{g.note}</span>
                                </h3>
                                <ul className="space-y-2">
                                    {g.items.map((i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-secondary-text dark:text-gray-400 leading-relaxed">
                                            <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check</span>
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 rounded-2xl border-2 border-charcoal/80 dark:border-gray-600 p-5 md:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-charcoal dark:text-white leading-relaxed whitespace-nowrap sm:border-r sm:border-structural-border dark:sm:border-gray-600 sm:pr-6 sm:self-stretch sm:flex sm:items-center">
                            Recommended<br />Extra
                        </span>
                        <p className="text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">
                            <span className="font-bold text-charcoal dark:text-white">ShipStation label printing.</span> We integrate ShipStation so you print carrier labels and fulfill orders in a couple of clicks instead of retyping every address, a serious time-saver once orders pick up. You provide the ShipStation account; we wire it in.
                        </p>
                    </div>
                </div>
            </section>

            {/* ───── FINE PRINT ───── */}
            <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-mobile">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                        The Fine Print
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10">
                        <div>
                            <h3 className="border-b border-structural-border dark:border-gray-700 pb-2 mb-4 text-sm font-bold uppercase tracking-[0.18em] text-charcoal dark:text-white">
                                Included in Monthly
                            </h3>
                            <ul className="space-y-2">
                                {PRICING.finePrint.includedMonthly.map((i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-secondary-text dark:text-gray-400 leading-relaxed">
                                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-charcoal dark:bg-gray-500" aria-hidden="true" />
                                        {i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="border-b border-structural-border dark:border-gray-700 pb-2 mb-4 text-sm font-bold uppercase tracking-[0.18em] text-charcoal dark:text-white">
                                You Provide / Pay Direct
                            </h3>
                            <ul className="space-y-2">
                                {PRICING.finePrint.youProvide.map((i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-secondary-text dark:text-gray-400 leading-relaxed">
                                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-charcoal dark:bg-gray-500" aria-hidden="true" />
                                        {i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-secondary-text dark:text-gray-500 leading-relaxed mt-8">
                        {PRICING.finePrint.ownership}
                    </p>
                </div>
            </section>
        </>
    );
}
