export default function Local() {
  const address = "R. Engenheiro Villares da Silva, 180 - Itaquera, São Paulo - SP";

  return (
    <section id="localizacao" className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">📍<br/> Nossa Localização</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Card com texto */}
          <div className="bg-white shadow-xl h-full rounded-2xl p-8 text-gray-800 space-y-6">
            <h3 className="text-2xl font-bold">Nos encontre aqui!</h3>
            <p className="text-lg leading-relaxed">
              Estamos localizados na <strong>Rua Engenheiro Villares da Silva, 180.</strong><br />
              Bairro Itaquera, São Paulo - SP
            </p>
            <p className="text-lg leading-relaxed">
              Venha nos visitar e conhecer um espaço acolhedor e cheio de natureza!
            </p>
          </div>

          {/* Mapa estilizado */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-300 h-[400px] w-full">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                address
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
