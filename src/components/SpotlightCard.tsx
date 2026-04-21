import { ReactNode, useRef } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card rounded-2xl border border-white/[0.06] hover:border-white/[0.10] transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          '0 0 0 1px rgba(255,255,255,0.10), 0 8px 40px rgba(0,0,0,0.5), 0 0 60px rgba(94,106,210,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4)';
      }}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
