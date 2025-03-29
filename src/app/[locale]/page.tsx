import { WhatsAppBubble } from "@/components/molecules";
import { Benefits, Cta, Footer, Hero2, Services, SobreNosotros, Testimonials } from "@/components/organisms";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* <Header /> */}
      {/* <Hero /> */}
      <Hero2 />
      <SobreNosotros />
      <Services />
      <Benefits />
      <Testimonials />
      <Cta />
      <Footer />
      <WhatsAppBubble
        phoneNumber="+18772311888 "
      />
    </main>
  );
}
