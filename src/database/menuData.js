const allCategories = [
  {
    id: "meals",
    text: "Primeiro, seu prato",
    items: [
      {
        kind: "Prato",
        imgsrc: "assets/images/decarne.jpeg",
        imgalt: "Pastelao de Carne",
        name: "Pastelao de Carne",
        description: "Sem misterios, aquele que voce ja conhece",
        price: "R$ 6,90",
      },
      {
        kind: "Prato",
        imgsrc: "assets/images/degorgonzola.jpg",
        imgalt: "Pastel de Gorgozola com Tomate Seco",
        name: "Pastelao de Gorgonzola com Tomate Seco",
        description: "Experimenta!",
        price: "R$ 9,90",
      },
      {
        kind: "Prato",
        imgsrc: "assets/images/depalmito.webp",
        imgalt: "Pastel de Palmito",
        name: "Pastelao de Palmito",
        description: "Melhor que o da feira! Juro!",
        price: "R$ 8,90",
      },
    ],
  },
  {
    id: "drinks",
    text: "Agora, sua bebida",
    items: [
      {
        kind: "Bebida",
        imgsrc: "assets/images/coca2l.webp",
        imgalt: "Coca 2l",
        name: "Coca 2l",
        description: "Tem pra todo mundo!",
        price: "R$ 10,00",
      },
      {
        kind: "Bebida",
        imgsrc: "assets/images/cocalata.webp",
        imgalt: "Coca 350ml",
        name: "Coca 350ml",
        description: "Na medida certa",
        price: "R$ 5,00",
      },
      {
        kind: "Bebida",
        imgsrc: "assets/images/matte.webp",
        imgalt: "Matte 1.5l",
        name: "Matte 1.5l",
        description: "Pra quem curte um cha gelado",
        price: "R$ 9,00",
      },
    ],
  },
  {
    id: "desserts",
    text: "Por fim, sua sobremesa",
    items: [
      {
        kind: "Sobremesa",
        imgsrc: "assets/images/dechocolate.png",
        imgalt: "Pastel de Chocolate",
        name: "Pastel de Chocolate com Morango",
        description: "Indescritivel",
        price: "R$ 8,00",
      },
      {
        kind: "Sobremesa",
        imgsrc: "assets/images/debanana.webp",
        imgalt: "Pastel de Banana",
        name: "Pastel de Banana",
        description: "Inusitadamente brasileira",
        price: "R$ 6,00",
      },
      {
        kind: "Sobremesa",
        imgsrc: "assets/images/dechocolatebranco.jpg",
        imgalt: "Pastel de Chocolate Branco",
        name: "Pastel de Chocolate Branco",
        description: "Sim, isso existe",
        price: "R$ 8,10",
      },
    ],
  },
];

export default allCategories;
