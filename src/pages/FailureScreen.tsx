import { useNavigate } from "react-router-dom";
import { SecureCard } from "@/components/ui/secure-card";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

const FailureScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <SecureCard>
        <div className="text-center space-y-6">
          {/* Error icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-destructive/10 p-6">
              <XCircle className="w-16 h-16 text-destructive" />
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-foreground">
              Authentication Failed
            </h1>
            <p className="text-sm text-muted-foreground">
              The authentication could not be completed. Please try again or contact your bank.
            </p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={() => navigate("/otp-auth")}
              className="w-full"
              size="lg"
            >
              Try Again
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="w-full"
            >
              Return to Start
            </Button>
          </div>
        </div>
      </SecureCard>
    </div>
  );
};

export default FailureScreen;
