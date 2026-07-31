const wishlistContainer = document.getElementById("wishlist-list");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

if (wishlist.length === 0) {

wishlistContainer.innerHTML = "<h3>Your Wishlist is Empty ❤️</h3>";

} else {

wishlist.forEach((id) => {

let mobile = mobiles.find((m) => m.id == id);

if (mobile) {

wishlistContainer.innerHTML += `

<div class="mobile-card">

<img src="${mobile.image}" class="mobile-img">

<h3>${mobile.model}</h3>

<div class="price-tag">${mobile.price}</div>

<p><b>Brand:</b> ${mobile.brand}</p>

<p><b>RAM:</b> ${mobile.ram}</p>

<p><b>Storage:</b> ${mobile.storage}</p>

<div class="card-buttons">

<button onclick="window.location.href='details.html?id=${mobile.id}'">
📄 View Details
</button>

<button onclick="removeWishlist(${mobile.id})">
❌ Remove
</button>

</div>

</div>

`;

}

});

}

function removeWishlist(id){

wishlist = wishlist.filter(item => item != id);

localStorage.setItem("wishlist", JSON.stringify(wishlist));

location.reload();

}