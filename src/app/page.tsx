import { WhatsAppBubble } from "@/components/molecules";
import { Header, Hero, Services } from "@/components/organisms";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhatsAppBubble
        phoneNumber="+1234567890"
      />
    </main>
  );
}
