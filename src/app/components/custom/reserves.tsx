"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";

export default function Reserves() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const phone = "5511953115522";

  const formattedDate = date ? date.toLocaleDateString("pt-BR") : "";
  const whatsappLink = date
    ? `https://wa.me/${phone}?text=${encodeURIComponent(
        `Olá, eu gostaria de checar a disponibilidade para reserva no dia ${formattedDate}.`
      )}`
    : "#";

  return (
    <section id="reservas" className="py-16 container mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-5 text-center">Reservar</h2>
      <Calendar
        locale={ptBR}
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border mb-4"
      />
      {date && (
        <p className="mb-4 text-lg text-center">
          Data selecionada:{" "}
          <span className="font-medium">{formattedDate}</span>
        </p>
      )}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-6 py-3 text-white rounded-lg transition ${
          date ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        onClick={(e) => {
          if (!date) e.preventDefault();
        }}
      >
        Enviar no WhatsApp
      </a>
    </section>
  );
}