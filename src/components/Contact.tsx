import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 93911 55666',
      link: 'tel:+919391155666',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 93911 55666',
      link: 'https://wa.me/919391155666',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Ganga Seeds, Amalapuram, AndhraPradesh - 533201',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Sun: 9AM - 8PM',
      link: '#',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: 'Please fill all fields',
        variant: 'destructive',
      });
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      const message = `🌱 *Contact from Ganga Seeds Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A%0A*Message:*%0A${formData.message}`;
      const whatsappUrl = `https://wa.me/919391155666?text=${message}`;
      window.open(whatsappUrl, '_blank');

      setFormData({ name: '', phone: '', message: '' });
      setIsSending(false);
      toast({
        title: 'Message Sent! 🎉',
        description: 'Your message has been sent via WhatsApp.',
      });
    }, 500);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions about our seeds? Want to place a bulk order? 
            We're here to help. Reach out to us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-accent to-secondary/10 rounded-2xl p-8 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">
                  Order via WhatsApp
                </h3>
                <p className="text-muted-foreground mb-6">
                  The fastest way to place your order is through WhatsApp. 
                  Just send us your requirements!
                </p>
                <Button
                  size="lg"
                  className="gap-2 group/btn"
                  onClick={() => window.open('https://wa.me/919391155666', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 group-hover/btn:animate-bounce-soft" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-card rounded-2xl shadow-card border border-border p-6 sm:p-8 hover:shadow-elevated transition-shadow duration-300">
              <h3 className="font-display font-semibold text-xl mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="transition-all duration-200 focus:scale-[1.01]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Enter your phone number"
                    className="transition-all duration-200 focus:scale-[1.01]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    rows={4}
                    className="transition-all duration-200 focus:scale-[1.01] resize-none"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSending}>
                  {isSending ? (
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSending ? 'Sending...' : 'Send via WhatsApp'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
