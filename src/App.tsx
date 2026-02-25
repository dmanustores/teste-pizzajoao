import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrderProvider } from "@/contexts/OrderContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomerRegistration from "./pages/CustomerRegistration";
import MenuPizzas from "./pages/MenuPizzas";
import MenuLanches from "./pages/MenuLanches";
import MenuPorcoes from "./pages/MenuPorcoes.tsx";
import Promotions from "./pages/Promotions";
import CartPage from "./pages/CartPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <OrderProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cadastro" element={<CustomerRegistration />} />
            <Route path="/menu/pizzas" element={<MenuPizzas />} />
            <Route path="/menu/lanches" element={<MenuLanches />} />
            <Route path="/menu/porcoes" element={<MenuPorcoes />} />
            <Route path="/promocoes" element={<Promotions />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </OrderProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
