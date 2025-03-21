import React, { Suspense, lazy } from "react";
import { Route, Switch } from "wouter"; // Wouter import
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import ScrollToTop from "@/components/common/ScrollToTop";
import PageTransition from "@/components/common/PageTransition";
import dotenv from "dotenv"; // Import dotenv to load environment variables

// Initialize dotenv
dotenv.config();

// Lazy load pages
const Home = lazy(() => import("@/pages/Home"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const Team = lazy(() => import("@/pages/Team"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));

// Loading fallback component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

function Router() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <PageTransition>
              <Switch>
                <Route path="/" children={<Home />} />
                <Route path="/about" children={<About />} />
                <Route path="/solutions" children={<Solutions />} />
                <Route path="/team" children={<Team />} />
                <Route path="/contact" children={<Contact />} />
                {/* Redirect all unknown routes to the Home page */}
                <Route children={<Home />} />
              </Switch>
            </PageTransition>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Router />
        <Toaster />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
