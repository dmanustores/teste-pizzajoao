import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useOrder } from "@/contexts/OrderContext";
import PizzaCard from "@/components/PizzaCard";
import {
  pizzasTradicionais,
  pizzasEspeciais,
  pizzasDoces,
  brotos,
  brotosDoces,
} from "@/data/menuData";

const tabs = [
  { key: "tradicionais", label: "Tradicionais" },
  { key: "especiais", label: "Especiais" },
  { key: "doces", label: "Doces" },
  { key: "brotos", label: "Brotos" },
];

const MenuPizzas = () => {
  const [active, setActive] = useState("tradicionais");

  // list of all pizzas (non-promotional) used for half-pizza selections
  const allPizzas = [
    ...pizzasTradicionais,
    ...pizzasEspeciais,
    ...pizzasDoces,
    // brotos ignored: small size shouldn't be halfed
  ];
  const { totalItems } = useOrder();

  const getItems = () => {
    const sortByName = (a, b) => a.name.localeCompare(b.name);
    switch (active) {
      case "tradicionais": return [...pizzasTradicionais].sort(sortByName);
      case "especiais": return [...pizzasEspeciais].sort(sortByName);
      case "doces": return [...pizzasDoces].sort(sortByName);
      case "brotos": return [...[...brotos, ...brotosDoces]].sort(sortByName);
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-400 pb-24">
      <div className="bg-red-600 px-4 pt-12 pb-6 flex items-center gap-3">
        <Link to="/" className="text-green-500">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-display font-black text-white">Pizzas</h1>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-4 relative z-10">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === t.key
                  ? "bg-card text-primary shadow-card"
                  : "bg-primary/10 text-primary-foreground/80"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {active === "brotos" && (
        <div className="px-4 mt-3">
          <p className="text-xs text-orange-900 bg-orange-200 rounded-lg px-3 py-2">
            ⚠️ Brotos individuais — <strong>sem meio a meio</strong>. Doces: R$20,00 (Califórnia R$25,00).
          </p>
        </div>
      )}

      <div className="px-4 mt-4 space-y-3">
        {getItems().map(item => (
          <PizzaCard key={item.id} item={item} allPizzas={allPizzas} />
        ))}
      </div>

      {totalItems > 0 && (
        <Link
          to="/carrinho"
          className="fixed bottom-6 right-6 z-50 bg-red-600 text-white w-16 h-16 rounded-full shadow-float flex items-center justify-center animate-bounce-subtle"
        >
          <ShoppingCart className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        </Link>
      )}
    </div>
  );
};

export default MenuPizzas;
