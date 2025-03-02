import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Team from "@/pages/Team";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/team" component={Team} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;