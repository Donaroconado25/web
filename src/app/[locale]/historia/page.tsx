"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function HistoriaTrayectoria() {
  const t = useTranslations();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100 },
    },
  };

  const checkItemVariants = {
    hidden: { x: -20, opacity: 0 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visible: (i: any) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 text-sm font-medium"
          >
            {t("history.sub")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-red">
            {t("history.title")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 to-primary/80 rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-24"
          >
            {/* Primer bloque - Misión */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4">
                <motion.div
                  variants={iconVariants}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
                ></motion.div>
              </div>

              <Card className="w-full md:w-[80%] mx-auto overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-none bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 items-stretch">
                    <div className="bg-primary/10 p-6 md:p-8 flex items-center justify-center md:col-span-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-center"
                      >
                        <h3 className="text-2xl font-bold text-red">
                          {t("history.goal.title")}
                        </h3>
                      </motion.div>
                    </div>
                    <div className="p-6 md:p-8 md:col-span-3">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-slate-700 leading-relaxed"
                      >
                        {t("history.goal.description")}
                      </motion.p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Segundo bloque - Equipo */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4">
                <motion.div
                  variants={iconVariants}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
                ></motion.div>
              </div>

              <Card className="w-full md:w-[80%] mx-auto overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-none bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 items-stretch">
                    <div className="p-6 md:p-8 md:col-span-3 order-2 md:order-1">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-slate-700 leading-relaxed"
                      >
                        {t("history.team.description")}
                      </motion.p>

                      <ul className="mt-6 space-y-3">
                        {[
                          t("history.team.itemOne"),
                          t("history.team.itemTwo"),
                          t("history.team.itemThree"),
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            custom={i}
                            variants={checkItemVariants}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-6 md:p-8 flex items-center justify-center md:col-span-2 order-1 md:order-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-center"
                      >
                        <h3 className="text-2xl font-bold text-red">
                          {t("history.team.title")}
                        </h3>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tercer bloque - Compromiso */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4">
                <motion.div
                  variants={iconVariants}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
                ></motion.div>
              </div>

              <Card className="w-full md:w-[80%] mx-auto overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-none bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 items-stretch">
                    <div className="bg-primary/10 p-6 md:p-8 flex items-center justify-center md:col-span-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-center"
                      >
                        <h3 className="text-2xl font-bold text-red">
                          {t("history.commitment.title")}
                        </h3>
                      </motion.div>
                    </div>
                    <div className="p-6 md:p-8 md:col-span-3">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-slate-700 leading-relaxed"
                      >
                        {t("history.commitment.description")}
                      </motion.p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-primary to-red rounded-full">
            <button className="px-8 py-3 bg-white rounded-full text-primary font-medium hover:bg-transparent hover:text-white transition-colors duration-300">
              Conoce más sobre nosotros
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
