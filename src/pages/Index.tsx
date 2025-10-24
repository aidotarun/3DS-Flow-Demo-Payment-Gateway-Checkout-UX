import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SecureCard } from "@/components/ui/secure-card";
import { Shield, Lock, CheckCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-6">
              <Shield className="w-16 h-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            3D Secure Authentication Demo
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Experience a realistic bank-grade 3D Secure (3DS) OTP verification flow. This demo simulates the complete authentication process used by major card networks.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg border border-border p-6 text-center space-y-2">
            <Lock className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-semibold text-foreground">Secure Flow</h3>
            <p className="text-sm text-muted-foreground">
              Production-like security and encryption simulation
            </p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6 text-center space-y-2">
            <CheckCircle className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-semibold text-foreground">OTP Verification</h3>
            <p className="text-sm text-muted-foreground">
              Real-time countdown and validation process
            </p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6 text-center space-y-2">
            <Shield className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-semibold text-foreground">Test Environment</h3>
            <p className="text-sm text-muted-foreground">
              Safe testing with success/failure simulation
            </p>
          </div>
        </div>

        {/* Start button */}
        <SecureCard>
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">
                Start Authentication Flow
              </h2>
              <p className="text-sm text-muted-foreground">
                Click below to begin the 3D Secure authentication process
              </p>
            </div>
            <Button
              size="lg"
              className="w-full"
              onClick={() => navigate("/redirect")}
            >
              Begin Demo
            </Button>
            <div className="text-xs text-muted-foreground pt-2">
              <Lock className="w-3 h-3 inline mr-1" />
              This is a testing environment - no real transactions will occur
            </div>
          </div>
        </SecureCard>

        {/* Instructions */}
        <div className="bg-secondary rounded-lg border border-border p-6 space-y-3">
          <h3 className="font-semibold text-foreground">Flow Overview:</h3>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Redirect screen with 10-second countdown</li>
            <li>OTP authentication page (use code: 123456)</li>
            <li>Choose success or failure simulation</li>
            <li>View result confirmation screen</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Index;
