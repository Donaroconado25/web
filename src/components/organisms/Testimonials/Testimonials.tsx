"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

// Sample testimonials data - replace with your own
const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Cliente desde 2018",
    content:
      "El servicio personalizado que recibí superó todas mis expectativas. Siempre están disponibles cuando los necesito.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Cliente desde 2020",
    content:
      "La transparencia en todo el proceso fue impresionante. No hay sorpresas ni letra pequeña, todo es claro desde el principio.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Cliente desde 2019",
    content:
      "Su enfoque innovador hacia los seguros me ha ahorrado tiempo y dinero. La aplicación móvil es increíblemente útil.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Javier López",
    role: "Cliente desde 2021",
    content:
      "Me sentí comprendido desde la primera consulta. Su equipo realmente se preocupa por entender mis necesidades específicas.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
];

// Duplicate testimonials to create the infinite effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const controls = useAnimationControls();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startAnimation = () => {
      const containerWidth = containerRef.current?.scrollWidth || 0;
      const viewportWidth = containerRef.current?.offsetWidth || 0;

      // Calculate the distance to animate (container width minus viewport width)
      const distance = containerWidth - viewportWidth;

      // Start the animation
      controls.start({
        x: -distance,
        transition: {
          duration: 30, // Adjust speed here (seconds to complete one full cycle)
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      });
    };

    if (isInView) {
      // Small delay to ensure the component is fully rendered
      timeoutId = setTimeout(startAnimation, 500);
    }

    return () => {
      clearTimeout(timeoutId);
      controls.stop();
    };
  }, [controls, isInView]);

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubra por qué nuestros clientes confían en nosotros para proteger
            lo que más valoran.
          </p>
        </div>

        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={controls}
            initial={{ x: 0 }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[350px] bg-card rounded-2xl p-6 shadow-lg border border-primary/10"
              >
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-base italic mb-6 line-clamp-4">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    width={80}
                    height={80}
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
