import { Icon } from "./Icon";

export type WorkflowStep = {
  index: string;
  icon: string;
  h: string;
  p?: string;
};

type Props = {
  steps: WorkflowStep[];
};

export function WorkflowStepper({ steps }: Props) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-structural-border dark:bg-gray-700"
      />
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-x-6 gap-y-10">
        {steps.map((s) => (
          <li key={s.index} className="relative">
            <div className="relative flex items-center justify-center lg:justify-start mb-5">
              <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-charcoal dark:border-white bg-background-light dark:bg-background-dark text-charcoal dark:text-white">
                <Icon name={s.icon} size={18} weight={300} />
              </span>
            </div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
              Step {s.index}
            </div>
            <div className="mt-1.5 text-[15px] md:text-[16px] font-semibold tracking-tight text-charcoal dark:text-white">
              {s.h}
            </div>
            {s.p ? (
              <p className="mt-2 text-[13.5px] text-secondary-text dark:text-gray-400 leading-relaxed">
                {s.p}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
