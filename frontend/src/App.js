import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Services from "@/components/landing/Services";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";

function App() {
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
    <div className="min-h-screen bg-[#F9F8F5] text-[#0F0F10] antialiased selection:bg-[#FF4D2D] selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
