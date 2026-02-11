import { Sparkles, Leaf, Rabbit, TreeDeciduous, Scale } from 'lucide-react';

const BRAND_VALUES = [
  {id: 1, title: "Cruelty Free", desc: "Approved as cruelty free under the Leaping Bunny Programme", icon: <Rabbit className="w-12 h-12" />, color: "text-[#f8b4c0]"},
  {id: 2, title: "Vegan", desc: "Over 90% of our products are vegan", icon: <Leaf className="w-12 h-12" />, color: "text-[#b5d1f8]"},
  {id: 3, title: "PureGlam", desc: "We elevate clean beauty with safe, tested, transparent products.", icon: <Sparkles className="w-12 h-12" />, color: "text-[#d8b5f8]"},
  {id: 4, title: "Sustainable Packaging", desc: "Our boxes are FSC-certified, made from responsibly sourced materials.", icon: <TreeDeciduous className="w-12 h-12" />, color: "text-[#c9e8a5]"},
  {id: 5, title: "Work Ethics", desc: "Our manufacturing facilities are 100% certified for work ethics credentials.", icon: <Scale className="w-12 h-12" />, color: "text-[#fce3a1]"}
];

export const BrandValues = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-16 md:mb-24 tracking-tighter text-slate-900 uppercase">Passion Meets Purpose</h2>
      
      {/* DESKTOP VIEW: Single horizontal row of 5 */}
      <div className="hidden md:grid grid-cols-5 gap-8 items-start">
        {BRAND_VALUES.map((v) => (
          <div key={v.id} className="flex flex-col items-center text-center space-y-6 group">
            <div className={`${v.color} transition-all duration-500 group-hover:scale-110`}>{v.icon}</div>
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-xl tracking-tight">{v.title}</h3>
              <p className="text-[14px] leading-relaxed text-slate-500 font-medium px-2">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE VIEW: 3-2 Grid Pattern */}
      <div className="md:hidden">
        {/* Row 1: 3 items */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-10 mb-12 items-start">
          {BRAND_VALUES.slice(0, 3).map((v) => (
            <div key={v.id} className="flex flex-col items-center text-center space-y-3">
              <div className={v.color}>{v.icon}</div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-[12px] leading-tight">{v.title}</h3>
                <p className="text-[9px] leading-tight text-slate-500 font-medium px-1">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Row 2: 2 items centered */}
        <div className="grid grid-cols-2 gap-x-6 max-w-[85%] mx-auto items-start">
          {BRAND_VALUES.slice(3, 5).map((v) => (
            <div key={v.id} className="flex flex-col items-center text-center space-y-3">
              <div className={v.color}>{v.icon}</div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-[12px] leading-tight">{v.id === 4 ? "FSC" : v.title}</h3>
                <p className="text-[9px] leading-tight text-slate-500 font-medium px-1">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);