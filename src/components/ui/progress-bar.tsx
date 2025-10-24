import { cn } from "@/lib/utils";

interface ProgressBarProps {
  className?: string;
  duration?: number;
}

export const ProgressBar = ({ className, duration = 10 }: ProgressBarProps) => {
  return (
    <div className={cn("w-full h-1 bg-secondary overflow-hidden rounded-full", className)}>
      <div
        className="h-full bg-primary animate-progress-fill"
        style={{
          animationDuration: `${duration}s`,
        }}
      />
    </div>
  );
};
