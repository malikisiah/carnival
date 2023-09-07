type ShopItem = {
  image: string;
  name: string;
  price: string;
  stripe_id: string;
};

type ShopComponentProps = {
  header: string;
  items: ShopItem[];
};
