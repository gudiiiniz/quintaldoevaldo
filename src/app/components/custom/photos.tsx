"use client";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import CustomCarousel from "./custom-carousel";

const indoor = [
  { src: "/images/indoor1.jpg", alt: "Ambiente 1",},
  { src: "/images/indoor2.jpg", alt: "Ambiente 2", },
  { src: "/images/indoor3.jpg", alt: "Ambiente 3",},
];

const outdoor = [
  { src: "/images/outdoor1.jpg", alt: "Ambiente 1",},
  { src: "/images/outdoor2.jpg", alt: "Ambiente 2", },
  { src: "/images/outdoor3.jpg", alt: "Ambiente 3",},
];

const pool = [
  { src: "/images/pool1.jpg", alt: "Ambiente 1",},
  { src: "/images/pool2.jpg", alt: "Ambiente 2", },
  { src: "/images/pool3.jpg", alt: "Ambiente 3",},
];

const photos = [
  {i:indoor, description:"Ambiente interno"},
  {i:outdoor, description:"Área da churrasqueira"},
  {i:pool, description:"Área da piscina"},
];

export default function Photos() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  return (
    <section id="fotos" className="bg-gray-100 py-20">
      <div className="w-full text-center mb-10 px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          📸 Fotos do Espaço
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Veja alguns dos nossos ambientes preparados com carinho para o seu evento especial.
        </p>
      </div>

      {/* Grid de carrosséis */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {
          photos.map(p => (
            <CustomCarousel images={p.i} key={p.i[0].src} description={p.description}/>
          ))
        }
      </div>
    </section>
  );
}
