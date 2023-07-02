const TopSellersIn: React.FC = () => {
  return (
    <div className="w-1520 h-410 mt-5 flex justify-center">
      <div id="block-container" className="flex flex-col">
        <div
          id="block-header"
          className="w-1114 h-40 mb-5 flex justify-between"
        >
          <div className="p-2">TOP SELLERS IN</div>
          <div className="flex p-2 space-x-2">
            <div className="border-r border-gray-900 pr-2">ALL</div>
            <div className="border-r border-gray-900 pr-2">DRESSES</div>
            <div className="border-r border-gray-900 pr-2">TOP</div>
            <div className="border-r border-gray-900 pr-2">BOTTOM</div>
            <div className="border-r border-gray-900 pr-2">JEWELLRY</div>
            <div>SKIN CARE</div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div id="block-banner" className="w-226 h-348">
            <img src="https://via.placeholder.com/226x348" alt="banner" />
          </div>
          <div id="block-tabs" className="w-872 h-348 space-x-4 flex">
            <div id="block-product1" className="flex flex-col space-y-2">
              <img src="https://via.placeholder.com/206x252" alt="product1" />
              <div id="Product-item-name">
                <a href="#">Product1</a>
              </div>
              <div id="Product-price-detail" className="flex space-x-2">
                <span>Price</span>
                <span>Old Price</span>
              </div>
            </div>
            <div id="block-product2" className="flex flex-col space-y-2">
              <img src="https://via.placeholder.com/206x252" alt="product2" />
              <div id="Product-item-name">
                <a href="#">Product2</a>
              </div>
              <div id="Product-price-detail" className="flex space-x-2">
                <span>Price</span>
                <span>Old Price</span>
              </div>
            </div>
            <div id="block-product3" className="flex flex-col space-y-2">
              <img src="https://via.placeholder.com/206x252" alt="product3" />
              <div id="Product-item-name">
                <a href="#">Product3</a>
              </div>
              <div id="Product-item-price" className="flex space-x-2">
                <span>Price</span>
                <span>Old Price</span>
              </div>
            </div>
            <div id="block-product4" className="flex flex-col space-y-2">
              <img src="https://via.placeholder.com/206x252" alt="product4" />
              <div id="Product-item-name">
                <a href="#">Product4</a>
              </div>
              <div id="product-price-detail" className="flex space-x-2">
                <span>Price</span>
                <span>Old Price</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellersIn;
