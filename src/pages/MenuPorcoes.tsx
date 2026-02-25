import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useOrder } from "@/contexts/OrderContext";
import MenuItemCard from "@/components/MenuItemCard";
import { porcoes } from "@/data/menuData";

const MenuPorcoes = () => {
  const { totalItems } = useOrder();

  return (
    <div className="min-h-screen bg-gray-400 pb-24">
      <div className="bg-red-600 px-4 pt-12 pb-6 flex items-center gap-3">
        <Link to="/" className="text-green-500">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-display font-black text-white">
          Porções
        </h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {[...porcoes].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
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

export default MenuPorcoes;
