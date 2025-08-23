export default function Hero() {
  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center bg-black overflow-hidden">
      {/* Fondo rejilla estilo Walrus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90"></div>

      {/* Texto central */}
      <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-widest text-white font-['Press_Start_2P'] drop-shadow-[0_0_25px_#d926a9]">
        Own Your <span className="text-pink-500">Stage</span>
      </h1>

      {/* Subtexto */}
      <p className="relative z-10 mt-8 text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
        Tickets, merch y recompensas directas de tus artistas favoritos. <br />
        Sin fraudes. Sin intermediarios. Solo Punk.
      </p>

      {/* Botón CTA */}
      <div className="relative z-10 mt-12">
        <button className="px-10 py-4 text-lg font-bold text-black bg-pink-500 rounded-full hover:bg-green-400 transition-all transform hover:scale-110 shadow-[0_0_25px_#d926a9] hover:shadow-[0_0_40px_#39ff14]">
          Comprar Boletos
        </button>
      </div>
    </section>
  );
}
