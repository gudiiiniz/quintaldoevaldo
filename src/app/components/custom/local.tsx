export default function Local() {

  const address = "R. Engenheiro Villares da Silva, 180 - Itaquera, São Paulo - SP";

  return (
    <section id="localizacao" className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Localização</h2>

        <p className="mb-6 text-center text-lg leading-relaxed">
          Estamos localizados na Rua Engenheiro Villares da Sila, 180 <br></br>
          Itaquera, São Paulo - SP<br></br>
          Venha visitar e conhecer o nosso espaço!
        </p>

        <div className="w-full h-64 md:h-86 border-1 border-gray-300 rounded-lg overflow-hidden mx-auto">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
            address
            )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}