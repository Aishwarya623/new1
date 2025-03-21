import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Update to v6 imports
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import ScrollToTop from "@/components/common/ScrollToTop";
import PageTransition from "@/components/common/PageTransition";
import dotenv from "dotenv";


// Initialize dotenv
dotenv.config();

// Lazy load pages
const Home = lazy(() => import("@/pages/Home"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const Team = lazy(() => import("@/pages/Team"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));
const NotFound = lazy(() => import("@/pages/not-found"));
// Loading fallback component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

function RouterComponent() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <PageTransition>
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* Redirect all unknown routes to the Home page */}
                  
                  <Route path="/" element={<Home />} />
                </Routes>
              </Router>
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
        <RouterComponent />
        <Toaster />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
