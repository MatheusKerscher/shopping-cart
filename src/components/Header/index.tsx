import { Link } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";
import useCartContext from "../../hooks/useCartContext";

const Header = () => {
  const { cartAmount } = useCartContext();

  return (
    <header className="w-full bg-orange-500 py-4">
      <nav className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white font-medium text-2xl">
          DevShop
        </Link>

        <Link to="/cart" className="relative">
          <FiShoppingCart size={20} color="#fafafa" />

          {cartAmount > 0 && (
            <span className="absolute -right-3 -top-3 rounded-full font-medium bg-blue-600 text-white h-5 w-5 text-xs flex justify-center items-center p-2">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
