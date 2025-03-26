import { WhatsAppBubble } from "@/components/molecules";
import { Header, Hero2, Services } from "@/components/organisms";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header />
      {/* <Hero /> */}
      <Hero2 />
      <Services />
      <WhatsAppBubble
        phoneNumber="+1234567890"
      />
    </main>
  );
}
