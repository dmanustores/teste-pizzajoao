import { Plus } from "lucide-react";
import { MenuItem, formatPrice } from "@/data/menuData";
import { useOrder } from "@/contexts/OrderContext";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addToCart, cart } = useOrder();
  const inCart = cart.find(c => c.item.id === item.id);

  return (
    <div className="bg-card rounded-xl shadow-card p-4 flex justify-between items-start gap-3">
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm text-foreground leading-tight">{item.name}</h3>
        {item.ingredients && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.ingredients}</p>
        )}
        <p className="text-base font-bold text-primary mt-2">{formatPrice(item.price)}</p>
      </div>
      <button
        onClick={() => addToCart(item)}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center active:scale-90 transition-transform relative"
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

export default MenuItemCard;
