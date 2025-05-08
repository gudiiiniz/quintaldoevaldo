import { Mail, Phone, MapPin } from "lucide-react";

export default function Info() {
  return (
    <section id="informacoes" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          📞 Informações de Contato
        </h2>
        <p className="text-lg text-gray-600 mb-5 text-center">
          Fale com a gente para tirar dúvidas ou fazer sua reserva.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 md:p-12 text-gray-800 space-y-6">
          {/* Telefone */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <Phone className="text-blue-600 w-6 h-6" />
            </div>
            <span className="text-base sm:text-lg font-medium">
              +55 11 94342-1510
            </span>
          </div>

          {/* E-mail */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <Mail className="text-blue-600 w-6 h-6" />
            </div>
            <span className="text-base sm:text-lg font-medium">
              contato@quintaldoevaldo.com
            </span>
          </div>

          {/* Localização resumida */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <MapPin className="text-blue-600 w-6 h-6" />
            </div>
            <span className="text-base sm:text-lg font-medium">
              R. Eng. Villares da Silva, 180 – Itaquera, SP
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
