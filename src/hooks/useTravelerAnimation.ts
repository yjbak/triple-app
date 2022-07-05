import { useEffect, useRef, useState } from "react";

interface CounterProps {
  start: number;
  end: number;
  fps?: number;
  duration?: number;
}
const easeOutExpo = (t: number, b: number, c: number, d: number): number =>
  Math.floor((c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b);

export function useTravelerAnimation({
  start,
  end,
  fps = 30,
  duration = 2000,
}: CounterProps) {
  const [count, setCount] = useState(start);
  const requestRef = useRef<number>(0);
  const thenAtRef = useRef<number>();
  const fpsInterval = 1000 / fps;

  const process = (time: number) => {
    cancelAnimationFrame(requestRef.current);
    if (!thenAtRef.current) {
      thenAtRef.current = window.performance.now();
    }

    const elapsed = time - thenAtRef.current;
    if (elapsed >= fpsInterval) {
      thenAtRef.current = time - (elapsed % fpsInterval);
      setCount((prevCount) => {
        if (prevCount >= end) {
          cancelAnimationFrame(requestRef.current);
        }
        return prevCount < end
          ? easeOutExpo(time, start, end - start, duration)
          : prevCount;
      });
    }
    requestRef.current = requestAnimationFrame(process);
  };

  const run = () => {
    requestRef.current = requestAnimationFrame(process);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return { count, run };
}
