
const shoppingCart = []

if (!shoppingCart) {
	document.getElementById('cart-item-count').innerHTML = '0'
} else {
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
}

document.querySelector("#cart-button").addEventListener("click", function() {
	console.log(shoppingCart);
})

document.querySelector(".onion-button").addEventListener("click", function() {
  shoppingCart.push("Onion");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".tomato-button").addEventListener("click", function() {
  shoppingCart.push("Tomato");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".carrot-button").addEventListener("click", function() {
  shoppingCart.push("Carrots");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".cut-button").addEventListener("click", function() {
  shoppingCart.push("Cold Cuts");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".juice-button").addEventListener("click", function() {
  shoppingCart.push("Orange Juice");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".ice-cream-button").addEventListener("click", function() {
  shoppingCart.push("Ice Cream");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".pizza-button").addEventListener("click", function() {
  shoppingCart.push("Pizza");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});
