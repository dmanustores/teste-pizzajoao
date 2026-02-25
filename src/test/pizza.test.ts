import { describe, it, expect } from "vitest";
import { createHalfPizza, isHalfAllowed } from "@/lib/pizzaUtil";
import {
  pizzasTradicionais,
  pizzasEspeciais,
  pizzasDoces,
  brotos,
} from "@/data/menuData";

// helper mimicking cart merge behaviour, supports halves metadata
function addToCart(cart: any[], item: any, halves?: [any, any]) {
  const existing = cart.find(c => c.item.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    const entry: any = { item, quantity: 1 };
    if (halves) entry.halves = halves;
    cart.push(entry);
  }
}

describe("pizza utility", () => {
  const first = pizzasTradicionais[0];
  const second = pizzasEspeciais[0];

  it("produces the same id regardless of order and uses max price", () => {
    const a = createHalfPizza(first, second);
    const b = createHalfPizza(second, first);
    expect(a.id).toBe(b.id);
    expect(a.name).toBe(`${first.name} / ${second.name}`);
    expect(a.price).toBe(Math.max(first.price, second.price));
  });

  it("does not allow brotos or promo items", () => {
    const broto = brotos[0];
    expect(isHalfAllowed(broto)).toBe(false);
  });

  // pick a fake promo item for test
  it("refuses promo pizzas", () => {
    const promo: any = { id: "p1", category: "promo", subcategory: "pizza35", name: "Promo", price: 10 };
    expect(isHalfAllowed(promo)).toBe(false);
  });

  it("allows normal pizzas", () => {
    expect(isHalfAllowed(first)).toBe(true);
    expect(isHalfAllowed(second)).toBe(true);
  });

  it("cart merging works for half pizzas and preserves halves metadata", () => {
    const cart: any[] = [];
    const h1 = createHalfPizza(first, second);
    const h2 = createHalfPizza(second, first);
    addToCart(cart, h1, [first, second]);
    addToCart(cart, h2, [second, first]);

    expect(cart).toHaveLength(1);
    expect(cart[0].quantity).toBe(2);
    expect(cart[0].halves).toEqual([first, second]);
  });

  it("does not merge distinct halves", () => {
    const cart: any[] = [];
    const h1 = createHalfPizza(first, second);
    const third = pizzasTradicionais[1];
    const h3 = createHalfPizza(first, third);
    addToCart(cart, h1);
    addToCart(cart, h3);

    expect(cart).toHaveLength(2);
    expect(cart.map(c => c.quantity)).toEqual([1, 1]);
  });
});
