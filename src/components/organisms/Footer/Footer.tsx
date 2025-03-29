"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-gradient-to-b from-background to-primary/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl"></div>

        <motion.div
          className="absolute right-[10%] top-[15%] text-primary/10"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          <Shield className="w-40 h-40" />
        </motion.div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Contact card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-2xl shadow-xl border border-primary/10 overflow-hidden mb-16"
          >
            <div className="grid md:grid-cols-2">
              {/* Map side */}
              <div className="bg-muted h-[300px] md:h-auto relative overflow-hidden">
                {/* Replace with your actual map or image */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.1407806782545!2d-81.94916282488257!3d26.562951076780557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db41f16b9a89e3%3A0x4f3c8b7aee1e9e18!2s1222%20SE%2047th%20St%20Suite%20408%2C%20Cape%20Coral%2C%20FL%2033990%2C%20USA!5e0!3m2!1sen!2sus!4v1711654321"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>

                {/* Overlay with logo */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-background/90 backdrop-blur-sm p-6 rounded-xl flex items-center gap-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold">Seguros Confianza</span>
                  </div>
                </div>
              </div>

              {/* Contact info side */}
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Contáctanos</h3>

                <div className="space-y-5">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Llámanos</p>
                      <p className="text-muted-foreground">+1-877-231-1888</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Lun-Vie: 9:00 - 18:00
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Escríbenos</p>
                      <p className="text-muted-foreground">
                        rdqualityinsurance@gmail.com
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Respuesta en 24 horas
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Visítanos</p>
                      <p className="text-muted-foreground">
                        1222 SE 47th St Suite 408 Cape Coral,Fl 33990
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Horario de atención</p>
                      <p className="text-muted-foreground">
                        Lunes a Viernes: 9:00 - 18:00
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Sábados: 10:00 - 14:00
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className="pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            ©2025. Todos los derechos reservados.
          </p>
          <Link
            href="https://www.linkedin.com/in/brayan-yepesc/"
            className="text-sm text-muted-foreground"
          >
            Desarrollado por Brayan Yepes
          </Link>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Aviso Legal
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
