import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
  <div className="min-h-screen w-full max-w-screen overflow-x-hidden">
      <div className="mx-auto w-full max-w-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
    
    </div>
    
  );
}

export default App;
