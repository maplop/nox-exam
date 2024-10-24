interface Product {
  name: string;
  urlImg: string;
  count: number;
  price: number;
}

export const productsData: Product[] = [
  {
    name: "OLLA REINA ROYAL 6L",
    urlImg: "/products/product-1.png",
    count: 10,
    price: 49.99,
  },
  {
    name: "LICUADORA MILEXUS CON JARRA DE VIDRIO 550W",
    urlImg: "/products/product-2.png",
    count: 25,
    price: 39.99,
  },
  {
    name: "Refrigerador Samsung RT29K5032S8/EM",
    urlImg: "/products/product-3.png",
    count: 15,
    price: 599.99,
  },
  {
    name: "Split Midea MSMABU-12HRFN1",
    urlImg: "/products/product-4.png",
    count: 12,
    price: 349.99,
  },
  {
    name: "Lavadora Climax CLX-12LB",
    urlImg: "/products/product-5.png",
    count: 8,
    price: 229.99,
  },
];
