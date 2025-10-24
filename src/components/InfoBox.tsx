import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const InfoBox = ({ children, className }: InfoBoxProps) => {
  return (
    <div
      className={cn(
        "bg-secondary border border-border rounded-lg p-4 flex gap-3",
        className
      )}
    >
      <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
};
