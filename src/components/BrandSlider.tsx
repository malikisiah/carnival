import React, { useState } from "react";

function BrandShowcase() {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);

  const brands = [
    {
      name: "Digicel",
      imageUrl: "https://via.placeholder.com/150x150",
      description:
        "Whatever the occasion, complete your outfit with one of Hermes Fashion's stylish women's bags. Discover our spring collection.",
      products: [
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 45.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 55.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 65.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 75.0,
          rating: 4,
        },
      ],
    },
    {
      name: "Digicel",
      imageUrl: "https://via.placeholder.com/150x150",
      description: "This is the description for Digicel.",
      products: [
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 45.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 55.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 65.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 75.0,
          rating: 4,
        },
      ],
    },
    {
      name: "Digicel",
      imageUrl: "https://via.placeholder.com/150x150",
      description: "This is the description for Digicel.",
      products: [
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 45.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 55.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 65.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 75.0,
          rating: 4,
        },
      ],
    },
    {
      name: "Digicel",
      imageUrl: "https://via.placeholder.com/150x150",
      description: "This is the description for Digicel.",
      products: [
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 45.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 55.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 65.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 75.0,
          rating: 4,
        },
      ],
    },
    {
      name: "Digicel",
      imageUrl: "https://via.placeholder.com/150x150",
      description: "This is the description for Digicel.",
      products: [
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 45.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 55.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 65.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 75.0,
          rating: 4,
        },
      ],
    },
    {
      name: "Digicel",
      imageUrl: "https://via.placeholder.com/150x150",
      description: "This is the description for Digicel.",
      products: [
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 45.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 55.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 65.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 75.0,
          rating: 4,
        },
      ],
    },
    {
      name: "Digicel",
      imageUrl: "https://via.placeholder.com/150x150",
      description: "This is the description for Digicel.",
      products: [
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 45.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 55.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 65.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 75.0,
          rating: 4,
        },
      ],
    },
    {
      name: "Digicel",
      imageUrl: "https://via.placeholder.com/150x150",
      description: "This is the description for Digicel.",
      products: [
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 45.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 55.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 65.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 75.0,
          rating: 4,
        },
      ],
    },
    {
      name: "Digicel",
      imageUrl: "https://via.placeholder.com/150x150",
      description: "This is the description for Digicel.",
      products: [
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 45.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 55.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 65.0,
          rating: 4,
        },
        {
          name: "Macecenas consequat mauris",
          imageUrl: "https://via.placeholder.com/150x150",
          price: 75.0,
          rating: 4,
        },
      ],
    },
  ];

  const handleBrandChange = (index: React.SetStateAction<number>) => {
    setActiveBrandIndex(index);
  };

  const activeBrandData = brands[activeBrandIndex];

  return (
    <div className="max-w-6xl mx-auto pt-6 pb-6">
      <div className="flex justify-between items-center">
        <div
          className="text-small font-bold pb-1 ml-2"
          style={{ color: "#333" }}
        >
          BRAND SHOWCASE
        </div>
        <div>
          <button
            className="inline mr-2 text-xl cursor-pointer pb-1"
            style={{ fontSize: "24px" }}
            onClick={() => {
              const prevBrandIndex =
                (activeBrandIndex - 1 + brands.length) % brands.length;
              handleBrandChange(prevBrandIndex);
            }}
          >
            &#8249;
          </button>
          <button
            className="inline text-xl cursor-pointer pb-1 mr-2"
            style={{ fontSize: "24px" }}
            onClick={() => {
              const nextBrandIndex = (activeBrandIndex + 1) % brands.length;
              handleBrandChange(nextBrandIndex);
            }}
          >
            &#8250;
          </button>
        </div>
      </div>
      <div className="w-full h-1 bg-orange-500"></div>
      <div className="p-2 border bg-white">
        <div className="flex mb-4 space-x-2 overflow-x-auto">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`brand-container ${
                activeBrandIndex === index ? "selected" : ""
              }`}
              onClick={() => handleBrandChange(index)}
              style={{
                width: "12.5%",
                boxSizing: "border-box",
                paddingBottom: "4px",
                borderBottom:
                  activeBrandIndex === index ? "3px solid orange" : "none",
              }}
            >
              <img
                src={brand.imageUrl}
                alt={brand.name}
                className="w-full h-full object-cover"
                style={{ aspectRatio: "21/9" }}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-start pl-5">
            <img
              src={activeBrandData.imageUrl}
              alt={activeBrandData.name}
              className="w-40 h-20 object-cover mb-4"
            />
            <div className="border-b border-dashed border-gray-300 w-3/4 mb-4"></div>
            <p className="mb-4" style={{ fontSize: "14px", maxWidth: "300px" }}>
              {activeBrandData.description}
            </p>
            <div className="border-b border-dashed border-gray-300 w-3/4 mb-4"></div>

            <button className="bg-white py-2 px-4 border rounded-full mb-4">
              SHOP THIS BRAND &#8594;
            </button>
          </div>
          <div className="flex flex-wrap -ml-60">
            {activeBrandData.products.map((product, index) => (
              <div key={index} className="w-1/2 mb-4 flex items-start">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-32 h-32 object-cover"
                />
                <div className="ml-4">
                  <div style={{ fontSize: "14px", marginBottom: "10px" }}>
                    {product.name}
                  </div>
                  <div className="font-bold text-orange-500">
                    ${product.price.toFixed(2)}
                  </div>
                  <div style={{ color: "gold" }}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{
                          color: i < product.rating ? "orange" : "gray",
                        }}
                      >
                        {i < product.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandShowcase;
