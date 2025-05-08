import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";


const photos = [
  { src: "/images/foto1.jpg", alt: "Ambiente 1", desc: "Salão decorado para festas" },
  { src: "/images/foto2.jpg", alt: "Ambiente 2", desc: "Nossa área externa com jardim" },
  { src: "/images/foto3.jpg", alt: "Ambiente 3", desc: "Espaço gourmet equipado" },
];

export default function Photos() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
 
  return (
    <section id="fotos" className="bg-gray-100 py-16">
    <div className="text-3xl font-bold w-full text-center mb-4">
      <p>
        Fotos
      </p>
    </div>

    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs flex items-center justify-center mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {photos.map((p, index) => (
          <CarouselItem className="min-w-64" key={index}>
            <div className="relative w-full aspect-[3/4]">
            <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="rounded-lg object-cover w-full h-full"
                />
            </div>
            <p className="flex justify-center">{p.desc} </p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex"/>
    </Carousel>
    </section>
  )

}