import React from "react";

export default function ProductSlider({ title, products }) {
  return (
    <div className="bg-white p-4">
      <span className="font-bold text-md text-gray-600 mr-4">{title}</span>
      <a href="#" className="text-tiny text-blue-500">
        Shop now
      </a>
      <div
        style={{
          gridTemplateColumns: `repeat(${products.length}, calc(20% - 1rem * 2))`,
        }}
        className={`grid gap-4 grid-rows-1 overflow-x-scroll whitespace-nowrap my-4`}
      >
        {React.Children.toArray(
          products.map((product) => (
            <a href={`/product/${product.id || 1}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-24 w-24"
              />
            </a>
          ))
        )}
      </div>
    </div>
  );
}
