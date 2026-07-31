let mobileList = document.getElementById("mobile-list");

function displayMobiles(list) {

    if (!mobileList) return;

    mobileList.innerHTML = "";

    list.forEach((mobile) => {

        mobileList.innerHTML += `

        <div class="mobile-card">

            <div class="badge">NEW</div>

            <img src="images/${mobile.brand.toLowerCase()}.jpg" class="mobile-img">

            <h3>
                ${mobile.model}
                ${mobile.model === "Xiaomi 12S Pro" ? '<span class="my-phone">⭐ My Phone</span>' : ""}
            </h3>

            <div class="rating">
                ⭐ 4.8/5
            </div>

            <div class="price-tag">
                ${mobile.price}
            </div>

            <p><b>Brand:</b> ${mobile.brand}</p>
            <p><b>Display:</b> ${mobile.display}</p>
            <p><b>Processor:</b> ${mobile.processor}</p>
            <p><b>RAM:</b> ${mobile.ram}</p>
            <p><b>Storage:</b> ${mobile.storage}</p>
            <p><b>Battery:</b> ${mobile.battery}</p>
            <p><b>Camera:</b> ${mobile.camera}</p>


            <div class="card-buttons">

                <button onclick="location.href='details.html?id=${mobile.id}'">
                    📄 View Details
                </button>

                <button onclick="addToWishlist(${mobile.id})">
                    ❤️ Wishlist
                </button>

                <button onclick="location.href='compare.html'">
                    ⚖️ Compare
                </button>

            </div>

        </div>

        `;

    });

}



// BRAND FILTER

function filterBrand(brand){

    let result = mobiles.filter((mobile)=>{
        return mobile.brand === brand;
    });

    displayMobiles(result);

    let title = document.getElementById("page-title");

    if(title){
        title.innerHTML = brand + " Mobiles";
    }

}



// SHOW ALL

function showAll(){

    displayMobiles(mobiles);

    let title = document.getElementById("page-title");

    if(title){
        title.innerHTML = "All Smartphones";
    }

}



// SEARCH

function searchMobile(){

    let input = document.getElementById("searchInput");

    if(!input) return;


    let text = input.value.trim();


    if(text === "") return;


    location.href =
    "mobiles.html?search=" + encodeURIComponent(text);

}



// URL SEARCH RESULT

let params = new URLSearchParams(location.search);

let search = params.get("search");


if(search){

    let result = mobiles.filter((mobile)=>{

        return (
        mobile.model.toLowerCase().includes(search.toLowerCase()) ||
        mobile.brand.toLowerCase().includes(search.toLowerCase())
        );

    });


    displayMobiles(result);


}else{


    if(typeof mobiles !== "undefined"){
        displayMobiles(mobiles);
    }


}



// WISHLIST

function addToWishlist(id){

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];


    if(!wishlist.includes(id)){


        wishlist.push(id);


        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );


        alert("❤️ Added to Wishlist");


    }else{


        alert("Already in Wishlist");


    }

}



// DARK MODE

function toggleTheme(){


    let btn = document.getElementById("theme-btn");


    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){


        localStorage.setItem("theme","dark");


        if(btn)
        btn.innerHTML="☀️ Light Mode";


    }else{


        localStorage.setItem("theme","light");


        if(btn)
        btn.innerHTML="🌙 Dark Mode";


    }


}




document.addEventListener("DOMContentLoaded",()=>{


    let btn=document.getElementById("theme-btn");


    let theme=localStorage.getItem("theme");


    if(theme==="dark"){

        document.body.classList.add("dark");


        if(btn)
        btn.innerHTML="☀️ Light Mode";


    }else{


        if(btn)
        btn.innerHTML="🌙 Dark Mode";


    }


});



// LIVE SEARCH

function liveSearch(){


    let input=document.getElementById("searchInput");


    if(!input) return;


    let text=input.value.trim();


    if(text.length > 0){


        location.href =
        "mobiles.html?search=" + encodeURIComponent(text);


    }


}