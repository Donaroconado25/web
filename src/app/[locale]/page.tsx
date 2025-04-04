import { QualityBadge } from "@/components/molecules";
import {
  Benefits,
  Clients,
  Footer,
  Hero2,
  Services,
  Testimonials,
} from "@/components/organisms";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero2 />
      <Clients />
      <Services />
      <QualityBadge />
      <Benefits />
      <Testimonials />
      <Footer />
    </main>
  );
}
