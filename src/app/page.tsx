import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Hero";
import EventList from "@/components/ui/events/EventList";
import MerchSection from "@/components/ui/merch/MerchSection";
import LoyaltySection from "@/components/ui/loyalty/LoyaltySection";
import Footer from "@/components/layout/Footer";
import { ConnectButton } from "@/components/wallet/ConnectButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col font-mono relative">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* GRID HORIZONTAL ORDENADA */}
      <section className="px-10 py-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Wallet */}
        <div className="rounded-2xl bg-gradient-to-b from-black/60 to-black border border-pink-500 p-8 shadow-[0_0_30px_rgba(217,38,169,0.4)] hover:shadow-[0_0_60px_rgba(57,255,20,0.6)] transition-all">
          <h2 className="text-2xl mb-6 text-pink-400 font-extrabold uppercase tracking-widest">Wallet</h2>
          <p className="text-gray-400 mb-6">Conéctate y entra al ecosistema Punk</p>
          <ConnectButton />
        </div>

        {/* Shows */}
        <div id="shows" className="rounded-2xl bg-gradient-to-b from-black/60 to-black border border-pink-500 p-8 shadow-[0_0_30px_rgba(217,38,169,0.4)] hover:shadow-[0_0_60px_rgba(57,255,20,0.6)] transition-all">
          <h2 className="text-2xl mb-6 text-pink-400 font-extrabold uppercase tracking-widest">Shows</h2>
          <EventList />
        </div>

        {/* Merch */}
        <div id="merch" className="rounded-2xl bg-gradient-to-b from-black/60 to-black border border-pink-500 p-8 shadow-[0_0_30px_rgba(217,38,169,0.4)] hover:shadow-[0_0_60px_rgba(57,255,20,0.6)] transition-all">
          <h2 className="text-2xl mb-6 text-pink-400 font-extrabold uppercase tracking-widest">Merch</h2>
          <MerchSection />
        </div>
      </section>

      {/* Punk Score */}
      <section id="loyalty" className="px-10 pb-20 max-w-7xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-b from-black/60 to-black border border-pink-500 p-10 shadow-[0_0_40px_rgba(217,38,169,0.4)] hover:shadow-[0_0_80px_rgba(57,255,20,0.6)] transition-all">
          <h2 className="text-3xl mb-6 text-pink-400 font-extrabold uppercase tracking-widest">Punk Score</h2>
          <LoyaltySection />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
