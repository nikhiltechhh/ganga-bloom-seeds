import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ganga Seeds - Premium Vegetable & Fruit Seeds | ₹24 per Packet</title>
        <meta
          name="description"
          content="Buy premium quality vegetable and fruit seeds from Ganga Seeds. High germination rate, trusted by farmers across India. All seeds at just ₹24 per packet."
        />
        <meta
          name="keywords"
          content="seeds, vegetable seeds, fruit seeds, farming, agriculture, Ganga Seeds, buy seeds online, India"
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Products />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
