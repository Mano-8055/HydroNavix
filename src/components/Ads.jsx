import { useMemo } from "react"

export default function Ads({
  messages = [
    "HydroNavix is heading to INMEX India 2025 — Let’s meet, connect, and shape the future of marine engineering!",
  ],
  speed = 20,
  href,
}) {

  const trackItems = useMemo(() => [...messages, ...messages], [messages]);

  if (!open) return null;

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className="relative w-full overflow-hidden bg-primary text-secondary">
   
      <Wrapper
        {...wrapperProps}
        className="block cursor-pointer select-none"
        aria-label="Announcements"
      >
        <div
          className="whitespace-nowrap flex gap-12 py-2 will-change-transform hover:[animation-play-state:paused]"
          style={{
            animation: `marquee ${speed}s linear infinite`
          }}
        >
          {trackItems.map((msg, i) => (
            <span key={i} className="text-sm font-medium md:text-base">
              {msg}
            </span>
          ))}
        </div>
      </Wrapper>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
