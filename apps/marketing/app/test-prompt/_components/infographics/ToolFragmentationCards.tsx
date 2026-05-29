export function ToolFragmentationCards() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
        {/* Card 1 — Whiteboards */}
        <div className="bg-white border border-structural-border rounded-lg p-5 sm:p-6 flex flex-col">
          <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
            Tool 01
          </div>

          <div className="mt-5 mb-6 flex items-center justify-center">
            <svg
              viewBox="0 0 160 120"
              className="w-full max-w-[180px] h-auto"
              aria-hidden="true"
            >
              {/* outer frame */}
              <rect
                x="4"
                y="4"
                width="152"
                height="112"
                fill="none"
                className="stroke-gray-300"
                strokeWidth="1"
              />
              {/* vertical lines (4 cols → 3 internal lines) */}
              <line x1="42" y1="4" x2="42" y2="116" className="stroke-gray-300" strokeWidth="1" />
              <line x1="80" y1="4" x2="80" y2="116" className="stroke-gray-300" strokeWidth="1" />
              <line x1="118" y1="4" x2="118" y2="116" className="stroke-gray-300" strokeWidth="1" />
              {/* horizontal lines (3 rows → 2 internal lines) */}
              <line x1="4" y1="41" x2="156" y2="41" className="stroke-gray-300" strokeWidth="1" />
              <line x1="4" y1="78" x2="156" y2="78" className="stroke-gray-300" strokeWidth="1" />
              {/* X marker in a cell */}
              <g className="stroke-rose-500" strokeWidth="1.5" strokeLinecap="round">
                <line x1="89" y1="50" x2="109" y2="70" />
                <line x1="109" y1="50" x2="89" y2="70" />
              </g>
            </svg>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-charcoal">
            Whiteboards
          </h3>
          <p className="mt-2 text-sm text-charcoal">
            Good for visibility in the room.
          </p>
          <p className="mt-1 text-sm text-secondary-text">
            Bad for remote access, history, and scale.
          </p>
        </div>

        {/* Card 2 — Spreadsheets */}
        <div className="bg-white border border-structural-border rounded-lg p-5 sm:p-6 flex flex-col">
          <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
            Tool 02
          </div>

          <div className="mt-5 mb-6 flex items-center justify-center">
            <svg
              viewBox="0 0 180 120"
              className="w-full max-w-[200px] h-auto"
              aria-hidden="true"
            >
              {/* header row tint */}
              <rect
                x="4"
                y="4"
                width="172"
                height="24"
                className="fill-gray-100"
              />
              {/* outer frame */}
              <rect
                x="4"
                y="4"
                width="172"
                height="112"
                fill="none"
                className="stroke-gray-300"
                strokeWidth="1"
              />
              {/* vertical lines — 6 cols → 5 internal */}
              {[32.67, 61.33, 90, 118.67, 147.33].map((x, i) => (
                <line
                  key={`v-${i}`}
                  x1={x}
                  y1="4"
                  x2={x}
                  y2="116"
                  className="stroke-gray-300"
                  strokeWidth="1"
                />
              ))}
              {/* horizontal lines — 4 rows → header divider + 2 internal */}
              <line x1="4" y1="28" x2="176" y2="28" className="stroke-gray-300" strokeWidth="1" />
              <line x1="4" y1="56" x2="176" y2="56" className="stroke-gray-300" strokeWidth="1" />
              <line x1="4" y1="84" x2="176" y2="84" className="stroke-gray-300" strokeWidth="1" />
              {/* fragile highlighted cell — col 4, row 3 */}
              <rect
                x="90"
                y="56"
                width="28.67"
                height="28"
                fill="none"
                className="stroke-amber-500"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-charcoal">
            Spreadsheets
          </h3>
          <p className="mt-2 text-sm text-charcoal">
            Flexible at first.
          </p>
          <p className="mt-1 text-sm text-secondary-text">
            Fragile when departments, versions, and priorities depend on them.
          </p>
        </div>

        {/* Card 3 — Generic task apps */}
        <div className="bg-white border border-structural-border rounded-lg p-5 sm:p-6 flex flex-col">
          <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
            Tool 03
          </div>

          <div className="mt-5 mb-6 flex items-center justify-center">
            <svg
              viewBox="0 0 160 120"
              className="w-full max-w-[180px] h-auto"
              aria-hidden="true"
            >
              {/* row 1 — checked */}
              <rect x="14" y="18" width="12" height="12" className="fill-charcoal" />
              <line x1="38" y1="24" x2="146" y2="24" className="stroke-gray-300" strokeWidth="1" />

              {/* row 2 — empty */}
              <rect
                x="14"
                y="44"
                width="12"
                height="12"
                fill="none"
                className="stroke-gray-400"
                strokeWidth="1"
              />
              <line x1="38" y1="50" x2="146" y2="50" className="stroke-gray-300" strokeWidth="1" />

              {/* row 3 — checked */}
              <rect x="14" y="70" width="12" height="12" className="fill-charcoal" />
              <line x1="38" y1="76" x2="146" y2="76" className="stroke-gray-300" strokeWidth="1" />

              {/* row 4 — empty */}
              <rect
                x="14"
                y="96"
                width="12"
                height="12"
                fill="none"
                className="stroke-gray-400"
                strokeWidth="1"
              />
              <line x1="38" y1="102" x2="146" y2="102" className="stroke-gray-300" strokeWidth="1" />
            </svg>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-charcoal">
            Generic task apps
          </h3>
          <p className="mt-2 text-sm text-charcoal">
            They track tasks.
          </p>
          <p className="mt-1 text-sm text-secondary-text">
            They do not understand decoration production.
          </p>
        </div>
      </div>

      <p className="mt-6 sm:mt-8 text-center font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
        Three tools. None built for production shops.
      </p>
    </div>
  );
}
