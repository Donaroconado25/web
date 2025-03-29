import {
  Benefits,
  Bubble,
  Cta,
  Footer,
  Hero2,
  Services,
  SobreNosotros,
  Testimonials,
} from "@/components/organisms";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero2 />
      <SobreNosotros />
      <Services />
      <Benefits />
      <Testimonials />
      <Cta />
      <Footer />
      <Bubble />
    </main>
  );
}
