import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Transformations from "./components/Transformations";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Story from "./components/story";


export default function App() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Story />
        <Services />
        <Transformations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}