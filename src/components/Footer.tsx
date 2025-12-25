import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/ganga-seeds-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const seedCategories = [
    { name: 'Vegetable Seeds', href: '#products' },
    { name: 'Fruit Seeds', href: '#products' },
    { name: 'Flower Seeds', href: '#products'},
    { name: 'All Seeds', href: '#products' },
  ];

  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Ganga Seeds" className="h-12 w-auto" />
            </div>
            <p className="text-background/70 text-sm mb-4">
              Your trusted partner for premium quality vegetable and fruit seeds. 
              Helping farmers grow better with every packet.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100063847458531"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/ganga.seeds?igsh=ZGhraHRoc3ljcDd0"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <Leaf className="w-3 h-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {seedCategories.map((cat) => (
                <li key={cat.name}>
                  <a
                    href={cat.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <Leaf className="w-3 h-3" />
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">+91 93911 55666</p>
                </div>
              </li>
               <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">gangaseeds32@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Ganga Seeds, Amalapuram, AndhraPradesh - 533201, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-background/60">
            <p>© {currentYear} Ganga Seeds. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Leaf className="w-3 h-3 text-primary" /> for farmers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
