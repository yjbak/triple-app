import { useEffect, useRef, useState } from "react";

interface CounterProps {
  start: number;
  end: number;
  fps?: number;
  duration?: number;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

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
    if (time >= start + duration) {
      cancelAnimationFrame(requestRef.current);
    }
    if (!thenAtRef.current) {
      thenAtRef.current = window.performance.now();
    }

    const elapsed = time - thenAtRef.current;
    if (elapsed >= fpsInterval) {
      thenAtRef.current = time - (elapsed % fpsInterval);
      setCount((prevCount) => {
        const progress = (time - start) / duration;
        const val = easeInOutCubic(progress);

        if (prevCount >= end) {
          cancelAnimationFrame(requestRef.current);
        }
        return prevCount < end
          ? Math.round(start + (end - start) * val)
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
