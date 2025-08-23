// components/merch/MerchSection.tsx
import MerchCard from "./MerchCard";

const merchItems = [
  { id: 1, name: "Playera Punk Stage", price: "$350", image: "/images/shirt.jpg" },
  { id: 2, name: "Vinil Edición Limitada", price: "$800", image: "/images/vinyl.jpg" },
  { id: 3, name: "Poster Firmado", price: "$250", image: "/images/poster.jpg" },
];

export default function MerchSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {merchItems.map((item) => (
        <MerchCard key={item.id} merch={item} />
      ))}
    </div>
  );
}
