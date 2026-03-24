
function register(){
let user=document.getElementById("regUser").value;
let pass=document.getElementById("regPass").value;
localStorage.setItem("user",user);
localStorage.setItem("pass",pass);
alert("Registered Successfully");
window.location="login.html";
}

function login(){
let user=document.getElementById("loginUser").value;
let pass=document.getElementById("loginPass").value;

if(user===localStorage.getItem("user") && pass===localStorage.getItem("pass")){
alert("Login Successful");
window.location="catalog.html";
}else{
alert("Invalid Credentials");
}
}

function addToCart(car){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
cart.push(car);
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to cart");
}

if(document.getElementById("cartList")){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let list=document.getElementById("cartList");
cart.forEach(item=>{
let li=document.createElement("li");
li.textContent=item;
list.appendChild(li);
});
}