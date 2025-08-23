// components/merch/MerchCard.tsx
interface Merch {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function MerchCard({ merch }: { merch: Merch }) {
  return (
    <div className="p-4 bg-zinc-800 rounded-lg shadow-md text-center">
      <img
        src={merch.image}
        alt={merch.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{merch.name}</h3>
      <p className="text-pink-400 font-bold">{merch.price}</p>
      <button className="mt-4 w-full bg-pink-500 text-black py-2 rounded-lg hover:bg-pink-400">
        Comprar
      </button>
    </div>
  );
}
