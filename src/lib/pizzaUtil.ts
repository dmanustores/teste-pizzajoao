import { MenuItem } from "@/data/menuData";

// create a combined item representing a half-and-half pizza
export function createHalfPizza(a: MenuItem, b: MenuItem): MenuItem {
  const pairIds = [a.id, b.id].sort();
  return {
    id: pairIds.join("-"),
    name: `${a.name} / ${b.name}`,
    price: Math.max(a.price, b.price), // use the most expensive flavor
    category: "pizza",
    subcategory: a.subcategory,
  };
}

// determine if an item may be used as half of a pizza
export function isHalfAllowed(item: MenuItem): boolean {
  // only non-promo, non-broto pizzas
  return (
    item.category === "pizza" &&
    item.subcategory !== "brotos" &&
    item.category !== "promo"
  );
}
