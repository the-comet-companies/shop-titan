'use client';

// Below-the-fold infographics are heavy inline SVG. Rendering them client-only
// (ssr: false) keeps them out of the server HTML, which was ~380KB, while the
// text content above still server-renders for SEO. Placeholders reserve height
// to limit layout shift while each chunk loads.
import dynamic from 'next/dynamic';

const ph = (h: string) => {
    const InfographicLoading = () => <div className={`w-full ${h}`} aria-hidden="true" />;
    InfographicLoading.displayName = 'InfographicLoading';
    return InfographicLoading;
};

export const MorningInterruptionStack = dynamic(
    () => import('./infographics/MorningInterruptionStack').then((m) => m.MorningInterruptionStack),
    { ssr: false, loading: ph('min-h-[420px]') },
);
export const BrokenSystemMap = dynamic(
    () => import('./infographics/BrokenSystemMap').then((m) => m.BrokenSystemMap),
    { ssr: false, loading: ph('min-h-[420px]') },
);
export const ProofDashboard = dynamic(
    () => import('./infographics/ProofDashboard').then((m) => m.ProofDashboard),
    { ssr: false, loading: ph('min-h-[420px]') },
);
export const GrowthPressureScale = dynamic(
    () => import('./infographics/GrowthPressureScale').then((m) => m.GrowthPressureScale),
    { ssr: false, loading: ph('min-h-[360px]') },
);
export const OwnerAsOperatingSystem = dynamic(
    () => import('./infographics/OwnerAsOperatingSystem').then((m) => m.OwnerAsOperatingSystem),
    { ssr: false, loading: ph('min-h-[420px]') },
);
export const OneJobSixPlaces = dynamic(
    () => import('./infographics/OneJobSixPlaces').then((m) => m.OneJobSixPlaces),
    { ssr: false, loading: ph('min-h-[420px]') },
);
export const HandoffRepairMap = dynamic(
    () => import('./infographics/HandoffRepairMap').then((m) => m.HandoffRepairMap),
    { ssr: false, loading: ph('min-h-[420px]') },
);
export const ChaosToControlComparison = dynamic(
    () => import('./infographics/ChaosToControlComparison').then((m) => m.ChaosToControlComparison),
    { ssr: false, loading: ph('min-h-[420px]') },
);
export const DailyOrderSnapshot = dynamic(
    () => import('./infographics/DailyOrderSnapshot').then((m) => m.DailyOrderSnapshot),
    { ssr: false, loading: ph('min-h-[360px]') },
);
export const ClarityState = dynamic(
    () => import('./infographics/ClarityState').then((m) => m.ClarityState),
    { ssr: false, loading: ph('min-h-[360px]') },
);
