import { ArrowRight, Leaf, Sprout, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-muted" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float opacity-30 hidden lg:block">
        <Leaf className="w-20 h-20 text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float opacity-30 hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <Sprout className="w-16 h-16 text-secondary" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float opacity-20 hidden lg:block" style={{ animationDelay: '0.5s' }}>
        <Star className="w-8 h-8 text-secondary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-bounce-soft">
              <Sprout className="w-4 h-4" />
              <span>Premium Quality Seeds</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Grow Your{' '}
              <span className="text-gradient relative">
                Garden
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" fill="none">
                  <path d="M0 5 Q50 0, 100 5 T200 5" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" className="animate-fade-in" style={{ animationDelay: '0.5s' }} />
                </svg>
              </span>{' '}
              with{' '}
              <span className="text-secondary">Ganga Seeds</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Discover our premium collection of vegetable and fruit seeds. 
              High germination rate, trusted by farmers across India. 
              Every packet just <span className="font-bold text-secondary text-2xl">₹24/-</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 text-base group" asChild>
                <a href="#products">
                  Explore Seeds
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base group" asChild>
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {[
                { value: '500+', label: 'Happy Farmers' },
                { value: '95%', label: 'Germination Rate' },
                { value: '18+', label: 'Seed Varieties' },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
              
              {/* Main Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
                  alt="Fresh vegetables and seeds"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 sm:-left-8 top-1/4 bg-background rounded-xl shadow-card p-4 animate-float hover:shadow-elevated transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Organic</p>
                    <p className="text-xs text-muted-foreground">100% Natural</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 sm:-right-8 bottom-1/4 bg-background rounded-xl shadow-card p-4 animate-float hover:shadow-elevated transition-shadow cursor-pointer" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-secondary-foreground">₹24</span>
                  </div>
                  <div>
                    <p className="font-semibold">Per Packet</p>
                    <p className="text-xs text-muted-foreground">All Varieties</p>
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background rounded-xl shadow-card px-6 py-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <span className="font-semibold">4.9</span>
                  <span className="text-xs text-muted-foreground">(500+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
