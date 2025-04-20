import { BsCartPlus } from "react-icons/bs";

const HomeProduct = () => {
  return (
    <section className="w-full p-3 bg-neutral-50 rounded-md shadow-lg shadow-gray-200 border-1 border-gray-100">
      <img className="w-full max-h-70 rounded-lg mb-2" src="https://m.media-amazon.com/images/I/71VaJ-e3qNL._AC_UF1000,1000_QL80_.jpg" alt="" />

      <p className="font-medium mb-2 text-center">Produto</p>

      <div className="flex justify-between items-center">
        <strong className="text-orange-500">R$ 4545</strong>

        <button className="bg-blue-600 p-2 rounded-sm cursor-pointer" type="button">
          <BsCartPlus  size={18} color="#fafafa"/>
        </button>
      </div>
    </section>
  );
};

export default HomeProduct;
