import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { toBrazilianCurrency } from "../../utils/currencyFormatter";
import { api } from "../../services/api";
import type { ProductDetailsProps } from "../../types/product";
import ProductDetails from "../../components/ProductDetails";
import useCartContext from "../../hooks/useCartContext";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { addCartProduct } = useCartContext();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<ProductDetailsProps>();

  useEffect(() => {
    const getProductDetails = () => {
      if (productId) {
        api
          .get(`products/${productId}`)
          .then((response) => {
            if (response.data) {
              setProduct({
                ...response.data,
                formattedPrice: toBrazilianCurrency(response.data.price),
              });

              setLoading(false);
            } else {
              toast.error("Produto não encontrado");
              navigate("/", { replace: true });
            }
          })
          .catch(() => {
            toast.error("Produto não encontrado");
            navigate("/", { replace: true });
          });
      } else {
        toast.error("Produto não encontrado");
        navigate("/", { replace: true });
      }
    };

    getProductDetails();
  }, [navigate, productId]);

  const handleClick = (product: ProductDetailsProps) => {
    addCartProduct(product);
    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center text-gray-400 font-medium h-100">
        Buscando detalhes do produto...
      </div>
    );
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 mt-8">
      {product && (
        <ProductDetails
          {...product}
          addCartProduct={() => handleClick(product)}
        />
      )}
    </main>
  );
};

export default Product;
