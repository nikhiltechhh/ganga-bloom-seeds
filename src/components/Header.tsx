import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, Leaf } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartSidebar from './CartSidebar';
import logo from '@/assets/ganga-seeds-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
        // Dispatch custom event for search
        window.dispatchEvent(new CustomEvent('searchProducts', { detail: searchQuery }));
      }
    }
    setIsSearchOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-soft'
            : 'bg-background'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Ganga Seeds"
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative font-medium text-foreground/80 hover:text-primary transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search seeds..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-40 md:w-56 px-4 py-2 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="ml-2 p-2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
                    aria-label="Search"
                  >
                    <Search className="w-5 h-5 text-foreground/70" />
                  </button>
                )}
              </div>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-muted transition-colors duration-200"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5 text-foreground/70" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold bg-secondary text-secondary-foreground rounded-full animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-muted transition-colors duration-200"
                aria-label="Menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center gap-1 relative">
                  <span
                    className={`w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5 absolute' : ''
                    }`}
                  />
                  <span
                    className={`w-3 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0 scale-0' : ''
                    }`}
                  />
                  <span
                    className={`w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5 absolute' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col gap-2 pt-2 border-t border-border">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-all duration-200"
                >
                  <Leaf className="w-4 h-4 text-primary" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <CartSidebar />
    </>
  );
};

export default Header;
