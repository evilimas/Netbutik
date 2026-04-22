import { useEffect } from 'react';
import { useCartCount } from '../context/cartCountContext';
import { clearCart } from '../services/cartServices';

function PaymentSuccess() {
  const { setCartCount } = useCartCount();

  useEffect(() => {
    // Clear the cart after successful payment
    const clearUserCart = async () => {
      try {
        await clearCart();
        setCartCount(0);
      } catch (error) {
        console.error('Error clearing cart:', error);
      }
    };
    clearUserCart();
  }, [setCartCount]);

  return (
    <div className="payment-success-page">
      <h1>Payment Successful!</h1>
      <p>
        Thank you for your purchase. Your order has been processed successfully.
      </p>
      <p>You will receive a confirmation email shortly.</p>
      <a href="/" className="home-link">
        Return to Home
      </a>
    </div>
  );
}

export default PaymentSuccess;
