import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Projects } from "./components/Projects";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Projects />
        <Stats />
        <Testimonials />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}