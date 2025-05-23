"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="relative mt-40 pb-10 overflow-hidden bg-gradient-to-b from-background to-primary/10">
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
              </div>

              {/* Contact info side */}
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">
                  {t("home.contact.callme")}
                </h3>

                <div className="space-y-5">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="bg-red p-3 rounded-full text-primary">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{t("home.contact.callme")}</p>
                      <a
                        href="tel:+18772311888"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1-877-231-1888
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="bg-red p-3 rounded-full text-primary">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{t("home.contact.writeme")}</p>
                      <a
                        href="mailto:info@rdqualityincinsurance.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@rdqualityincinsurance.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="bg-red p-3 rounded-full text-primary">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{t("home.contact.visitme")}</p>
                      <p className="text-muted-foreground">
                        1222 SE 47th St Suite 408 Cape Coral,Fl 33904
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
                    <div className="bg-red p-3 rounded-full text-primary">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {t("home.contact.timeTitle")}
                      </p>
                      <p className="text-muted-foreground">
                        {t("home.contact.time")}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar with copyright, legal links, and social media */}
        <div className="pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {t("home.contact.rights")}
          </span>

          {/* Social media links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.tiktok.com/@rd.quality.insurance?_t=ZS-8vv6YuwMLgO&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red p-2 rounded-full text-white hover:bg-red/80 transition-colors"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-brand-tiktok"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/rdqualityinsurance?igsh=Y2FrNTVidmtvenM0&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red p-2 rounded-full text-white hover:bg-red/80 transition-colors"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Instagram className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/share/17ZtLvMdDP/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red p-2 rounded-full text-white hover:bg-red/80 transition-colors"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Facebook className="h-5 w-5" />
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              {t("home.contact.privacyPolicy")}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              {t("home.contact.termsAndConditions")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
