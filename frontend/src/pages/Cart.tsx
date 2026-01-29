import { useEffect, useState } from 'react';
import { getCartItems } from '../services/cartServices';
import type { CartItem } from '../types/cartTypes';

function Cart() {
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);

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
  }, []); // Remove cartItems.length dependency to avoid infinite re-renders

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <p>Your cart is currently empty.</p>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.cartItemId} className="cart-item">
            <img src={item.photo} alt={item.name} width="100" />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
