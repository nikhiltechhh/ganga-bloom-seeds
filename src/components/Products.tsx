import { useState, useEffect } from 'react';
import { Search, Plus, Minus, ShoppingCart, Leaf, Cherry } from 'lucide-react';
import { products, categories, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { addToCart, setIsCartOpen } = useCart();
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
    toast({
      title: 'Added to Cart!',
      description: `${quantity} × ${product.name} added to your cart.`,
    });
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            <span>Our Collection</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Premium Quality Seeds
          </h2>
          <p className="text-muted-foreground">
            Choose from our wide variety of vegetable and fruit seeds. 
            All seeds are hand-picked and tested for high germination rate.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          {/* Search */}
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search seeds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-72 pl-10 pr-4 py-2.5 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <Cherry className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">No seeds found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.category === 'vegetable'
                          ? 'bg-primary/90 text-primary-foreground'
                          : 'bg-secondary/90 text-secondary-foreground'
                      }`}
                    >
                      {product.category === 'vegetable' ? 'Vegetable' : 'Fruit'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-display font-semibold text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-primary">
                      ₹{product.price}
                      <span className="text-xs font-normal text-muted-foreground">
                        /packet
                      </span>
                    </span>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-muted-foreground">Qty:</span>
                    <div className="flex items-center gap-2 bg-muted rounded-full">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {quantities[product.id] || 1}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Cart Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="w-4 h-4" />
            View Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
