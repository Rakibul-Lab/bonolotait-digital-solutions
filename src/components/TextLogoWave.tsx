import { useEffect, useId, useLayoutEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import "./TextLogoWave.css";

gsap.registerPlugin(MotionPathPlugin);

type Logo = { src: string; alt: string; title?: string };

const VIEW_W = 1200;
const VIEW_H = 150;
const CY = VIEW_H / 2;

const wavePath = (curviness: number) => {
  const a = Math.min(curviness * 2.2, CY - 20);
  return `M -320 ${CY} Q -160 ${CY - a} 0 ${CY} T 320 ${CY} T 640 ${CY} T 960 ${CY} T 1280 ${CY} T ${VIEW_W + 320} ${CY}`;
};

export default function TextLogoWave({
  logos,
  speed = 80,
  ribbonColor = "var(--primary)",
  ribbonWidth = 44,
  curviness = 22,
  pauseOnHover = true,
}: {
  logos: Logo[];
  speed?: number;
  ribbonColor?: string;
  ribbonWidth?: number;
  curviness?: number;
  pauseOnHover?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const chipRefs = useRef<(SVGGElement | null)[]>([]);

  const rawId = useId();
  const pathId = `logo-wave-${rawId.replace(/:/g, "")}`;
  const d = useMemo(() => wavePath(curviness), [curviness]);
  const items = useMemo(() => [...logos, ...logos], [logos]);

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path || items.length === 0) return;

    const tweens = chipRefs.current.map((chip, i) => {
      if (!chip) return null;
      const start = i / items.length;
      return gsap.to(chip, {
        motionPath: {
          path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start,
          end: start + 1,
        },
        duration: Math.max(12, 1800 / speed),
        repeat: -1,
        ease: "none",
      });
    });

    const root = rootRef.current;
    const pause = () => tweens.forEach((t) => t?.pause());
    const resume = () => tweens.forEach((t) => t?.resume());

    if (pauseOnHover && root) {
      root.addEventListener("pointerenter", pause);
      root.addEventListener("pointerleave", resume);
    }

    return () => {
      tweens.forEach((t) => t?.kill());
      if (pauseOnHover && root) {
        root.removeEventListener("pointerenter", pause);
        root.removeEventListener("pointerleave", resume);
      }
    };
  }, [d, items, pauseOnHover, speed]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      chipRefs.current.forEach((chip) => gsap.set(chip, { clearProps: "transform" }));
    }
  }, []);

  return (
    <div ref={rootRef} className="text-logo-wave">
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Technology logos">
        <path
          ref={pathRef}
          id={pathId}
          d={d}
          fill="none"
          stroke={ribbonColor}
          strokeWidth={ribbonWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {items.map((logo, i) => (
          <g
            key={`${logo.alt}-${i}`}
            ref={(el) => {
              chipRefs.current[i] = el;
            }}
            className="text-logo-wave__chip"
          >
            <rect x={-18} y={-14} width={36} height={28} rx={7} fill="#fff" />
            <image href={logo.src} x={-10} y={-10} width={20} height={20} preserveAspectRatio="xMidYMid meet" />
            <title>{logo.alt}</title>
          </g>
        ))}
      </svg>
    </div>
  );
}
