const firstMobile = document.getElementById("first-mobile");
const secondMobile = document.getElementById("second-mobile");


mobiles.forEach((mobile)=>{


firstMobile.innerHTML += `

<option value="${mobile.model}">
${mobile.model}
</option>

`;


secondMobile.innerHTML += `

<option value="${mobile.model}">
${mobile.model}
</option>

`;

});




function compareMobiles(){


let mobile1 = mobiles.find((mobile)=>{

return mobile.model === firstMobile.value;

});


let mobile2 = mobiles.find((mobile)=>{

return mobile.model === secondMobile.value;

});



let result = document.getElementById("compare-result");



result.innerHTML = `


<div class="compare-card">


<img src="${mobile1.image}" class="mobile-img">


<h3>${mobile1.model}</h3>

<p><b>Price:</b> ${mobile1.price}</p>

<p><b>Processor:</b> ${mobile1.processor}</p>

<p><b>RAM:</b> ${mobile1.ram}</p>

<p><b>Storage:</b> ${mobile1.storage}</p>

<p><b>Battery:</b> ${mobile1.battery}</p>

<p><b>Camera:</b> ${mobile1.camera}</p>


</div>




<div class="compare-card">


<img src="${mobile2.image}" class="mobile-img">


<h3>${mobile2.model}</h3>

<p><b>Price:</b> ${mobile2.price}</p>

<p><b>Processor:</b> ${mobile2.processor}</p>

<p><b>RAM:</b> ${mobile2.ram}</p>

<p><b>Storage:</b> ${mobile2.storage}</p>

<p><b>Battery:</b> ${mobile2.battery}</p>

<p><b>Camera:</b> ${mobile2.camera}</p>


</div>


`;

}