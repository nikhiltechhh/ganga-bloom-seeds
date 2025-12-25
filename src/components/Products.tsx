import { useState, useEffect } from 'react';
import { Search, Plus, Minus, ShoppingCart, Leaf, Flower, Cherry, Sparkles } from 'lucide-react';
import { products, categories, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const { addToCart, setIsCartOpen, totalItems } = useCart();
  const { toast } = useToast();

  // Listen for search events from header
  useEffect(() => {
    const handleSearch = (e: CustomEvent) => {
      setSearchQuery(e.detail);
    };
    window.addEventListener('searchProducts', handleSearch as EventListener);
    return () => window.removeEventListener('searchProducts', handleSearch as EventListener);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuantityChange = (productId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1;
      const newQty = Math.max(1, current + delta);
      return { ...prev, [productId]: newQty };
    });
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    setAddingToCart(product.id);
    
    setTimeout(() => {
      addToCart(
        {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
        },
        quantity
      );
      // Reset quantity for this product
      setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
      setAddingToCart(null);
      
      toast({
        title: '🌱 Added to Cart!',
        description: `${quantity} × ${product.name} added successfully.`,
      });
    }, 300);
  };

  return (
    <section id="products" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 animate-bounce-soft">
            <Sparkles className="w-4 h-4" />
            <span>Our Collection</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Premium Quality <span className="text-gradient">Seeds</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our wide variety of vegetable and fruit seeds. 
            All seeds are hand-picked and tested for high germination rate.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
          {/* Search */}
          <div className="relative w-full sm:w-auto group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search seeds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-80 pl-11 pr-4 py-3 rounded-full border-2 border-border bg-background text-sm focus:outline-none focus:border-primary focus:shadow-soft transition-all duration-300"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-soft scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Cherry className="w-12 h-12 text-muted-foreground/40" />
            </div>
            <p className="text-muted-foreground text-lg">No seeds found matching your search.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 animate-fade-in ${
                  addingToCart === product.id ? 'scale-95 opacity-80' : ''
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                   <span
  className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm ${
    product.category === 'vegetable'
      ? 'bg-primary/90 text-primary-foreground'
      : product.category === 'fruit'
      ? 'bg-secondary/90 text-secondary-foreground'
      : 'bg-pink-500/90 text-white'
  }`}
>
  {product.category === 'vegetable' && '🥬 Vegetable'}
  {product.category === 'fruit' && '🍎 Fruit'}
  {product.category === 'flower' && '🌸 Flower'}
</span>

                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-primary">
                      ₹{product.price}/-
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {product.description}
                  </p>

                  {/* Price & Quantity */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                      <span className="text-xs text-muted-foreground ml-1">/packet</span>
                    </div>
                    <div className="flex items-center gap-1 bg-muted rounded-full p-1">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="p-1.5 hover:bg-background rounded-full transition-all duration-200 hover:scale-110"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-semibold text-sm">
                        {quantities[product.id] || 1}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="p-1.5 hover:bg-background rounded-full transition-all duration-200 hover:scale-110"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full gap-2 group/btn"
                    disabled={addingToCart === product.id}
                  >
                    {addingToCart === product.id ? (
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <ShoppingCart className="w-4 h-4 group-hover/btn:animate-bounce-soft" />
                    )}
                    {addingToCart === product.id ? 'Adding...' : 'Add to Cart'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Floating Cart Button */}
        {totalItems > 0 && (
          <div className="fixed bottom-6 right-6 z-40 animate-scale-in">
            <Button
              size="lg"
              className="rounded-full h-14 px-6 shadow-elevated gap-2 group"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5 group-hover:animate-bounce-soft" />
              <span className="font-bold">{totalItems}</span>
              <span className="hidden sm:inline">items</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
