import { ArrowRight, Leaf, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-muted" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float opacity-20">
        <Leaf className="w-20 h-20 text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Sprout className="w-16 h-16 text-secondary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sprout className="w-4 h-4" />
              <span>Premium Quality Seeds</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Grow Your{' '}
              <span className="text-gradient">Garden</span>{' '}
              with{' '}
              <span className="text-secondary">Ganga Seeds</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover our premium collection of vegetable and fruit seeds. 
              High germination rate, trusted by farmers across India. 
              Every packet just <span className="font-bold text-secondary">₹24/-</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="gap-2 text-base" asChild>
                <a href="#products">
                  Explore Seeds
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Farmers</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Germination Rate</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-primary">18+</p>
                <p className="text-sm text-muted-foreground">Seed Varieties</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full" />
              
              {/* Main Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
                  alt="Fresh vegetables and seeds"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 bg-background rounded-xl shadow-card p-4 animate-bounce-soft">
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

              <div className="absolute -right-4 bottom-1/4 bg-background rounded-xl shadow-card p-4 animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">₹24</span>
                  </div>
                  <div>
                    <p className="font-semibold">Per Packet</p>
                    <p className="text-xs text-muted-foreground">All Varieties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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
