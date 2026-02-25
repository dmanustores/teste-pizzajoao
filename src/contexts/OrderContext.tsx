import React, { createContext, useContext, useState, useCallback } from "react";
import { MenuItem, formatPrice } from "@/data/menuData";

export interface CartItem {
  item: MenuItem;
  quantity: number;
  observation?: string;
  halves?: [MenuItem, MenuItem]; // for meia-pizza items
}

export interface CustomerInfo {
  name: string;
  phone: string;
  street: string;
  number: string;
  neighborhood: string;
  cep: string;
}

export type OrderType = "delivery" | "takeout";
export type PaymentMethod = "card" | "pix" | "cash";

interface OrderContextType {
  cart: CartItem[];
  customer: CustomerInfo | null;
  orderType: OrderType;
  paymentMethod: PaymentMethod;
  deliveryAddress: string;
  addToCart: (item: MenuItem, halves?: [MenuItem, MenuItem]) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, qty: number) => void;
  clearCart: () => void;
  setCustomer: (info: CustomerInfo) => void;
  setOrderType: (type: OrderType) => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  setDeliveryAddress: (addr: string) => void;
  totalItems: number;
  totalPrice: number;
  sendWhatsApp: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customer, setCustomer] = useState<CustomerInfo | null>(null);
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const addToCart = useCallback((item: MenuItem, halves?: [MenuItem, MenuItem]) => {
    setCart(prev => {
      const existing = prev.find(c => c.item.id === item.id);
      if (existing) {
        // preserve existing halves if not providing new ones
        return prev.map(c => 
          c.item.id === item.id 
            ? { ...c, quantity: c.quantity + 1, halves: c.halves || halves } 
            : c
        );
      }
      // include halves info if provided
      const cartItem: CartItem = { item, quantity: 1 };
      if (halves) cartItem.halves = halves;
      return [...prev, cartItem];
    });
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCart(prev => prev.filter(c => c.item.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: string, qty: number) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(c => c.item.id !== itemId));
    } else {
      setCart(prev => prev.map(c => 
        c.item.id === itemId 
          ? { ...c, quantity: qty }
          : c
      ));
    }
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const totalItems = cart.reduce((sum, c) => sum + c.quantity, 0);
  const totalPrice = cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);

  const sendWhatsApp = useCallback(() => {
    if (!customer) return;

    const paymentLabels = { card: "Cartão", pix: "Pix", cash: "Dinheiro" };
    const orderTypeLabel = orderType === "delivery" ? "Entrega" : "Retirada no local";

    let msg = `*PEDIDO — BELLA FLÓRIDA*\n\n`;
    msg += `*Cliente:* ${customer.name}\n`;
    msg += `*WhatsApp:* ${customer.phone}\n`;
    msg += `\n`;
    msg += `*Tipo:* ${orderTypeLabel}\n`;
    if (orderType === "delivery") {
      const addr = deliveryAddress || `${customer.street}, ${customer.number}, ${customer.neighborhood}, CEP ${customer.cep}`;
      msg += `*Endereço:* ${addr}\n`;
    }
    msg += `*Pagamento:* ${paymentLabels[paymentMethod]}\n\n`;
    msg += `*Itens do Pedido:*\n`;
    cart.forEach(c => {
      if (c.halves) {
        msg += `- ${c.quantity}x Meia-meia (${c.halves[0].name} / ${c.halves[1].name}) — ${formatPrice(c.item.price * c.quantity)}\n`;
      } else {
        msg += `- ${c.quantity}x ${c.item.name} — ${formatPrice(c.item.price * c.quantity)}\n`;
      }
    });
    msg += `\n*TOTAL: ${formatPrice(totalPrice)}*\n`;
    msg += `\nObrigado!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5514996158430?text=${encoded}`, '_blank');
  }, [cart, customer, orderType, paymentMethod, deliveryAddress, totalPrice]);

  return (
    <OrderContext.Provider value={{
      cart, customer, orderType, paymentMethod, deliveryAddress,
      addToCart, removeFromCart, updateQuantity, clearCart,
      setCustomer, setOrderType, setPaymentMethod, setDeliveryAddress,
      totalItems, totalPrice, sendWhatsApp,
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be inside OrderProvider");
  return ctx;
};
