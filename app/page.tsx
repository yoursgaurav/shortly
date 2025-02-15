import Footer from "@/components/footer";
import Header from "@/components/header";
import Boost from "@/components/home/boost";
import Hero from "@/components/home/hero";
import Shorten from "@/components/home/shorten";
import Stats from "@/components/home/stats";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Shorten />
        <Stats />
        <Boost />
      </main>
      <Footer />
    </>
  );
}
