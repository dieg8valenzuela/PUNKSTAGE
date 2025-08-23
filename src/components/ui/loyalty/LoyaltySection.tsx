// components/loyalty/LoyaltySection.tsx

const rewards = [
  { id: 1, title: "Descuento 10% en Merch", points: 100 },
  { id: 2, title: "Acceso a Prueba de Sonido", points: 500 },
  { id: 3, title: "Meet & Greet con la banda", points: 1000 },
];

export default function LoyaltySection() {
  return (
    <div className="p-6 bg-zinc-800 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold mb-4 text-pink-500">Tu Punk Score</h3>
      <p className="mb-6">Puntos acumulados: <span className="font-semibold">250</span></p>
      
      <h4 className="text-lg font-bold mb-2">Recompensas Disponibles</h4>
      <ul className="space-y-3">
        {rewards.map((reward) => (
          <li key={reward.id} className="bg-zinc-900 p-3 rounded-md flex justify-between items-center">
            <span>{reward.title}</span>
            <span className="text-pink-400">{reward.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
