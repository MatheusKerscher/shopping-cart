export interface Product {
  id: number;
  title: string;
  price: number;
  cover: string;
  formattedPrice: string;
}

export interface ProductDetailsProps {
  id: number;
  title: string;
  price: number;
  cover: string;
  formattedPrice: string;
  description: string;
}
