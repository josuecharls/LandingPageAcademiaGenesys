import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LevelSelector from './components/LevelSelector';
import PricingSection from './components/PricingSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LevelSelector />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
