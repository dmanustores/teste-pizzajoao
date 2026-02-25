import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2, MessageCircle, MapPin, AlertCircle } from "lucide-react";
import { useOrder } from "@/contexts/OrderContext";
import { formatPrice as fp } from "@/data/menuData";

const CartPage = () => {
  const {
    cart, customer, totalItems, totalPrice,
    updateQuantity, removeFromCart, clearCart,
    orderType, setOrderType, paymentMethod, setPaymentMethod,
    deliveryAddress, setDeliveryAddress, sendWhatsApp,
    setCustomer,
  } = useOrder();
  const navigate = useNavigate();

  // customer fields
  const [name, setName] = useState(customer?.name || "");
  const [phone, setPhone] = useState(customer?.phone || "");

  // split address fields for delivery form
  const [street, setStreet] = useState(customer?.street || "");
  const [number, setNumber] = useState(customer?.number || "");
  const [neighborhoodAddress, setNeighborhoodAddress] = useState(customer?.neighborhood || "");
  const [cep, setCep] = useState(customer?.cep || "");
  const [complement, setComplement] = useState("");

  // validation error message
  const [validationError, setValidationError] = useState("");

  // assemble string whenever any part changes
  React.useEffect(() => {
    let addr = "";
    if (street) addr += street;
    if (number) addr += addr ? `, ${number}` : number;
    if (neighborhoodAddress) addr += addr ? ` - ${neighborhoodAddress}` : neighborhoodAddress;
    if (cep) addr += addr ? ` - CEP ${cep}` : `CEP ${cep}`;
    if (complement) addr += addr ? ` (${complement})` : complement;
    setDeliveryAddress(addr);
  }, [street, number, neighborhoodAddress, cep, complement, setDeliveryAddress]);

  // Ref para controlar disparo do envio
  const shouldSendWhatsApp = useRef(false);

  const handleSend = () => {
    // Validate all required fields
    const errors: string[] = [];
    if (!name.trim()) errors.push("Nome");
    if (!phone.trim()) errors.push("Celular");
    if (!street.trim()) errors.push("Rua");
    if (!number.trim()) errors.push("Número");
    if (!neighborhoodAddress.trim()) errors.push("Bairro");
    if (!cep.trim()) errors.push("CEP");

    if (errors.length > 0) {
      setValidationError(`Campos obrigatórios faltando: ${errors.join(", ")}`);
      return;
    }

    setValidationError("");
    setCustomer({
      name,
      phone,
      street,
      number,
      neighborhood: neighborhoodAddress,
      cep,
    });
    shouldSendWhatsApp.current = true;
  };

  // Dispara o envio do WhatsApp quando o contexto do cliente for atualizado
  useEffect(() => {
    if (
      shouldSendWhatsApp.current &&
      customer &&
      customer.name === name &&
      customer.phone === phone &&
      customer.street === street &&
      customer.number === number &&
      customer.neighborhood === neighborhoodAddress &&
      customer.cep === cep
    ) {
      shouldSendWhatsApp.current = false;
      sendWhatsApp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer]);

  return (
    <div className="min-h-screen bg-gray-500 pb-32">
      <div className="bg-primary px-4 pt-12 pb-6 flex items-center gap-3">
        <Link to="/" className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-display font-black text-white">Meu Pedido</h1>
        {/* Botão de limpar carrinho (lixeira) */}
        <button onClick={clearCart} className="ml-auto text-white/80">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {cart.map((cartItem) => {
          const { item, quantity, halves } = cartItem;
          const displayName = halves
            ? `Meia-meia: ${halves[0].name} / ${halves[1].name}`
            : item.name;
          const isPromo = item.promo;
          return (
            <div key={item.id} className="bg-white border border-border rounded-xl shadow-card p-4 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                {halves && halves.length === 2 ? (
                  <div>
                    <h3 className="font-semibold text-sm text-primary">Meia-meia 🍕</h3>
                    <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
                      <p>— {halves[0].name}</p>
                      <p>— {halves[1].name}</p>
                    </div>
                    <p className={isPromo ? "text-secondary font-bold text-sm mt-2" : "text-primary font-bold text-sm mt-2"}>{fp(item.price * quantity)}</p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-semibold text-sm text-foreground truncate">{item.name}</h3>
                    <p className={isPromo ? "text-secondary font-bold text-sm mt-1" : "text-primary font-bold text-sm mt-1"}>{fp(item.price * quantity)}</p>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center"
                >
                  <Minus className="w-4 h-4 text-white" />
                </button>
                <span className="text-sm font-bold text-foreground w-6 text-center">{quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, quantity + 1)}
                  className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center"
                >
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order Type */}
      <div className="px-4 mt-6">
        <div className="bg-card rounded-2xl shadow-card p-5 space-y-4">
          <h3 className="font-display font-bold text-foreground text-base">Dados do Cliente</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground block mb-2">Nome *</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground block mb-2">Celular *</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="(XX) 9XXXX-XXXX"
                className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Order Type */}
      <div className="px-4 mt-4">
        <div className="bg-card rounded-2xl shadow-card p-5 space-y-4">
          <h3 className="font-display font-bold text-foreground text-base">Tipo de Pedido</h3>
          <div className="flex gap-3">
            {(["delivery", "takeout"] as const).map(type => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-colors border border-border ${
                  orderType === type
                    ? "bg-primary text-white border-primary"
                    : "bg-muted text-foreground"
                }`}
              >
                {type === "delivery" ? "🛵 Entrega" : "🏪 Retirada"}
              </button>
            ))}
          </div>

          {orderType === "delivery" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2">Rua</label>
                  <input
                    type="text"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    placeholder="Nome da rua"
                    className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2">Número</label>
                  <input
                    type="text"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    placeholder="Número"
                    className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2">Bairro</label>
                  <input
                    type="text"
                    value={neighborhoodAddress}
                    onChange={e => setNeighborhoodAddress(e.target.value)}
                    placeholder="Bairro"
                    className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2">CEP</label>
                  <input
                    type="text"
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    placeholder="00000-000"
                    className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2">Complemento (opcional)</label>
                <input
                  type="text"
                  value={complement}
                  onChange={e => setComplement(e.target.value)}
                  placeholder="Apto, casa, etc."
                  className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment */}
      <div className="px-4 mt-4">
        <div className="bg-card rounded-2xl shadow-card p-5 space-y-4">
          <h3 className="font-display font-bold text-foreground text-base">Forma de Pagamento</h3>
          <div className="grid grid-cols-3 gap-2">
            {([
              { key: "card" as const, label: "💳 Cartão" },
              { key: "pix" as const, label: "📱 Pix" },
              { key: "cash" as const, label: "💵 Dinheiro" },
            ]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setPaymentMethod(key)}
                className={`py-3 rounded-xl font-semibold text-xs transition-colors border ${
                  paymentMethod === key
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-muted text-foreground border-border"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Total & Send */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 space-y-3 z-50">
        {validationError && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{validationError}</p>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{totalItems} {totalItems === 1 ? "item" : "itens"}</span>
          <span className="text-xl font-display font-black text-foreground">{fp(totalPrice)}</span>
        </div>
        {/* Botão de envio do pedido via WhatsApp */}
        <button
          onClick={handleSend}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-base py-4 rounded-2xl shadow-float flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          Enviar Pedido via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default CartPage;
