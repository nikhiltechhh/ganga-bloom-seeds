import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import CheckoutModal from './CheckoutModal';

const CartSidebar = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleQuantityChange = (id: string, delta: number, currentQty: number) => {
    const newQty = currentQty + delta;
    if (newQty >= 1) {
      updateQuantity(id, newQty);
    }
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-elevated z-50 animate-slide-in-right overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold">Your Cart</h2>
              <p className="text-xs text-muted-foreground">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-muted transition-all duration-200 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center animate-fade-in">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4 animate-bounce-soft">
                <ShoppingBag className="w-12 h-12 text-muted-foreground/40" />
              </div>
              <p className="text-foreground font-medium text-lg">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-1">
                Add some seeds to get started!
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-xs text-muted-foreground capitalize mt-0.5">
                      {item.category} seeds
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm font-bold text-primary">
                        ₹{item.price * item.quantity}
                      </p>
                      <div className="flex items-center gap-1 bg-muted rounded-full p-0.5">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1, item.quantity)}
                          className="p-1.5 hover:bg-background rounded-full transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1, item.quantity)}
                          className="p-1.5 hover:bg-background rounded-full transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-all duration-200 self-start"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border bg-gradient-to-t from-muted/50 to-background">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-sm text-muted-foreground">Total Amount</span>
                <p className="text-2xl font-bold text-primary">₹{totalPrice}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-muted-foreground">{totalItems} items</span>
                <p className="text-sm text-primary font-medium">Free Delivery</p>
              </div>
            </div>
            <Button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full gap-2 group"
              size="lg"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              className="w-full mt-2 text-muted-foreground hover:text-destructive"
              onClick={clearCart}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Cart
            </Button>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
};

export default CartSidebar;
