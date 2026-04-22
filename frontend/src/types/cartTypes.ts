type CartItem = {
  cartItemId: number;
  quantity: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  price: number;
  newPrice?: number;
  photo: string;
};

export type { CartItem };
