import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useOrder } from "@/contexts/OrderContext";
import MenuItemCard from "@/components/MenuItemCard";
import {
  lanchesBaby,
  lanchesHamburguer,
  lanchesFrango,
  lanchesContraFile,
  lanchesSalsicha,
  beirutes,
} from "@/data/menuData";

const tabs = [
  { key: "hamburguer", label: "Hambúrguer" },
  { key: "frango", label: "Frango" },
  { key: "contra-file", label: "Contra-Filé" },
  { key: "salsicha", label: "Hot Dog" },
  { key: "beirute", label: "Beirutes" },
  { key: "baby", label: "Baby" },
];

const MenuLanches = () => {
  const [active, setActive] = useState("hamburguer");
  const { totalItems } = useOrder();

  const getItems = () => {
    const sortByName = (a, b) => a.name.localeCompare(b.name);
    switch (active) {
      case "hamburguer": return [...lanchesHamburguer].sort(sortByName);
      case "frango": return [...lanchesFrango].sort(sortByName);
      case "contra-file": return [...lanchesContraFile].sort(sortByName);
      case "salsicha": return [...lanchesSalsicha].sort(sortByName);
      case "beirute": return [...beirutes].sort(sortByName);
      case "baby": return [...lanchesBaby].sort(sortByName);
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-400 pb-24">
      <div className="bg-red-600 px-4 pt-12 pb-6 flex items-center gap-3">
        <Link to="/" className="text-green-500">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-display font-black text-white">Lanches</h1>
      </div>

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

      {active === "baby" && (
        <div className="px-4 mt-3">
          <p className="text-xs text-orange-900 bg-orange-200 rounded-lg px-3 py-2">
            🍟 Todos os Baby acompanham fritas — R$20,00 cada.
          </p>
        </div>
      )}

      <div className="px-4 mt-4 space-y-3">
        {getItems().map(item => (
          <MenuItemCard key={item.id} item={item} />
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

export default MenuLanches;
