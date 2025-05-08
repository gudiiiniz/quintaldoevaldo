export default function About() {
  return (
    <section id="about" className="py-5 sm:py-10 bg-gray-100">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-gray-800 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 flex items-center justify-center gap-2">
            🏡 <br/>Sobre o Quintal do Evaldo
          </h2>

          <p className="text-lg leading-relaxed text-justify">
            No <strong>Quintal do Evaldo</strong>, você encontra o melhor ambiente para celebrar momentos inesquecíveis
            com amigos e família. Nossa missão é oferecer um espaço acolhedor, versátil e divertido — perfeito para
            aniversários, confraternizações e eventos corporativos.
          </p>

          <p className="text-lg leading-relaxed text-justify">
            O local conta com uma excelente <strong>área externa com churrasqueira</strong>, além de uma
            <strong> piscina incrível</strong> para tornar sua experiência ainda mais completa. Tudo isso em um ambiente
            tranquilo, arborizado e com fácil acesso no coração de <strong>Itaquera - São Paulo</strong>.
          </p>

          <p className="text-xl font-semibold text-center text-blue-600 pt-2">
            Venha nos visitar e descubra por que somos o quintal preferido da zona leste!
          </p>
        </div>
      </div>
    </section>
  );
}
