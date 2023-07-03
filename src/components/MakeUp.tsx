// const MakeUp: React.FC = () => {
//   return (
//     <div className="w-1520 h-410 mt-5 flex justify-center">
//       <div id="block-container" className="flex flex-col">
//         <div
//           id="block-header"
//           className="w-1114 h-40 mb-5 flex justify-between"
//         >
//           <div className="p-2">MAKE UP</div>
//           <div className="flex p-2 space-x-2">
//             <div className="border-r border-gray-900 pr-2">ALL</div>
//             <div className="border-r border-gray-900 pr-2">WOMEN FASHION</div>
//             <div className="border-r border-gray-900 pr-2">BAGS</div>
//             <div className="border-r border-gray-900 pr-2">SHOES</div>
//             <div>GLASSES</div>
//           </div>
//         </div>
//         <div className="flex space-x-4">
//           <div id="block-banner" className="w-226 h-348">
//             <img src="https://via.placeholder.com/226x348" alt="banner" />
//           </div>
//           <div id="block-tabs" className="w-872 h-348 space-x-4 flex">
//             <div id="block-product1" className="flex flex-col space-y-2">
//               <img src="https://via.placeholder.com/206x252" alt="product1" />
//               <div id="Product-item-name">
//                 <a href="#">Product1</a>
//               </div>
//               <div id="Product-price-detail" className="flex space-x-2">
//                 <span>Price</span>
//                 <span>Old Price</span>
//               </div>
//             </div>
//             <div id="block-product2" className="flex flex-col space-y-2">
//               <img src="https://via.placeholder.com/206x252" alt="product2" />
//               <div id="Product-item-name">
//                 <a href="#">Product2</a>
//               </div>
//               <div id="Product-price-detail" className="flex space-x-2">
//                 <span>Price</span>
//                 <span>Old Price</span>
//               </div>
//             </div>
//             <div id="block-product3" className="flex flex-col space-y-2">
//               <img src="https://via.placeholder.com/206x252" alt="product3" />
//               <div id="Product-item-name">
//                 <a href="#">Product3</a>
//               </div>
//               <div id="Product-item-price" className="flex space-x-2">
//                 <span>Price</span>
//                 <span>Old Price</span>
//               </div>
//             </div>
//             <div id="block-product4" className="flex flex-col space-y-2">
//               <img src="https://via.placeholder.com/206x252" alt="product4" />
//               <div id="Product-item-name">
//                 <a href="#">Product4</a>
//               </div>
//               <div id="product-price-detail" className="flex space-x-2">
//                 <span>Price</span>
//                 <span>Old Price</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MakeUp;

interface ProductBlockProps {
  image: string;
  name: string;
}

const categories = ['ALL', 'WOMEN FASHION', 'BAGS', 'SHOES', 'GLASSES'];

const products = [
  { image: 'https://via.placeholder.com/206x252', name: 'Product1' },
  { image: 'https://via.placeholder.com/206x252', name: 'Product2' },
  { image: 'https://via.placeholder.com/206x252', name: 'Product3' },
  { image: 'https://via.placeholder.com/206x252', name: 'Product4' },
];

const ProductBlock: React.FC<ProductBlockProps> = ({ image, name }) => (
  <div className="flex flex-col space-y-2">
    <img src={image} alt={name} />
    <div className="product-item-name">
      <a href="#">{name}</a>
    </div>
    <div className="product-price-detail flex space-x-2">
      <span>Price</span>
      <span>Old Price</span>
    </div>
  </div>
);

const MakeUp: React.FC = () => (
  <div className="w-1520 h-410 mt-5 flex justify-center">
    <div className="flex flex-col">
      <div className="w-1114 h-40 mb-5 flex justify-between">
        <div className="p-2">MAKE UP</div>
        <div className="flex p-2 space-x-2">
          {categories.map((category, index) => (
            <div key={index} className="border-r border-gray-900 pr-2">
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-226 h-348">
          <img src="https://via.placeholder.com/226x348" alt="banner" />
        </div>
        <div className="w-872 h-348 space-x-4 flex">
          {products.map((product, index) => (
            <ProductBlock key={index} image={product.image} name={product.name} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MakeUp;
