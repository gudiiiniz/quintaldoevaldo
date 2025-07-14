import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { MessageCircle, Home, MapPin, Users } from "lucide-react";

export default function Reserves() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const phone = "5511943421510";

  const formattedDate = date ? date.toLocaleDateString("pt-BR") : "";
  const whatsappLink = date
    ? `https://wa.me/${phone}?text=${encodeURIComponent(
        `Olá, eu gostaria de checar a disponibilidade para reserva no dia ${formattedDate}.`
      )}`
    : "#";

  return (
    <section id="reservas" className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-gray-800">
          📅 Faça sua Reserva
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Selecione uma data no calendário abaixo e envie sua solicitação de reserva via WhatsApp.
          Responderemos o mais rápido possível para confirmar!
        </p>

        {/* Destaques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-gray-700">
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
            <Home className="w-8 h-8 text-green-800" />
            <span className="font-medium">Ambiente familiar e aconchegante</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
            <MapPin className="w-8 h-8 text-green-800" />
            <span className="font-medium">Fácil acesso em Itaquera, SP</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
            <Users className="w-8 h-8 text-green-800" />
            <span className="font-medium">Ideal para encontros e eventos</span>
          </div>
        </div>

        {/* Card de reserva */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center space-y-6">
          <Calendar
            locale={ptBR}
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-fit max-w-md"
          />

          {date && (
            <p className="text-lg text-center text-gray-700">
              Data selecionada: <span className="font-semibold">{formattedDate}</span>
            </p>
          )}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full max-w-md flex items-center justify-center gap-2 px-6 py-3 text-white text-lg font-medium rounded-xl transition-all duration-300 ${
              date
                ? "bg-green-800 hover:bg-green-800 shadow-md"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (!date) e.preventDefault();
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Enviar no WhatsApp
          </a>

          <p className="text-sm text-gray-500 text-center">
            Reservas estão sujeitas à confirmação. Você receberá uma resposta pelo WhatsApp após o envio.
          </p>
        </div>
      </div>
    </section>
  );
}
