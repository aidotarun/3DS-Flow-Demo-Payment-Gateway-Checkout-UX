import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SecureCard } from "@/components/ui/secure-card";
import { InfoBox } from "@/components/InfoBox";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, CreditCard, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const OtpAuthScreen = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [showSimulationModal, setShowSimulationModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }
    setShowSimulationModal(true);
  };

  const handleSimulate = (success: boolean) => {
    setShowSimulationModal(false);
    if (success) {
      navigate("/success");
    } else {
      navigate("/failure");
    }
  };

  const handleResend = () => {
    toast.success("OTP has been resent to your registered contact");
    setOtp("");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/redirect")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Header with logos */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">Demo Bank</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs font-semibold px-3 py-1 bg-primary text-primary-foreground rounded">
              VISA
            </div>
            <div className="text-xs font-semibold px-3 py-1 bg-primary text-primary-foreground rounded">
              Mastercard
            </div>
          </div>
        </div>

        <SecureCard>
          <div className="space-y-6">
            {/* Title */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                Cardholder Authentication
              </h1>
              <p className="text-sm text-muted-foreground">
                Please verify your transaction by entering the One-Time Password (OTP) sent to your registered mobile number ending ••45 or your email.
              </p>
            </div>

            {/* Demo info box */}
            <InfoBox>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">
                  For demo/testing environment enter: <span className="font-mono">123456</span>
                </p>
                <p>
                  This is a test environment — no real money will be deducted. The payment gateway is currently in test mode.
                </p>
              </div>
            </InfoBox>

            {/* Transaction summary block */}
            <div className="bg-secondary rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <CreditCard className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Card:</span>
                    <span className="font-mono font-semibold text-foreground">•••• 4321</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Merchant:</span>
                    <span className="font-semibold text-foreground">ExampleStore.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="text-lg font-bold text-foreground">INR 1,234.56</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                <Lock className="w-3 h-3" />
                <span>Your details are protected and encrypted.</span>
              </div>
            </div>

            {/* OTP input form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="otp" className="text-sm font-medium text-foreground">
                  Enter OTP
                </label>
                <Input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  placeholder="000000"
                  className="text-center text-2xl font-mono tracking-widest"
                  aria-describedby="otp-helper"
                />
                <div id="otp-helper" className="space-y-1">
                  <div className="text-center text-xs text-muted-foreground">
                    You have 3 attempts remaining.
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    OTP expires in <CountdownTimer seconds={120} format="mm:ss" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button type="submit" className="w-full" size="lg">
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleResend}
                >
                  Resend OTP
                </Button>
              </div>
            </form>

            {/* Help footer */}
            <div className="text-center space-y-1 pt-2 border-t border-border">
              <div className="text-xs text-muted-foreground">
                No funds will be charged unless authentication succeeds.
              </div>
              <div className="text-xs text-muted-foreground">
                Need help? Contact your bank.
              </div>
            </div>
          </div>
        </SecureCard>
      </div>

      {/* Simulation Modal */}
      <Dialog open={showSimulationModal} onOpenChange={setShowSimulationModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Simulation Result</DialogTitle>
            <DialogDescription>
              Choose the result you want to simulate for this authentication attempt.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 pt-4">
            <Button
              onClick={() => handleSimulate(true)}
              className="w-full bg-success hover:bg-success/90"
              size="lg"
            >
              Simulate Success
            </Button>
            <Button
              onClick={() => handleSimulate(false)}
              variant="destructive"
              className="w-full"
              size="lg"
            >
              Simulate Failure
            </Button>
            <p className="text-xs text-center text-muted-foreground pt-2">
              In production this step will be automatic based on the bank's response.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OtpAuthScreen;
