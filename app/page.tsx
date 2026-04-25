import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
