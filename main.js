//Declaration du tableau des produits

let MesProduits = [
  {
    name: "Adidas",
    description: "des espa de qualité",
    price: 290,
    quantity: 1,
    image: "./img/adidas.jpg",
  },
  {
    name: "Nike",
    description: "des Nike de qualité",
    price: 350,
    quantity: 1,
    image: "./img/Nike-Women.webp",
  },

  {
    name: "Reebook",
    description: "des Reebook de qualité",
    price: 250,
    quantity: 1,
    image: "./img/Reebook.jpg",
  },

  {
    name: "Puma",
    description: "des espa de qualité",
    price: 299,
    quantity: 1,
    image: "./img/Puma.png",
  },
];

// le GET par selector DOM de Cart
let CartGeneral = document.getElementById("Cart");

//Itération sur les items du tableau 
MesProduits.forEach((item) => {
  let divProduct = document.createElement("div");
  divProduct.classList.add("card", 'mt-2');
  divProduct.style.width = '18rem'

  let NameProduct = document.createElement("h3");
  NameProduct.innerHTML = item.name;
  divProduct.appendChild(NameProduct);

  let ImageProduct = document.createElement('img')
  ImageProduct.classList.add('card-img-top')
  ImageProduct.src = item.image
  divProduct.appendChild(ImageProduct);


  let QuantityElement = document.createElement("span");
  QuantityElement.textContent = "Quantité : " + item.quantity;
  divProduct.appendChild(QuantityElement);

  let increaseButton = document.createElement("button");
  increaseButton.textContent = "+";
  increaseButton.addEventListener("click", () => {
    item.quantity++;
    QuantityElement.textContent = "Quantité : " + item.quantity;
    updateTotalPrice()
  });
  divProduct.appendChild(increaseButton);

  let decreaseButton = document.createElement("button");
  decreaseButton.textContent = "-";
  decreaseButton.addEventListener("click", (e) => {
    if (item.quantity === 1) {
      e.preventDefault;
    } else {
      item.quantity--;
      QuantityElement.textContent = "Quantité : " + item.quantity;
    }
    updateTotalPrice()
  });
  divProduct.appendChild(decreaseButton);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    CartGeneral.removeChild(divProduct);
    MesProduits = MesProduits.filter((i) => {
      return i !== item;
    });
    updateTotalPrice()
  });
  divProduct.appendChild(deleteButton);

  item.isLiked = false;

  let LikeButton = document.createElement("button");
  LikeButton.textContent = "🖤";
  LikeButton.addEventListener("click", () => {
    if (item.isLiked) {
      LikeButton.textContent = "🖤";
      item.isLiked = !item.isLiked;
    } else {
      LikeButton.textContent = "❤️";
      item.isLiked = !item.isLiked;
    }
  });
  divProduct.appendChild(LikeButton);
  
  // Ajouter l'article au panier
  CartGeneral.appendChild(divProduct);
});


//function pour calculer le prix total à chaque modification et au chargement 
function updateTotalPrice() {
  let TotalPrice = MesProduits.reduce(
    (total, currentValue) => total + currentValue.price * currentValue.quantity,
    0
  );
  let TotalPriceElement = document.getElementById("TotalPrice");
  TotalPriceElement.textContent = "Total Price : $" + TotalPrice;
}
// Appeler la fonction de mise à jour du prix total initialement
updateTotalPrice()
