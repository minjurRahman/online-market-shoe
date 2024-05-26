import React, { useEffect, useState } from "react";
import SingleProduuct from "../components/home/SingleProduuct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-6xl font-bold text-center">All Products</h1>
      <div className="my-20 flex flex-wrap gap-4">
        {products.map((shoe) => (
          <SingleProduuct shoe={shoe} key={shoe.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
