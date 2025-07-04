import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./ScrollToTop"; 
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HueCheck from "./pages/HueCheck";
import LettersUnsent from "./pages/LettersUnsent";
import LettersOfLight from "./pages/LettersOfLight";
import Session from "./pages/Session";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop /> {/* ✅ Added here */}
          <Routes>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/hue-check" element={<PageTransition><HueCheck /></PageTransition>} />
            <Route path="/letters-unsent" element={<PageTransition><LettersUnsent /></PageTransition>} />
            <Route path="/letters-of-light" element={<PageTransition><LettersOfLight /></PageTransition>} />
            <Route path="/session" element={<PageTransition><Session /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
