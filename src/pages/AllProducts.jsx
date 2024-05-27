import React, { useEffect, useState } from "react";
import SingleProductCard from "../components/dashboard/SingleProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1 className="text-6xl font-bold text-center">All Products</h1>
      <div className="my-20 flex flex-wrap gap-4">
        {products.map((shoe) => (
          <SingleProductCard
            shoe={shoe}
            key={shoe.id}
            deletedProduct={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
