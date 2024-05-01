import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"
import Service from "@/components/Service";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <main className=" flex min-h-screen  mx-auto flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Team />
      <Testimonial />
      <Service  />
      <Stats />
      <Blog />
      <Faq />
      <Footer />
    </main>
  );
}
