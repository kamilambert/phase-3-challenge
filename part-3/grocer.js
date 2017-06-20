
let shoppingCart = []
const cartPrices = []
// cartButton = document.getElementById("cart-content")

function clearCart() {
	shoppingCart = []
	document.getElementById("cart-content").innerHTML = ""
}

function getTotal(array) {
	return Math.round((array.reduce((prev, curr) => prev + curr, 0)) * 100) / 100
}


// function makeCartList(array) {
// 	let div = document.getElementById("cart-content")
// 	let ul = document.createElement("ul")
//
// 	for (let i = 0; i < array.length; i++) {
// 		let li = document.createElement('li')
// 		li.appendChild(document.createTextNode(array[i]))
//
// 		div.appendChild(ul)
// 	}
// }
//
// makeCartList(shoppingCart)

if (!shoppingCart) {
	document.getElementById('cart-item-count').innerHTML = '0'
} else {
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
}


// document.getElementById('cart-total').innerHTML = getTotal(cartPrices)


document.querySelector("#cart-button").addEventListener("click", function() {
	document.getElementById("cart-content").innerHTML = shoppingCart
})

document.querySelector(".onion-button").addEventListener("click", function() {
  shoppingCart.push("Onion")
	cartPrices.push(1.11)
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".tomato-button").addEventListener("click", function() {
  shoppingCart.push("Tomato");
	cartPrices.push(1.56)
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".carrot-button").addEventListener("click", function() {
  shoppingCart.push("Carrots")
	cartPrices.push(2.88)
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".cut-button").addEventListener("click", function() {
  shoppingCart.push("Cold Cuts")
	cartPrices.push(1.47)
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".juice-button").addEventListener("click", function() {
  shoppingCart.push("Orange Juice")
	cartPrices.push(2.52)
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".ice-cream-button").addEventListener("click", function() {
  shoppingCart.push("Ice Cream")
	cartPrices.push(14.08)
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

document.querySelector(".pizza-button").addEventListener("click", function() {
  shoppingCart.push("Pizza")
	cartPrices.push(16.61)
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});
