import { useNavigate } from "react-router-dom";
import { SecureCard } from "@/components/ui/secure-card";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft } from "lucide-react";

const FailureScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <SecureCard>
        <div className="text-center space-y-6">
          {/* Back button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/otp-auth")}
            className="absolute top-4 left-4"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          {/* Error icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-destructive/10 p-6">
              <XCircle className="w-16 h-16 text-destructive" />
            </div>
          </div>

          {/* Error message */}
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-bold text-foreground">
              Authentication Failed
            </h1>
            <p className="text-sm text-muted-foreground">
              The authentication could not be completed. Please try again or contact your bank.
            </p>
            <div className="bg-secondary border border-border rounded-lg p-3 text-xs text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">No money has been charged.</p>
              <p>Your transaction was not completed and no funds have been deducted from your account.</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={() => navigate("/otp-auth")}
              className="w-full"
              size="lg"
            >
              Retry Authentication
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
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

export default FailureScreen;
