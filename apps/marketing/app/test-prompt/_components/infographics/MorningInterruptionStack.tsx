type Message = {
  channel: string;
  text: string;
  time: string;
  urgent?: boolean;
};

const messages: Message[] = [
  { channel: "SLACK", text: "Which art file is final?", time: "8:42" },
  { channel: "EMAIL", text: "Customer approved, but where?", time: "9:03", urgent: true },
  { channel: "TEXT", text: "Whiteboard changed", time: "9:11" },
  { channel: "WALK-UP", text: "Blanks missing", time: "9:30", urgent: true },
  { channel: "EMAIL", text: "What is next?", time: "9:48" },
  { channel: "TEXT", text: "Ask the owner", time: "10:09" },
];

export function MorningInterruptionStack() {
  return (
    <div className="w-full">
      <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text mb-6">
        10:14 AM &mdash; Typical Morning Inbox
      </div>

      {/* Mobile: vertical stack, no offset */}
      <div className="flex flex-col gap-2 sm:hidden">
        {messages.map((m, i) => (
          <MessageCard key={i} message={m} />
        ))}
      </div>

      {/* Desktop: offset stacked deck */}
      <div className="hidden sm:block relative">
        {messages.map((m, i) => (
          <div
            key={i}
            className="relative"
            style={{
              marginLeft: `${i * 8}px`,
              marginTop: i === 0 ? 0 : "-6px",
              zIndex: messages.length - i,
            }}
          >
            <MessageCard message={m} />
          </div>
        ))}
      </div>

      <div className="mt-6 font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
        Six open questions before the first job ships.
      </div>
    </div>
  );
}

function MessageCard({ message }: { message: Message }) {
  return (
    <div className="bg-white border border-structural-border rounded-md py-3 px-4 shadow-sm flex items-center gap-3 sm:gap-4">
      <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text border border-structural-border rounded-sm px-1.5 py-0.5 shrink-0">
        {message.channel}
      </span>
      <span className="text-charcoal text-sm flex-1 truncate">{message.text}</span>
      {message.urgent && (
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" aria-hidden="true" />
      )}
      <span className="font-mono text-[11px] text-secondary-text shrink-0 tabular-nums">
        {message.time}
      </span>
    </div>
  );
}
