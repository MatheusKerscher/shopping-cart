import HomeProduct from "../../components/HomeProduct";

const Home = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-0">
      <h1 className="text-center mt-4 mb-8 font-bold text-xl">Produtos em alta</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <HomeProduct />
      </div>
    </main>
  );
};

export default Home;
