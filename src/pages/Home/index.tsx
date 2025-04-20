import { useEffect, useState } from "react";
import HomeProduct from "../../components/HomeProduct";
import type { Product } from "../../types/products";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { toBrazilianCurrency } from "../../utils/currencyFormatter";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoandingMessage] = useState(
    "Carregando produtos..."
  );
  const [produtcs, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = () => {
      api
        .get("products")
        .then((response) => {
          if (response.data.length > 0) {
            const formattedProducts: Product[] = [];

            response.data.forEach((product: Product) => {
              formattedProducts.push({
                ...product,
                formattedPrice: toBrazilianCurrency(product.price),
              });
            });

            setProducts(formattedProducts);
            setLoading(false);
          }
        })
        .catch(() => {
          setLoandingMessage("Erro ao carregar produtos :(");
          toast.error("Erro ao carregar produtos");
        });
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center text-gray-400 font-medium h-100">
        {loadingMessage}
      </div>
    );
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4">
      <h1 className="text-center mt-4 mb-8 font-medium text-xl">
        Produtos em alta
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {produtcs.map((product) => (
          <HomeProduct 
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
