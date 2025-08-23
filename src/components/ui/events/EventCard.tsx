// components/events/EventCard.tsx
interface Event {
  id: number;
  name: string;
  date: string;
  price: string;
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="p-4 bg-zinc-800 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{event.name}</h3>
      <p className="text-gray-400">{event.date}</p>
      <p className="text-pink-400 font-semibold">{event.price}</p>
      <button className="mt-4 w-full bg-pink-500 text-black py-2 rounded-lg hover:bg-pink-400">
        Comprar
      </button>
    </div>
  );
}
