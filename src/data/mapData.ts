export interface InfoProps {
  address: string;
  place: string;
}

interface MapDataProps {
  id: number;
  code: string;
  x: number;
  y: number;
  info: InfoProps;
}

export const mapData: MapDataProps[] = [
  {
    id: 1,
    code: "O-4516",
    x: 20,
    y: 40,
    info: {
      address: "Calle 5 e/ 25 y 36 Siboney Playa #4578",
      place: "BOMBA DE AGUA UYUSTOOLS",
    },
  },
  {
    id: 2,
    code: "O-4520",
    x: 37,
    y: 31,
    info: {
      address: "Avenida 3ra y Calle 18, Miramar, La Habana",
      place: "SUPERMERCADO 3RA Y 18",
    },
  },
  {
    id: 3,
    code: "O-4518",
    x: 40,
    y: 62,
    info: {
      address: "Calle 23 #567 e/ G y H, Vedado, La Habana",
      place: "CAFETERÍA LA ÉPOCA",
    },
  },
  {
    id: 4,
    code: "O-4517",
    x: 66,
    y: 14,
    info: {
      address: "Calle 12 e/ Línea y 3ra, Vedado, La Habana",
      place: "RESTAURANTE EL LITORAL",
    },
  },
  {
    id: 5,
    code: "O-4521",
    x: 63,
    y: 63,
    info: {
      address: "Calle 42 e/ 1ra y 5ta, Miramar, La Habana",
      place: "CLÍNICA CIRA GARCÍA",
    },
  },
];
