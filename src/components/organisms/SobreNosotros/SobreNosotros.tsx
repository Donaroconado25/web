export const SobreNosotros = () => {
  return (
    <section className="mt-20 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sobre nosotros
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Queremos estar conectados a ti y por eso es importante que nos
            conozcas un poco más.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 p-5 md:p-10 rounded-lg border">
            <h3 className="text-center font-bold text-2xl mb-5">
              Nuestra misión
            </h3>
            <span className="text-gray-600">
              En RD Quality Insurance , nos comprometemos a brindar tranquilidad
              y seguridad a nuestros clientes. Ofrecemos una amplia gama de
              seguros de vida, salud y seguros suplementarios diseñados para
              adaptarse a las necesidades de cada individuo y familia. Nuestro
              objetivo es ser un apoyo constante en los momentos más importantes
              y desafiantes de la vida, garantizando que nuestros clientes estén
              protegidos frente a cualquier imprevisto.
            </span>
          </div>
          <div className="bg-gray-50 p-5 md:p-10 rounded-lg border">
            <h3 className="text-center font-bold text-2xl mb-5">
              Nuestros valores
            </h3>
            <span className="text-gray-600">
              En RD Quality Insurance, nos guiamos por valores esenciales que
              nos definen. Nos comprometemos a brindar un servicio excepcional y
              adaptado a cada cliente, garantizando soluciones que se ajusten a
              sus necesidades. La transparencia y la honestidad son pilares de
              nuestra relación, generando confianza y seguridad. Apostamos por
              la innovación, mejorando continuamente nuestros productos y
              servicios. Además, nuestra empatía nos permite conectar de manera
              genuina con cada persona, ofreciendo un trato cercano y
              comprensivo en todo momento.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
