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
  }, []);

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
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
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className="item-details">
              <button className="delete-button">
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
    </div>
  );
}

export default Cart;
