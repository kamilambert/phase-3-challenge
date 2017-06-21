let shoppingCart = []
let total = 0
let cartItemCount = 0

function clearCart() {
	shoppingCart = []
	document.getElementById("cart-content").innerHTML = ""
	document.getElementById("total").innerHTML = 0
}

function buildShoppingList(array) {
  let list = document.getElementById("shopping-list")
  for (let i = 0; i < array.length; i++) {
    let p = document.createElement('p')
    p.appendChild(document.createTextNode(array[i]))
    list.appendChild(p)
  }
}

document.querySelector("#cart-button").addEventListener("click", function() {
	buildShoppingList(shoppingCart)
	document.getElementById("total").innerHTML = total
})

document.querySelector(".onion-button").addEventListener("click", function() {
  shoppingCart.push(["Onion", "$1.11"])
	total += 1.11
	document.getElementById("cart-item-count").innerHTML = shoppingCart.length
});

document.querySelector(".tomato-button").addEventListener("click", function() {
  shoppingCart.push(["Tomato", "$1.56"]);
	total += 1.56
	document.getElementById("cart-item-count").innerHTML = shoppingCart.length
});

document.querySelector(".carrot-button").addEventListener("click", function() {
  shoppingCart.push(["Carrots", "$2.88"])
	total += 2.88
	document.getElementById("cart-item-count").innerHTML = shoppingCart.length
});

document.querySelector(".cut-button").addEventListener("click", function() {
  shoppingCart.push(["Cold Cuts", "$1.47"])
	total += 1.47
	document.getElementById("cart-item-count").innerHTML = shoppingCart.length
});

document.querySelector(".juice-button").addEventListener("click", function() {
  shoppingCart.push(["Orange Juice", "$2.52"])
	total += 2.52
	document.getElementById("cart-item-count").innerHTML = shoppingCart.length
});

document.querySelector(".ice-cream-button").addEventListener("click", function() {
  shoppingCart.push(["Ice Cream", "$14.08"])
	total += 14.08
	document.getElementById("cart-item-count").innerHTML = shoppingCart.length
});

document.querySelector(".pizza-button").addEventListener("click", function() {
  shoppingCart.push(["Pizza", "$16.61"])
	total += 16.61
	document.getElementById("cart-item-count").innerHTML = shoppingCart.length
});
