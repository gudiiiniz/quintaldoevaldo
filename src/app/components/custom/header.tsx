import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Instagram, Mail, MessageCircle, Phone, TentTree } from "lucide-react";

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b">
            <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">

                {/* Logo */}
                <Link href="/" className="w-[176px] flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="Quintal do Evaldo"
                        width={80}
                        height={80}
                        className="object-cover scale-125"


                    />
                </Link>

                {/*Navegacao */}
                <nav className="hidden md:flex gap-16 text-lg font-semibold relative right-[6px]">
                    <Link href="#fotos" className="text-lg font-bold">Nossas Fotos</Link>
                    <Link href="#reservas" className="text-lg font-bold">Reservar</Link>
                    <Link href="#localizacao" className="text-lg font-bold">Localização</Link>
                    <Link href="#informacoes" className="text-lg font-bold">Informações</Link>
                </nav>

                {/*Botoes de Acao*/}
                <div className="flex items-center gap-4">
                    {/*Whatsapp*/}
                    <Link
                        href="https://wa.me/5511943421510"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 rounded-full flex items-center justify-center bg-blue-200 hover:bg-blue-300 transition"
                    >
                        <MessageCircle className="text-blue-600 h-6 w-6" />
                    </Link>

                    {/*Telefone*/}
                    <Link
                        href="tel:+5511943421510"
                        className="h-12 w-12 rounded-full flex items-center justify-center bg-blue-200 hover:bg-blue-300 transition md:hidden"
                    >
                        <Phone className="text-blue-600 h-6 w-6" />
                    </Link>

                    {/*Botao Insta*/}
                    <Link
                        href="https://instagram.com/quintalevaldo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 rounded-full flex items-center justify-center bg-blue-200 hover:bg-blue-300 transition"
                    >
                        <Instagram className="text-blue-600 h-6 w-6" />


                    </Link>
                </div>
            </div>
        </header>
    );
}