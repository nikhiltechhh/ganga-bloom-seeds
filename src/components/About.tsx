import { CheckCircle, Leaf, Truck, Shield, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Leaf,
      title: 'Premium Quality',
      description: 'Hand-picked seeds with 95%+ germination rate for healthy plants.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and safe delivery across India via trusted partners.',
    },
    {
      icon: Shield,
      title: 'Trusted Quality',
      description: 'All seeds are tested and certified for best results.',
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: 'Free guidance on planting and growing your seeds.',
    },
  ];

  const highlights = [
    'Wide variety of vegetable & fruit seeds',
    'Affordable pricing - ₹24/- per packet',
    'Suitable for all climates',
    'Perfect for home gardens & farming',
    'Fresh stock with high viability',
    'Trusted by 500+ farmers',
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated group">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="Ganga Seeds Farm"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-card transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-lg">Ganga Seeds</p>
                    <p className="text-sm text-muted-foreground">
                      Your trusted partner for quality seeds
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full -z-10 animate-float" style={{ animationDelay: '1s' }} />
          </div>

          {/* Content Section */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span>About Us</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Growing Together with{' '}
              <span className="text-gradient">Quality Seeds</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              Welcome to Ganga Seeds, your one-stop destination for premium quality 
              vegetable and fruit seeds. We are committed to providing farmers and 
              home gardeners with the best seeds at affordable prices.
            </p>

            <p className="text-muted-foreground mb-8">
              With years of experience in the agricultural sector, we understand 
              the importance of quality seeds for a successful harvest. Every packet 
              we sell is tested for germination and quality assurance.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-background rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 text-center group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
