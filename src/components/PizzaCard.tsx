import { useState } from "react";
import { Plus } from "lucide-react";
import { MenuItem, formatPrice } from "@/data/menuData";
import { useOrder } from "@/contexts/OrderContext";
import { createHalfPizza, isHalfAllowed } from "@/lib/pizzaUtil";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface PizzaCardProps {
  item: MenuItem;
  allPizzas: MenuItem[];
}

const PizzaCard = ({ item, allPizzas }: PizzaCardProps) => {
  const { addToCart, cart, removeFromCart } = useOrder();

  const inCart = cart.find(c => c.item.id === item.id);

  const [halfEnabled, setHalfEnabled] = useState(false);
  const [second, setSecond] = useState<MenuItem | null>(null);
  const [showReplaceConfirm, setShowReplaceConfirm] = useState(false);

  // only allow non-promo, non-broto pizzas as second flavor
  const availableSecondsBase = allPizzas.filter(
    p =>
      p.id !== item.id &&
      isHalfAllowed(p)
  );

  // separate salgadas (non-doces) and doces, then sort alphabetically
  const salgadas = availableSecondsBase
    .filter(p => p.subcategory !== "doces" && p.subcategory !== "brotos-doces")
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  
  const doces = availableSecondsBase
    .filter(p => p.subcategory === "doces" || p.subcategory === "brotos-doces")
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  const availableSeconds = [...salgadas, ...doces];

  const handleAdd = () => {
    addToCart(item);
  };

  const handleHalfSelect = (secondPizza: MenuItem) => {
    const combined = createHalfPizza(item, secondPizza);
    addToCart(combined, [item, secondPizza]);
    setSecond(null);
    setHalfEnabled(false);
  };

  const handleHalfButton = () => {
    setSecond(null); // limpa seleção anterior
    if (inCart) {
      setShowReplaceConfirm(true);
      return;
    }
    setHalfEnabled(true);
  };

  return (
    <div className="bg-card rounded-xl shadow-card p-4 flex flex-col justify-between gap-2">
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm text-foreground leading-tight">
          {item.name}
        </h3>
        {item.ingredients && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {item.ingredients}
          </p>
        )}
        <p className="text-base font-bold text-primary mt-2">
          {formatPrice(item.price)}
        </p>
      </div>

      {/* half selection */}
      {isHalfAllowed(item) && (
        <div className="mt-2">
          <Dialog open={halfEnabled} onOpenChange={setHalfEnabled}>
            <DialogTrigger asChild>
              <button className="text-xs text-primary underline" onClick={handleHalfButton}>
                {halfEnabled ? "Cancelar meia" : "Meia-pizza?"}
              </button>
            </DialogTrigger>
            {halfEnabled && !showReplaceConfirm && (
              <DialogContent>
                <DialogTitle>Meia‑pizza</DialogTitle>
                <DialogDescription>
                  Selecione outro sabor para o lado oposto
                </DialogDescription>
                <div className="mt-4 flex flex-col gap-1 max-h-60 overflow-y-auto">
                  {salgadas.length > 0 && (
                    <>
                      <div className="px-3 py-1 text-xs font-semibold text-muted-foreground">🍕 Salgadas</div>
                      {salgadas.map(p => (
                        <button
                          key={p.id}
                          onClick={() => handleHalfSelect(p)}
                          className="text-left w-full px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        >
                          {p.name}
                        </button>
                      ))}
                    </>
                  )}
                  {doces.length > 0 && (
                    <>
                      <div className="px-3 py-1 text-xs font-semibold text-muted-foreground mt-2">🍮 Doces</div>
                      {doces.map(p => (
                        <button
                          key={p.id}
                          onClick={() => handleHalfSelect(p)}
                          className="text-left w-full px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        >
                          {p.name}
                        </button>
                      ))}
                    </>
                  )}
                </div>
              </DialogContent>
            )}
          </Dialog>

          {/* Confirm replace dialog */}
          {showReplaceConfirm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-card rounded-xl shadow-card p-6 max-w-xs w-full flex flex-col items-center">
                <p className="text-base text-center mb-4">Você já adicionou essa pizza inteira.<br/>Deseja substituir pela meia-pizza?</p>
                <div className="flex gap-3 mt-2">
                  <button
                    className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold"
                    onClick={() => {
                      removeFromCart(item.id);
                      setShowReplaceConfirm(false);
                      setSecond(null);
                      setTimeout(() => setHalfEnabled(true), 0);
                    }}
                  >
                    Sim, substituir
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg bg-secondary text-foreground font-semibold"
                    onClick={() => {
                      setShowReplaceConfirm(false);
                      setHalfEnabled(false);
                      setSecond(null);
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}
          {second && <span className="text-xs text-muted-foreground">Selecionado: {second.name}</span>}
        </div>
      )}

      <button
        onClick={handleAdd}
        disabled={halfEnabled || showReplaceConfirm}
        className={`flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center active:scale-90 transition-transform relative ${
          halfEnabled || showReplaceConfirm ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <Plus className="w-5 h-5" />
        {inCart && (
          <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {inCart.quantity}
          </span>
        )}
      </button>
    </div>
  );
};

export default PizzaCard;
