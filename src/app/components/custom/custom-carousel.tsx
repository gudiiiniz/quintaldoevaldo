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

interface Props {
    images: { src: string; alt: string }[];
    description: string;
}

export default function CustomCarousel({ images, description }: Props) {

    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {images.map((i, index) => (
                    <CarouselItem className="min-w-64" key={index}>
                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                            <Image
                                src={i.src}
                                alt={i.alt}
                                fill
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </CarouselItem>       
                ))}
            </CarouselContent>
            <p className="text-center text-gray-700 text-sm mt-3">{description}</p>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
    );
}