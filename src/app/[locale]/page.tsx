import {
  Benefits,
  Footer,
  Hero2,
  Services,
  Testimonials,
} from "@/components/organisms";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero2 />
      <Services />
      <Benefits />
      <Testimonials />
      <Footer />
    </main>
  );
}
