import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-90 flex flex-col justify-center items-center">
      <span className="text-red-500 font-bold text-2xl">404</span>

      <span className="mt-3 mb-6 font-medium text-gray-400">
        Não encontramos o que você estava procurando... :(
      </span>

      <Link
        to="/"
        replace
        className="bg-orange-500 text-white px-3 py-1 rounded cursor-pointer"
      >
        Voltar ao início
      </Link>
    </div>
  );
};

export default Error;
