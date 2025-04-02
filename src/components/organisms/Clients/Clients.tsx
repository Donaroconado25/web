"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Cliente1 from "../../../../public/resources/client1.png"
import Cliente2 from "../../../../public/resources/client2.jpeg"
import Cliente3 from "../../../../public/resources/client3.png"
import Cliente4 from "../../../../public/resources/client4.jpeg"
import Cliente5 from "../../../../public/resources/client5.jpeg"
import Cliente6 from "../../../../public/resources/client6.jpeg"
import Cliente7 from "../../../../public/resources/client7.png"
import Cliente8 from "../../../../public/resources/client8.png"

// Sample clients data - replace with your own
const clients = [
  {
    id: 1,
    name: "Cliente 1",
    logo: Cliente1,
  },
  {
    id: 2,
    name: "Cliente 2",
    logo: Cliente2,
  },
  {
    id: 3,
    name: "Cliente 3",
    logo: Cliente3,
  },
  {
    id: 4,
    name: "Cliente 4",
    logo: Cliente4,
  },
  {
    id: 5,
    name: "Cliente 5",
    logo: Cliente5,
  },
  {
    id: 6,
    name: "Cliente 6",
    logo: Cliente6,
  },
  {
    id: 7,
    name: "Cliente 7",
    logo: Cliente7,
  },
  {
    id: 8,
    name: "Cliente 8",
    logo: Cliente8,
  },
];

// Duplicate clients to create the infinite effect
const duplicatedClients = [...clients, ...clients];

export const Clients = () => {
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
          duration: 25, // Adjust speed here (seconds to complete one full cycle)
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
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t("home.clients.title") || "Nuestros Clientes"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("home.clients.description") ||
              "Empresas que confían en nuestros servicios"}
          </p>
        </div>

        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-12"
            animate={controls}
            initial={{ x: 0 }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-24 px-6 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
