import { useEffect, useState } from 'react';
import {
  getCartItems,
  deleteCartItem,
  clearCart,
} from '../services/cartServices';
import type { CartItem } from '../types/cartTypes';
import { useCartCount } from '../context/cartCountContext';

function Cart() {
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);
  const [hasCheckedOut, setHasCheckedOut] = useState<boolean>(false);
  const [checkoutMessage, setCheckoutMessage] = useState<string>('');
  const { cartCount: cartCountValue, setCartCount } = useCartCount();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems();
        console.log('Cart items:', items);
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, [cartItems.length]);

  const checkoutCart = () => {
    console.log('Proceeding to checkout with items:', cartItems);
    clearCart();
    setCartItems([]);
    setHasCheckedOut(true);
    setCheckoutMessage('Thank you for your purchase!');
    setCartCount(0);
  };

  const handleDeleteCartItem = async (cartItemId: number) => {
    try {
      const itemToDelete = cartItems.find(
        (item) => item.cartItemId === cartItemId,
      );
      const quantityToRemove = itemToDelete?.quantity;

      await deleteCartItem(cartItemId);
      // window.location.href = '/cart';
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.cartItemId !== cartItemId),
      );
      setCartCount(cartCountValue - quantityToRemove!);
      console.log('Deleted cart item with ID:', cartItemId);
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Basket</h1>
      {cartItems.length === 0 && <p>Your cart is currently empty.</p>}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.cartItemId} className="cart-item">
            <img src={item.photo} alt={item.name} width="100" />
            <div className="item-details">
              <h2>
                {item.species} : {item.name}
              </h2>
              <p>Price: ${item.price}</p>
            </div>
            <div className="item-details">
              <h2>Breed : {item.breed}</h2>
              <p>
                x {item.quantity} = ${item.price * item.quantity}
              </p>
            </div>
            <div className="item-details">
              <button
                className="delete-button"
                onClick={() => handleDeleteCartItem(item.cartItemId)}
              >
                <img
                  className="delete-icon"
                  src="./images/delete.png"
                  alt="Remove from cart"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="total-amount">
          <h2>
            Total Amount: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0,
            )}
          </h2>
        </div>
      )}
      {cartItems.length > 0 && (
        <button onClick={checkoutCart} className="checkout-button">
          Checkout
        </button>
      )}
      {hasCheckedOut && <h3 className="checkout-message">{checkoutMessage}</h3>}
    </div>
  );
}

export default Cart;
