// DOM Accessing
let adi = window.document.getElementById("first_name");
<<<<<<< HEAD
<<<<<<< HEAD
// window.console.log(adi);
=======
window.console.log(adi);
>>>>>>> 6bc9f02666402e340e5bd4c4ea45e007d4eb3d1a
=======
// window.console.log(adi);
>>>>>>> 6b85e393fe47d79e547472d830d1a33285eb64e5
// let firstNameByClass = document.getElementsByClassName("input--style-4")[0];
// console.log(firstNameByClass);
// let firstNameByName = document.getElementsByName("first_name")[0];
// console.log(firstNameByName);
// let firstNameByTagName = document.getElementsByTagName("input")[0];
// console.log(firstNameByTagName);
// let firstNameByQuerySelectorId = document.querySelector("#first_name");
// console.log(firstNameByQuerySelectorId);
// let firstNameByQuerySelectorClass = document.querySelector(".input--style-4");
// console.log(firstNameByQuerySelectorClass);
// let firstNameByQuerySelectorAllClass = document.querySelectorAll(".input--style-4")[0];
// console.log(firstNameByQuerySelectorAllClass);

let soyadi = document.getElementById("last_name");

//property vs. attribute
// let idAttr = firstNameById.getAttribute("id");
// console.log(idAttr);

// let classAttr = firstNameById.getAttribute("class");
// console.log(classAttr);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6b85e393fe47d79e547472d830d1a33285eb64e5
// adi.setAttribute("class", "redColorClass");
// adi.setAttribute("class", "redColorClass");

adi.classList.add("redColorClass");
soyadi.classList.add("redColorClass");
<<<<<<< HEAD
=======
// firstNameById.setAttribute("class", "redColorClass");
>>>>>>> 6bc9f02666402e340e5bd4c4ea45e007d4eb3d1a
=======
>>>>>>> 6b85e393fe47d79e547472d830d1a33285eb64e5

// let classProp = firstNameById.className;
// console.log(classProp);

adi.value = "Ryan";
soyadi.value = "Daniel";

// // 🔥🔥🔥🔥🔥 FULL NAME(camelcase =>RYAN DANIEL) and E-MAIL(lovercase => ryan.daniel@clarusway.com) CHALLENGE  🔥🔥🔥🔥🔥

let fullAd = document.getElementById("full_name");
let email = document.getElementsByName("email")[0];
<<<<<<< HEAD
<<<<<<< HEAD
// console.log(adi);
fullAd.value = `${adi.value.toUpperCase()} ${soyadi.value.toUpperCase()}`;
// console.log(fullAd.value);
email.value = `${adi.value.toLowerCase()}.${soyadi.value.toLowerCase()}@clarusway.com`;
// console.log(email.value);

//innerText, innerHTML, textContent 

let headerDiv = document.getElementById("headerId");
console.log(headerDiv);
// console.log(headerDiv.innerHTML);
// console.log(headerDiv.innerText);
// console.log(headerDiv.textContent);

// headerDiv.innerText = `<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />`;

// headerDiv.innerHTML += `<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />`;

let logo = document.createElement("img");
logo.setAttribute("src", "img/logo.png");
logo.setAttribute("class", "headerLogo");
// logo.style.width = "50px";
// logo.style.height = "50px";
// logo.className = "headerLogo";
// logo.classList.add("headerClass");
// logo.classList.remove("headerClass");
console.log(logo.classList);

// console.log(logo);
headerDiv.appendChild(logo);

let pathList = ["FullStack", "AWS/DEVOPS", "Data Science", "CyberSecurity"];
let pathSelectBox = document.querySelector("#paths");
//for
// for(let i = 0; i<pathList.length; i++){
//     pathSelectBox.innerHTML += `<option>${pathList[i]}</option>`;
// }
//for of
// for(item of pathList){
//     pathSelectBox.innerHTML += `<option>${item}</option>`;

// }
//foreach
pathList.forEach((element)=>{
    pathSelectBox.innerHTML += `<option>${element}</option>`
});
//=======
console.log(adi);
=======
// console.log(adi);
>>>>>>> 6b85e393fe47d79e547472d830d1a33285eb64e5
fullAd.value = `${adi.value.toUpperCase()} ${soyadi.value.toUpperCase()}`;
// console.log(fullAd.value);
email.value = `${adi.value.toLowerCase()}.${soyadi.value.toLowerCase()}@clarusway.com`;
// console.log(email.value);

//innerText, innerHTML, textContent 

let headerDiv = document.getElementById("headerId");
console.log(headerDiv);
// console.log(headerDiv.innerHTML);
// console.log(headerDiv.innerText);
// console.log(headerDiv.textContent);

// headerDiv.innerText = `<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />`;

// headerDiv.innerHTML += `<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />`;

let logo = document.createElement("img");
logo.setAttribute("src", "img/logo.png");
logo.setAttribute("class", "headerLogo");
// logo.style.width = "50px";
// logo.style.height = "50px";
// logo.className = "headerLogo";
// logo.classList.add("headerClass");
// logo.classList.remove("headerClass");
console.log(logo.classList);

// console.log(logo);
headerDiv.appendChild(logo);

let pathList = ["FullStack", "AWS/DEVOPS", "Data Science", "CyberSecurity"];
let pathSelectBox = document.querySelector("#paths");
//for
// for(let i = 0; i<pathList.length; i++){
//     pathSelectBox.innerHTML += `<option>${pathList[i]}</option>`;
// }
//for of
// for(item of pathList){
//     pathSelectBox.innerHTML += `<option>${item}</option>`;

// }
//foreach
pathList.forEach((element)=>{
    pathSelectBox.innerHTML += `<option>${element}</option>`
});