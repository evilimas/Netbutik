import React, { createContext, useContext, useState } from 'react';

interface CartCountContextType {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}
const CartCountContext = createContext<CartCountContextType | undefined>(
  undefined,
);

export const CartCountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartCount, setCartCount] = useState<number>(0);
  return React.createElement(
    CartCountContext.Provider,
    { value: { cartCount, setCartCount } },
    children,
  );
};

export const useCartCount = (): CartCountContextType => {
  const context = useContext(CartCountContext);
  if (context === undefined) {
    throw new Error('useCartCount must be used within a CartCountProvider');
  }
  return context;
};
