import SingleProduuct from "./SingleProduuct";

const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text text-center">Our Products</h1>
      <div className="flex gap-2 font-bold justify-center items-center ">
        {data.slice(0, 4).map((shoe) => (
          <SingleProduuct key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default Products;
