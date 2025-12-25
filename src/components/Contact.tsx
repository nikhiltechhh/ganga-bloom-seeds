import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

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
      value: 'India',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Sat: 9AM - 6PM',
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

    const message = `🌱 *Contact from Ganga Seeds Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A%0A*Message:*%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/919391155666?text=${message}`;
    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', phone: '', message: '' });
    toast({
      title: 'Message Sent!',
      description: 'Your message has been sent via WhatsApp.',
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Have questions about our seeds? Want to place a bulk order? 
            We're here to help. Reach out to us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">
                Order via WhatsApp
              </h3>
              <p className="text-muted-foreground mb-4">
                The fastest way to place your order is through WhatsApp. 
                Just send us your requirements!
              </p>
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.open('https://wa.me/919391155666', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-card p-6 sm:p-8">
            <h3 className="font-display font-semibold text-xl mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="How can we help you?"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
