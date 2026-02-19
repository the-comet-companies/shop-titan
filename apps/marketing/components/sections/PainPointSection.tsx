'use client';

import PainPoint3D from './PainPoint3D';

export default function PainPointSection() {
    return (
        <div id="pain-points" className="relative">
            {/* Steps 1-4: 3D Scroll Experience */}
            <PainPoint3D />
        </div>
    );
}
