export interface SimilarProduct {
  id: number;
  title: string;
  price: number;
  image: any;
  favorites: number;
  amount: string;
  stock: number;
}

export interface Product extends SimilarProduct {}

export interface Order {
  id: number;
  name: string;
  price: number;
  image: any;
  status: string;
  products: Product[];
}
