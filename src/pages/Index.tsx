import { ShoppingCart, Pizza, UtensilsCrossed, Tag, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useOrder } from "@/contexts/OrderContext";
import heroPizza from "@/assets/hero-pizza.jpg";
import logoPizzaiolo from "@/assets/logo-pizzaiolo.png";

const navItems = [
  { label: "Pizzas", icon: Pizza, to: "/menu/pizzas" },
  { label: "Lanches", icon: UtensilsCrossed, to: "/menu/lanches" },
  { label: "Porções", icon: Pizza, to: "/menu/porcoes" },
  { label: "Promoções", icon: Tag, to: "/promocoes" },
];

const schedule = [
  { day: "Segunda", open: false },
  { day: "Terça", open: false },
  { day: "Quarta", open: false },
  { day: "Quinta", open: false },
  { day: "Sexta", open: true, hours: "18:00 — 23:00" },
  { day: "Sábado", open: true, hours: "18:00 — 23:00" },
  { day: "Domingo", open: true, hours: "18:00 — 23:00" },
];

const Index = () => {
  const { totalItems } = useOrder();

  return (
    <div className="min-h-screen bg-gray-400 pb-24">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <img
          src={heroPizza}
          alt="Pizza artesanal da Bella Flórida"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-700 shadow-card flex items-center justify-center mb-4 border-4 border-primary/20 overflow-hidden">
              <img
                src={logoPizzaiolo}
                alt="Logo pizzaiolo"
                className="object-contain w-full h-full"
                onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.innerHTML = '<span class=\"text-3xl font-display font-black text-primary\">BF</span>'; }}
              />
            </div>
          <h1 className="text-3xl md:text-4xl font-display font-black text-primary-foreground drop-shadow-lg">
            Bella Flórida
          </h1>
          <p className="text-primary-foreground/80 text-sm mt-1 font-medium tracking-wide">
            Pizzaria e Lanchonete
          </p>
          <Link
            to="/cadastro"
            className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-3.5 rounded-full shadow-float animate-pulse-glow transition-transform active:scale-95"
          >
            Fazer Pedido 🍕
          </Link>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="px-4 -mt-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {navItems.map(({ label, icon: Icon, to }) => (
            <Link
              key={label}
              to={to}
              className="bg-red-600 rounded-xl shadow-card p-6 flex flex-col items-center gap-2 active:scale-95 transition-transform w-full min-h-[90px]"
            >
              <Icon className="w-7 h-7 text-white" />
              <span className="text-base font-semibold text-white">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Opening Hours */}
      <section className="px-4 mt-8">
        <div className="bg-green-600 text-white rounded-2xl shadow-card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-white" />
            <h2 className="text-lg font-display font-bold text-white">Horário de Funcionamento</h2>
          </div>
          <div className="space-y-2">
            {schedule.map(({ day, open, hours }) => (
              <div key={day} className="flex items-center justify-between py-1.5 border-b border-white/30 last:border-0">
                <span className="text-sm font-medium text-white">{day}</span>
                {open ? (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white bg-white/20 px-2 py-0.5 rounded-full">ABERTO</span>
                    <span className="text-xs text-white">{hours}</span>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-white bg-red-600 px-2 py-0.5 rounded-full">FECHADO</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address + Instagram side by side */}
      <section className="px-4 mt-6">
        <div className="bg-red-600 text-white rounded-2xl shadow-card p-5 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-white" />
              <h2 className="text-lg font-display font-bold text-white">Endereço</h2>
            </div>
            <p className="text-sm text-white leading-relaxed">
              R. Mário Bueno Salles, 21 — Quadra 2<br />
              Jardim Florida, Bauru — SP<br />
              CEP 17024-630
            </p>
            <a
              href="https://maps.app.goo.gl/pnz3R5TFQAXSFMTz8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-semibold text-white underline underline-offset-4"
            >
              Abrir no Google Maps →
            </a>
          </div>
          <div className="flex-1 min-w-0 flex md:justify-end items-center md:items-start">
            <a
              href="https://www.instagram.com/pizzaria_bellaflorida/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-pink-600 transition-colors"
              aria-label="Instagram da Pizzaria Bella Florida"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="text-base font-semibold">@pizzaria_bellaflorida</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Cart */}
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

export default Index;
