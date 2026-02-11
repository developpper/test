import Image from 'next/image';

const CATEGORIES = [
  { name: "Face", image: "/curate.webp", color: "border-[#fce3a1]" },
  { name: "Lips", image: "/curate2.webp", color: "border-[#f8b4c0]" },
  { name: "Eyes", image: "/curate3.webp", color: "border-[#b5d1f8]" },
  { name: "Brushes", image: "/curate4.webp", color: "border-[#d8b5f8]" },
];

export const CategoryGrid = () => (
  <section className="py-24 container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight uppercase">Curate Your Look</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {CATEGORIES.map((cat) => (
        <div key={cat.name} className="group cursor-pointer">
          <div className={`relative aspect-[3/4] rounded-[2.5rem] border-[12px] ${cat.color} overflow-hidden shadow-lg transition-transform group-hover:scale-[1.03]`}>
            <Image src={cat.image} alt={cat.name} fill className="object-cover" />
          </div>
          <h3 className="mt-6 text-center text-2xl font-black uppercase text-[#ff4d6d]">{cat.name}</h3>
        </div>
      ))}
    </div>
  </section>
);