import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Microrrelatos from "@/pages/microrrelatos";
import MicrorrelatesTheme from "@/pages/microrrelatos-theme";
import Lesson from "@/pages/lesson";
import Cuentos from "@/pages/cuentos";
import Novelas from "@/pages/novelas";
import Editor from "@/pages/editor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/microrrelatos" component={Microrrelatos} />
      <Route path="/microrrelatos/:theme" component={MicrorrelatesTheme} />
      <Route path="/microrrelatos/:theme/lesson/:lessonId" component={Lesson} />
      <Route path="/cuentos" component={Cuentos} />
      <Route path="/novelas" component={Novelas} />
      <Route path="/editor" component={Editor} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1">
              <Router />
            </main>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
