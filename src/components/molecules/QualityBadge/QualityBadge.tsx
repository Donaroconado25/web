"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const QualityBadge = () => {
  const t = useTranslations("home.qualityBadge");
  return (
    <section className="py-12">
      <motion.div
        className="w-full bg-gradient-to-r from-red/90 to-red p-8 shadow-lg text-white overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t("title")}
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6 leading-relaxed">{t("description")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full text-black bg-white backdrop-blur-sm transition-all">
              <span className="text-xl font-medium">{t("btnText")}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
