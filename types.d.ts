type ShopItem = {
  image: string;
  name: string;
  price: number;
  stripe_id: string;
};

type FloorProductsProps = {
  header: string;
  items: ShopItem[];
  theme: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (idx: number) => void;
};

type CartItem = {
  stripe_id: string;
  name: string;
  image: string;
  price: number;
  qty: number;
};
