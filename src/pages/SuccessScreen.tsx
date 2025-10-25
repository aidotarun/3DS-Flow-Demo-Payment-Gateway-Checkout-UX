import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SecureCard } from "@/components/ui/secure-card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const SuccessScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <SecureCard>
        <div className="text-center space-y-6">
          {/* Success icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-success/10 p-6">
              <CheckCircle2 className="w-16 h-16 text-success" />
            </div>
          </div>

          {/* Success message */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Authentication Successful
            </h1>
            <p className="text-sm text-muted-foreground">
              Your payment has been authenticated. Returning to merchant…
            </p>
            <p className="text-sm text-muted-foreground">
              You are being redirected to ExampleStore.com.
            </p>
            <p className="text-xs text-muted-foreground">
              You don't need to do anything. This window will close automatically in a few seconds.
            </p>
          </div>

          {/* Loading indicator */}
          <div className="flex justify-center gap-2 pt-2">
            <div className="w-2 h-2 rounded-full bg-success animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 rounded-full bg-success animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 rounded-full bg-success animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>

          {/* Manual override button */}
          <div className="pt-4">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="w-full"
            >
              Return to Merchant
            </Button>
          </div>
        </div>
      </SecureCard>
    </div>
  );
};

export default SuccessScreen;
