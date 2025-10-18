import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PreliminaryAnalysis from "./pages/services/PreliminaryAnalysis";
import OpportunityAssessment from "./pages/services/OpportunityAssessment";
import KillerIdeaIdentification from "./pages/services/KillerIdeaIdentification";
import StrategyActionPlan from "./pages/services/StrategyActionPlan";
import Implementation from "./pages/services/Implementation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/preliminary-analysis" element={<PreliminaryAnalysis />} />
          <Route path="/services/opportunity-assessment" element={<OpportunityAssessment />} />
          <Route path="/services/killer-idea-identification" element={<KillerIdeaIdentification />} />
          <Route path="/services/strategy-action-plan" element={<StrategyActionPlan />} />
          <Route path="/services/implementation" element={<Implementation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
