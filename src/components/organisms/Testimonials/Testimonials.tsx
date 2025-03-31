"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

// Sample testimonials data - replace with your own
const testimonials = [
  {
    id: 1,
    name: "María González",
    content: "home.testimonials.testimonialOne.content",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    content: "home.testimonials.testimonialTwo.content",
  },
  {
    id: 3,
    name: "Ana Martínez",
    content: "home.testimonials.testimonialThree.content",
  },
  {
    id: 4,
    name: "Javier López",
    content: "home.testimonials.testimonialFour.content",
  },
];

// Duplicate testimonials to create the infinite effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const controls = useAnimationControls();
  const t = useTranslations();

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
            {t("home.testimonials.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("home.testimonials.description")}
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
                <Quote className="h-8 w-8 text-red mb-4" />
                <p className="text-base italic mb-6 line-clamp-4">
                  {t(testimonial.content)}
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
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
