
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import FeaturedNews from '@/components/FeaturedNews';
import Testimonials from '@/components/Testimonials';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import SplashCursor from '@/components/SplashCursor/SplashCursor';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SplashCursor />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <FeaturedNews />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
