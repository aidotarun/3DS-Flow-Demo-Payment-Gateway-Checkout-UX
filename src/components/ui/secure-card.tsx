import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SecureCardProps {
  children: ReactNode;
  className?: string;
}

export const SecureCard = ({ children, className }: SecureCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-lg shadow-lg border border-border p-8 max-w-md w-full mx-auto animate-fade-in",
        className
      )}
      style={{
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
      }}
    >
      {children}
    </div>
  );
};
