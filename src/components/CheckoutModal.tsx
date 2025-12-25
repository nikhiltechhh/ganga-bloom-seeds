import { useState } from 'react';
import { X, Send, Package, MapPin, User, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const { items, totalPrice, clearCart, setIsCartOpen } = useCart();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      toast({
        title: 'Please fill all fields',
        description: 'Name, phone number and address are required.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Format the WhatsApp message
    const orderItems = items
      .map(
        (item) =>
          `• ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
      )
      .join('%0A');

    const message = `🌱 *New Order from Ganga Seeds*%0A%0A*Customer Details:*%0AName: ${formData.name}%0APhone: ${formData.phone}%0AAddress: ${formData.address}%0A%0A*Order Items:*%0A${orderItems}%0A%0A*Total Amount: ₹${totalPrice}*%0A%0AThank you for ordering!`;

    const whatsappUrl = `https://wa.me/919391155666?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Reset form and cart
    setTimeout(() => {
      setFormData({ name: '', phone: '', address: '' });
      setIsSubmitting(false);
      onClose();
      clearCart();
      setIsCartOpen(false);

      toast({
        title: 'Order Sent! 🎉',
        description: 'Your order has been sent via WhatsApp.',
      });
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg p-0 overflow-hidden">
        {/* Header with gradient */}
        <div className="gradient-hero p-6 text-primary-foreground">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl font-display text-primary-foreground">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              Complete Your Order
            </DialogTitle>
          </DialogHeader>
          <p className="mt-2 text-primary-foreground/80 text-sm">
            Fill in your details to place the order via WhatsApp
          </p>
        </div>

        {/* Order Summary */}
        <div className="px-6 pt-4">
          <div className="bg-muted/50 rounded-xl p-4 mb-4">
            <h4 className="font-medium text-sm text-muted-foreground mb-3">Order Summary</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm animate-fade-in">
                  <span className="truncate flex-1">{item.name} × {item.quantity}</span>
                  <span className="font-medium ml-2">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-3 pt-3 flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold text-primary">₹{totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium">
              <User className="w-4 h-4 text-primary" />
              Your Name *
            </label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              className="transition-all duration-200 focus:scale-[1.01]"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Phone className="w-4 h-4 text-primary" />
              Phone Number *
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter your phone number"
              className="transition-all duration-200 focus:scale-[1.01]"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="w-4 h-4 text-primary" />
              Delivery Address *
            </label>
            <Textarea
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Enter your complete delivery address"
              rows={3}
              className="transition-all duration-200 focus:scale-[1.01] resize-none"
              required
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
