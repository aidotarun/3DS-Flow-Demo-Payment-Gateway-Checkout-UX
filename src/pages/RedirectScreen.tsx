import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SecureCard } from "@/components/ui/secure-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Lock, Loader2 } from "lucide-react";

const RedirectScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/otp-auth");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <SecureCard>
        <div className="space-y-6">
          {/* Header with lock icon */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span>Secure connection</span>
          </div>

          {/* Progress bar */}
          <ProgressBar duration={10} />

          {/* Spinner */}
          <div className="flex justify-center">
            <Loader2 className="w-12 h-12 text-primary animate-spin-slow" />
          </div>

          {/* Main message */}
          <div className="text-center space-y-3">
            <h1 className="text-xl font-semibold text-foreground">
              Please wait — we are redirecting you to your bank for authentication.
            </h1>
            <p className="text-sm text-muted-foreground">
              This may take a few seconds while we verify your transaction for security.
            </p>
          </div>

          {/* Countdown */}
          <div className="text-center text-sm text-muted-foreground">
            Redirecting to 3D Secure page in{" "}
            <CountdownTimer seconds={10} /> seconds
          </div>
        </div>
      </SecureCard>
    </div>
  );
};

export default RedirectScreen;
