import { useEffect, useState } from "react";

interface CountdownTimerProps {
  seconds: number;
  onComplete?: () => void;
  format?: "seconds" | "mm:ss";
}

export const CountdownTimer = ({ 
  seconds, 
  onComplete,
  format = "seconds" 
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const formatTime = (time: number) => {
    if (format === "mm:ss") {
      const mins = Math.floor(time / 60);
      const secs = time % 60;
      return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    return time.toString().padStart(2, "0");
  };

  return (
    <span className="font-mono font-semibold text-primary">
      {formatTime(timeLeft)}
    </span>
  );
};
