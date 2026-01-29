import axios from 'axios';

export const getCartItems = async () => {
  try {
    const response = await axios.get('http://localhost:8000/pets/cart', {
      withCredentials: true,
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return [];
  }
};

export const cartCount = async () => {
  try {
    const response = await axios.get(
      'http://localhost:8000/pets/cart/cart-count/',
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching cart count:', error);
    return 0;
  }
};

export const addToCart = async (petId: number) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/pets/cart/add`,
      { petId },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return null;
  }
};
export const deleteCartItem = async (cartItemId: number) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/pets/cart/${cartItemId}`,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error deleting cart item:', error);
    return null;
  }
};

export const clearCart = async () => {
  try {
    const response = await axios.delete('http://localhost:8000/pets/cart/all', {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error clearing cart:', error);
    return null;
  }
};
