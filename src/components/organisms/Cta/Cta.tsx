"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Shield, Umbrella, Heart, Home, Car, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Cta = () => {
  const [hovering, setHovering] = useState(false);
  const controls = useAnimation();
  const iconControls = useAnimation();

  // Animate the shield on mount
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [1, 1.05, 1],
        transition: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        },
      });
    };

    sequence();
  }, [controls]);

  // Animate the floating icons
  useEffect(() => {
    const floatSequence = async () => {
      await iconControls.start({
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        },
      });
    };

    floatSequence();
  }, [iconControls]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient with animated pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-card rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
          <div className="grid md:grid-cols-2">
            {/* Left side - Visual */}
            <div className="bg-primary/10 p-10 flex items-center justify-center relative">
              <motion.div className="relative" animate={controls}>
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                <Shield className="h-40 w-40 text-primary relative z-10" />

                {/* Floating icons around the shield */}
                <motion.div
                  className="absolute top-0 left-0 transform -translate-x-full -translate-y-1/2"
                  animate={iconControls}
                >
                  <Home className="h-10 w-10 text-primary/70" />
                </motion.div>

                <motion.div
                  className="absolute top-1/4 right-0 transform translate-x-full"
                  animate={iconControls}
                  transition={{ delay: 0.5 }}
                >
                  <Car className="h-10 w-10 text-primary/70" />
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 transform -translate-x-3/4 translate-y-1/2"
                  animate={iconControls}
                  transition={{ delay: 1 }}
                >
                  <Heart className="h-10 w-10 text-primary/70" />
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 right-0 transform translate-x-3/4"
                  animate={iconControls}
                  transition={{ delay: 1.5 }}
                >
                  <Umbrella className="h-10 w-10 text-primary/70" />
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Content */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Protección que se <span className="text-primary">adapta</span> a
                tu vida
              </h2>

              <p className="text-muted-foreground text-lg mb-8">
                No esperes a que ocurra lo inesperado. Asegura hoy lo que más
                valoras con un plan personalizado que evoluciona contigo.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Cobertura personalizada a tus necesidades",
                  "Atención 24/7 cuando más lo necesitas",
                  "Proceso de reclamación simple y rápido",
                  "App móvil para gestionar todo desde cualquier lugar",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full text-lg font-medium py-6 bg-red"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                  >
                    <motion.span
                      animate={hovering ? { x: [0, -4, 0] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      Obtener mi cotización gratuita
                    </motion.span>
                    <motion.span
                      animate={hovering ? { x: [0, 4, 0] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>

                <p className="text-center text-sm text-muted-foreground">
                  Sin compromiso • Respuesta en menos de 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
