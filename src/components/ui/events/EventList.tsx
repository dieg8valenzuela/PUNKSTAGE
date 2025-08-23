// components/events/EventList.tsx
import EventCard from "./EventCard";

const events = [
  { id: 1, name: "Simio Diamante en CDMX", date: "15 Sep 2025", price: "$500" },
  { id: 2, name: "Bestia Fest", date: "30 Sep 2025", price: "$650" },
];

export default function EventList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
