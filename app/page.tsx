import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkGrid from '@/components/WorkGrid';

// THIS is the default export the error is looking for
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="workgrid">
        <WorkGrid />
      </section>
    </main>
  );
}