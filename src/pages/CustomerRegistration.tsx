import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder, CustomerInfo } from "@/contexts/OrderContext";
import { User, Phone, MapPin } from "lucide-react";

const CustomerRegistration = () => {
  const { setCustomer } = useOrder();
  const navigate = useNavigate();
  const [form, setForm] = useState<CustomerInfo>({
    name: "",
    phone: "",
    street: "",
    number: "",
    neighborhood: "",
    cep: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name || !form.phone || !form.street || !form.number ||
      !form.neighborhood || !form.cep
    ) return;
    setCustomer(form);
    navigate("/menu/pizzas");
  };

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col">
      <div className="bg-red-600 px-6 pt-12 pb-8">
        <h1 className="text-2xl font-display font-black text-white">Seus Dados</h1>
        <p className="text-white/80 text-sm mt-1">Para enviar o pedido via WhatsApp</p>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 px-4 -mt-4 space-y-4">
        <div className="bg-white rounded-2xl shadow-card p-5 space-y-4">
          <div>
            <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
              <User className="w-4 h-4 text-primary" /> Nome Completo
            </label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="Seu nome completo"
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-primary" /> WhatsApp
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              placeholder="(14) 99999-9999"
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" /> Rua
            </label>
            <input
              type="text"
              value={form.street}
              onChange={e => setForm(f => ({ ...f, street: e.target.value }))}
              placeholder="Nome da rua"
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                Número
              </label>
              <input
                type="text"
                value={form.number}
                onChange={e => setForm(f => ({ ...f, number: e.target.value }))}
                placeholder="Número"
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                CEP
              </label>
              <input
                type="text"
                value={form.cep}
                onChange={e => setForm(f => ({ ...f, cep: e.target.value }))}
                placeholder="00000-000"
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" /> Bairro
            </label>
            <input
              type="text"
              value={form.neighborhood}
              onChange={e => setForm(f => ({ ...f, neighborhood: e.target.value }))}
              placeholder="Seu bairro"
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="w-full bg-gradient-hero text-primary-foreground font-bold text-base py-4 rounded-2xl shadow-float active:scale-[0.98] transition-transform"
          >
            Continuar para o Cardápio →
          </button>
        </div>
        <div className="flex gap-3 mt-6">
          <button type="submit" className="flex-1 py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 transition-colors">Confirmar</button>
          <button type="button" onClick={() => navigate(-1)} className="flex-1 py-3 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 transition-colors">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CustomerRegistration;
