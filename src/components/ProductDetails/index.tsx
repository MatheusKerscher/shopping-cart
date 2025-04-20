import { BsCartPlus } from "react-icons/bs";
import type { ProductDetailsProps } from "../../types/product";

type ProductDetailsComponentProps = ProductDetailsProps & {
  addCartProduct: () => void
}

const ProductDetails = ({
  cover,
  title,
  description,
  formattedPrice,
  addCartProduct
}: ProductDetailsComponentProps) => {
  return (
    <section className="w-full max-w-4xl mx-auto p-3 rounded-lg bg-neutral-50 shadow-lg shadow-gray-200 border-1 border-gray-100 flex gap-5 flex-wrap sm:flex-nowrap">
      <img className="w-fit mx-auto h-50 md:h-70 rounded" src={cover} alt={title} />

      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-2xl">{title}</h2>

        <p className="text-justify">{description}</p>

        <div className="flex justify-between items-center">
          <span className="font-medium text-xl text-orange-500">
            {formattedPrice}
          </span>

          <button
            className="bg-blue-600 p-2 rounded-sm cursor-pointer"
            type="button"
            onClick={addCartProduct}
          >
            <BsCartPlus size={20} color="#fafafa" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
