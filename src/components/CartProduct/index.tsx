import { FiMinus, FiPlus, FiX } from "react-icons/fi";

const CartProduct = () => {
  return (
    <section className="w-full px-2 py-3 flex flex-col md:flex-row gap-8 justify-around items-center relative">
      <div className="flex gap-3 flex-col md:flex-row items-center">
        <img
          className="max-w-10 rounded-lg"
          src="https://m.media-amazon.com/images/I/71VaJ-e3qNL._AC_UF1000,1000_QL80_.jpg"
          alt=""
        />

        <span>Produtos krosfngrjesgnj</span>
      </div>

      <span>
        <span>Valor:</span> R$ 5451
      </span>

      <div className="flex gap-2 justify-center items-center">
        <button
          type="button"
          className="bg-orange-500 text-white p-1 rounded-sm cursor-pointer outline-0"
        >
          <FiMinus />
        </button>

        <span>1</span>

        <button
          type="button"
          className="bg-orange-500 text-white p-1 rounded-sm cursor-pointer outline-0"
        >
          <FiPlus />
        </button>
      </div>

      <span>
        <span>Sub total:</span> R$ 45451
      </span>

      <button className="absolute top-2 right-1 text-red-500">
        <FiX size={18} />
      </button>
    </section>
  );
};

export default CartProduct;
