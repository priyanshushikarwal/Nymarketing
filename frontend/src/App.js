import { useEffect, useState } from "react";
import Lenis from "lenis";
import "@/App.css";
import Loader from "@/components/landing/Loader";
import ScrollChase from "@/components/landing/ScrollChase";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import Services from "@/components/landing/Services";
import WhyNY from "@/components/landing/WhyNY";
import Process from "@/components/landing/Process";
import Work from "@/components/landing/Work";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";
import About from "@/components/landing/About";
import Footer from "@/components/landing/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -72 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#0F0F10] antialiased selection:bg-[#16A34A] selection:text-white">
      <Loader show={loading} />
      <ScrollChase />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <WhyNY />
        <Process />
        <Work />
        <Stats />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
