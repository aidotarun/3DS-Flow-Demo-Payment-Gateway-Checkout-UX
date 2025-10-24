import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RedirectScreen from "./pages/RedirectScreen";
import OtpAuthScreen from "./pages/OtpAuthScreen";
import SuccessScreen from "./pages/SuccessScreen";
import FailureScreen from "./pages/FailureScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/redirect" element={<RedirectScreen />} />
          <Route path="/otp-auth" element={<OtpAuthScreen />} />
          <Route path="/success" element={<SuccessScreen />} />
          <Route path="/failure" element={<FailureScreen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
