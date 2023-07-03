import Image from "next/image";
export type item = {
  productName: string;
  image: string;
  link: string;
  price: string;
  oldPrice: string;
};

export default function ItemCard(props: item) {
  return (
    <>
      <div id='block-product1' className='flex flex-col space-y-2'>
        <Image src={props.image} alt='' width={200} height={200} />
        <div id='Product-item-name'>
          <a href='#'>{props.productName}</a>
        </div>
        <div id='Product-price-detail' className='flex space-x-2'>
          <span>{props.price}</span>
          <span>{props.oldPrice}</span>
        </div>
      </div>
    </>
  );
}
