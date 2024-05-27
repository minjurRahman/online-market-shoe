import { Link } from "react-router-dom";

const SingleProductCard = ({ shoe, deletedProduct }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        deletedProduct(id);
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl front-semibold">{brand}</h3>
        <h3 className="text-xl front-semibold text-red-600">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={handleDelete} className="btn bg-red-600 text-white">
            Delete
          </button>
          <button className="btn btn-outline btn-info text-white">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button className="btn btn-primary text-white">
            <Link to={`/products/${id}`}>See More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
