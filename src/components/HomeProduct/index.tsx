import { BsCartPlus } from "react-icons/bs";
import type { Product } from "../../types/product";
import { Link } from "react-router-dom";

type HomeProductProps = Product & {
  addCartProduct: () => void;
};

const HomeProduct = ({
  id,
  title,
  formattedPrice,
  cover,
  addCartProduct,
}: HomeProductProps) => {
  return (
    <section className="w-full flex flex-col justify-between p-3 bg-neutral-50 rounded-md shadow-lg shadow-gray-200 border-1 border-gray-100">
      <Link to={`/product/${id}`} className="w-full flex flex-col justify-between">
        <img
          className="w-full max-h-70 rounded-lg mb-2"
          src={cover}
          alt={title}
        />

        <p className="font-medium mb-2 text-center text-sm">{title}</p>
      </Link>

      <div className="flex justify-between items-center">
        <strong className="text-orange-500">{formattedPrice}</strong>

        <button
          className="bg-blue-600 p-2 rounded-sm cursor-pointer"
          type="button"
          onClick={addCartProduct}
        >
          <BsCartPlus size={18} color="#fafafa" />
        </button>
      </div>
    </section>
  );
};

export default HomeProduct;
