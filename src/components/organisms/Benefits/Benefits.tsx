import { Check, HeartHandshake, Shield, Lightbulb, Users } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: <HeartHandshake className="h-12 w-12" />,
      title: "Compromiso y atención personalizada",
      description:
        "Ofrecemos un servicio dedicado y adaptado a las necesidades específicas de cada cliente.",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Integridad y transparencia",
      description:
        "Actuamos con honestidad y claridad en todos nuestros procesos y comunicaciones.",
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Innovación en coberturas y tecnología",
      description:
        "Implementamos soluciones modernas y coberturas adaptadas al mundo actual.",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Empatía y cercanía con cada cliente",
      description:
        "Construimos relaciones cercanas basadas en la comprensión y el apoyo constante.",
    },
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubra las razones por las que somos la mejor opción para proteger
            lo que más valora.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative flex gap-8 items-start mb-16 last:mb-0"
            >
              {/* Left side with number and line */}
              <div className="hidden md:flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red text-primary-foreground text-2xl font-bold z-10">
                  {index + 1}
                </div>
                {index < benefits.length - 1 && (
                  <div className="w-1 bg-primary/20 h-full absolute top-16 left-8 -z-10"></div>
                )}
              </div>

              {/* Right side with content */}
              <div className="flex-1 bg-card hover:bg-card/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <h3 className="font-bold text-2xl">{benefit.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg ml-20">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
