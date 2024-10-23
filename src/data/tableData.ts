export type Status =
  | "PENDING"
  | "TRANSPORTING"
  | "PACKAGING"
  | "DELIVERED"
  | "CANCELLED";

interface Data {
  orderId: string;
  avatar?: string;
  name: string;
  products: string;
  email?: string;
  phone?: string;
  status: Status;
}

export const tableData: Data[] = [
  {
    orderId: "O-4516",
    avatar: "/avatares/avatar-4.png",
    name: "Segun Adeboyo",
    products: "REDMI 12 C 4/64G, COLCHON FULL CAMERO",
    email: "sage@gmail.com",
    phone: "+53 5 784 45 12",
    status: "PENDING",
  },
  {
    orderId: "O-4517",
    name: "Mark Chandler",
    products: "BOMBA DE AGUA",
    email: "mark@gmail.com",
    status: "TRANSPORTING",
  },
  {
    orderId: "O-4518",
    name: "Lazar Nikolov",
    products: "OLLA REINA ROYAL 6L",
    email: "lazar@gmail.com",
    status: "PACKAGING",
  },
  {
    orderId: "O-4519",
    avatar: "/avatares/avatar-5.png",
    name: "Javier Alaves",
    products: "CAFETERA ELECTRICA ROYAL",
    phone: "+53 5 365 41 84",
    status: "DELIVERED",
  },
  {
    orderId: "O-4520",
    name: "Lazar Nikolov",
    products: "OLLA REINA ROYAL 6L",
    email: "lazar@gmail.com",
    status: "CANCELLED",
  },
];
