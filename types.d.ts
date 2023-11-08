type ShopItem = {
  image: string;
  name: string;
  price: number;
  stripe_id?: string;
  purchaseDate?: string;
  qty?: number;
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

type userAdmin = {
  displayName: string | null;
  email: string;
  photo: string | null;
  role: string;
  adminStatus: boolean;
  uid: string;
};
