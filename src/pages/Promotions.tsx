import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Tag } from "lucide-react";
import { useOrder } from "@/contexts/OrderContext";
import MenuItemCard from "@/components/MenuItemCard";
import { MenuItem } from "@/data/menuData";

const promo35: MenuItem[] = [
  { id: "promo1", name: "Bauru (Promoção)", price: 35.00, ingredients: "Molho, presunto, mussarela, tomate, azeitonas e orégano", category: "promo", subcategory: "pizza35" },
  { id: "promo2", name: "Portuguesa Mista (Promoção)", price: 35.00, ingredients: "Molho, presunto, catupiry, ovo, milho, ervilha, tomate, cebola, azeitonas e orégano", category: "promo", subcategory: "pizza35" },
];

const promo3990Names = ["Calabresa c/ Catupiry", "Calabresa Especial", "Brócolis c/ Catupiry", "Frango c/ Catupiry", "Caipira", "Dois Queijos"];
const promo3990: MenuItem[] = promo3990Names.map((name, i) => ({
  id: `promo39_${i}`, name: `${name} (Promoção)`, price: 39.90, category: "promo", subcategory: "pizza3990",
}));

const promo4490Names = ["Bauru c/ Calabresa", "Bauru c/ Brócolis", "Bauru c/ Provolone", "Bauru c/ Frango", "Bauru Especial"];
const promo4490: MenuItem[] = promo4490Names.map((name, i) => ({
  id: `promo44_${i}`, name: `${name} (Promoção)`, price: 44.90, category: "promo", subcategory: "pizza4490",
}));

const promoLanche25Names = ["X Salada", "X Egg", "X Calabresa", "X Burguer c/ Frango", "X Burguer c/ Lombo", "Burguer Salada"];
const promoLanche25: MenuItem[] = promoLanche25Names.map((name, i) => ({
  id: `promol25_${i}`, name, price: 10.00, ingredients: "Unidade R$10 ou 3 por R$25", category: "promo", subcategory: "lanche25",
}));

const promoLanche27Names = ["X Bacon", "X Dog", "Dog Simples", "Dog Bacon", "Dog Egg", "Dog Lombo", "Dog Salada"];
const promoLanche27: MenuItem[] = promoLanche27Names.map((name, i) => ({
  id: `promol27_${i}`, name, price: 10.00, ingredients: "Unidade R$10 ou 3 por R$27", category: "promo", subcategory: "lanche27",
}));

const promoLancheBaby: MenuItem[] = [
  { id: "promolb1", name: "Baby Hambúrguer (Promoção)", price: 15.00, ingredients: "Unidade R$15 ou 3 por R$35 (acompanha fritas)", category: "promo", subcategory: "lanchebaby" },
];

const Promotions = () => {
  const { totalItems } = useOrder();

  return (
    <div className="min-h-screen bg-gray-400 pb-24">
      <div className="bg-orange-500 px-4 pt-12 pb-6 flex items-center gap-3">
        <Link to="/" className="text-green-500">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-display font-black text-white">Promoções</h1>
        <Tag className="w-5 h-5 text-white ml-auto" />
      </div>

      <div className="px-4 mt-3">
        <p className="text-xs text-orange-900 bg-orange-200 rounded-lg px-3 py-2 font-medium">
          🎉 Somente para <strong>viagem (retirada)</strong>. Sem meio a meio nas pizzas promo.
        </p>
      </div>

      <div className="px-4 mt-4 space-y-6">
        <div>
          <h2 className="font-display font-bold text-foreground text-base mb-3">🍕 Pizzas R$35,00</h2>
          <div className="space-y-3">{promo35.map(item => <MenuItemCard key={item.id} item={item} />)}</div>
        </div>
        <div>
          <h2 className="font-display font-bold text-foreground text-base mb-3">🍕 Pizzas R$39,90</h2>
          <div className="space-y-3">{promo3990.map(item => <MenuItemCard key={item.id} item={item} />)}</div>
        </div>
        <div>
          <h2 className="font-display font-bold text-foreground text-base mb-3">🍕 Pizzas R$44,90</h2>
          <div className="space-y-3">{promo4490.map(item => <MenuItemCard key={item.id} item={item} />)}</div>
        </div>
        <div>
          <h2 className="font-display font-bold text-foreground text-base mb-3">🍔 Lanches — 3 por R$25</h2>
          <p className="text-xs text-orange-900 bg-orange-200 rounded-lg px-3 py-2 mb-2">Ou 1 por R$10 | Maionese e ketchup inclusos</p>
          <div className="space-y-3">{promoLanche25.map(item => <MenuItemCard key={item.id} item={item} />)}</div>
        </div>
        <div>
          <h2 className="font-display font-bold text-foreground text-base mb-3">🌭 Lanches — 3 por R$27</h2>
          <p className="text-xs text-orange-900 bg-orange-200 rounded-lg px-3 py-2 mb-2">Ou 1 por R$10 | Maionese e ketchup inclusos</p>
          <div className="space-y-3">{promoLanche27.map(item => <MenuItemCard key={item.id} item={item} />)}</div>
        </div>
        <div>
          <h2 className="font-display font-bold text-foreground text-base mb-3">👶 Baby — 3 por R$35</h2>
          <p className="text-xs text-orange-900 bg-orange-200 rounded-lg px-3 py-2 mb-2">Ou 1 por R$15 | Acompanha fritas</p>
          <div className="space-y-3">{promoLancheBaby.map(item => <MenuItemCard key={item.id} item={item} />)}</div>
        </div>
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

export default Promotions;
