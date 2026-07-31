const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const mobile = mobiles.find(m => m.id === id);

const details = document.getElementById("mobile-details");

if (mobile) {

details.innerHTML = `

<img src="${mobile.image}" class="mobile-img">

<h2>${mobile.model}</h2>

<div class="price-tag">${mobile.price}</div>

<table class="details-table">

<tr>
<td><b>Brand</b></td>
<td>${mobile.brand}</td>
</tr>

<tr>
<td><b>Display</b></td>
<td>${mobile.display}</td>
</tr>

<tr>
<td><b>Processor</b></td>
<td>${mobile.processor}</td>
</tr>

<tr>
<td><b>RAM</b></td>
<td>${mobile.ram}</td>
</tr>
<tr>
<td><b>Storage</b></td>
<td>${mobile.storage}</td>
</tr>

<tr>
<td><b>Battery</b></td>
<td>${mobile.battery}</td>
</tr>

<tr>
<td><b>Camera</b></td>
<td>${mobile.camera}</td>
</tr>

</table>

<button onclick="history.back()" class="compare-btn">

⬅ Back

</button>

`;

}else{

details.innerHTML = `

<h2>
Mobile Not Found
</h2>

<p>
This mobile does not exist.
</p>

`;

}