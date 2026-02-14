//here we using fetch 
// to call api using fetch 1. promisses [] 2. data collect karne ke liye [then ] use hota
//synchro asynchro
let products = []; //null array
let cart = [];

fetch('https://dummyjson.com/products')
.then(res => res.json())   // arrow function part
.then(
    data => {
        products = data.products;
        getCategories();
        showProducts(products);
        renderCart();
    }
);

// function getCategories(){
//     const categories = [...new                              //[...new] ("spread operator") learn what is this [used to add new element]
//         Set(products.map(p => p.category))];
//         const catDiv = document.getElementById("categories") ;

//         catDiv.innerHTML = `<button onclick='showProducts(products)'>All </button>`;
//         categories.forEach(cat => {
    
//             catDiv.innerHTML += `<button onclick="filterCategory('${cat}')" >${cat}</button>`;
//         });
        
// }

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCategories() {
    const categories = [...new // to add a new element 
        Set(products.map(p => p.category))];  //set avoid duplication
    const catDiv = document.getElementById("categories");
        console.log(categories)
    let buttonsHTML = `<button onclick='showProducts(products)'>All</button>`;

    categories.forEach(cat => {
        buttonsHTML += `<button onclick="filterCategory('${cat}')">${capitalizeFirst(cat)}</button>`;
        console.log(buttonsHTML)
    });

    catDiv.innerHTML = buttonsHTML;
}

function filterCategory(catname){
    const filtered = products.filter(p => p.category === catname);
    showProducts(filtered);
}

function showProducts(list){
    var proDiv = document.getElementById("products");
    proDiv.innerHTML = '';
    list.forEach(p => {
        proDiv.innerHTML += `<div class='product'>
        <img src='${p.thumbnail}'>
        <h4>${p.title}</h4>
        <h4>${p.price}</h4>
        <button onclick='addToCart(${p.id})'>Add To Cart</button>
        </div>`;
    });
}


function addToCart(id){
    const product = products.find(p => p.id === id);
    const item = cart.find(c => c.id === id );
    if(item){
        item.qty++;
    }else{
        cart.push({id,title : product.title, price: product.price, qty : 1});
    }
    renderCart();
    
}

function renderCart(){
    const cartBody = document.getElementById("cartBody");
    cartBody.innerHTML = '';
    let total= 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        cartBody.innerHTML += `<tr>
                                <td>${item.title}</td>
                                <td>
                                <button onclick='minusQty(${item.id})'> - </button>
                                ${item.qty}
                                <button onclick='plusQty(${item.id})'> + </button><td/>
                                <td>${item.price}</td>
                                <td><button onclick='removeItem(${item.id})'>𐤕</button></td>
                                </tr> `;
    });
    document.getElementById("total").innerText = Math.round(total);
    localStorage.setItem("cart" ,JSON.stringify(cart));
    // console.log(JSON.stringify(cart))
}
function minusQty(id){
    let item = cart.find(c => c.id === id);
    item.qty--;
    if(item.qty <= 0){
        cart = cart.filter(c => c.id !== id);
    }
    savedCart();
    console.log(item);
}

function plusQty(id){
    let item = cart.find(c => c.id === id)
    item.qty++;
    savedCart();
}

function removeItem(id){
    const con = confirm("Are you sure!");
    if(con){
    cart = cart.filter(c => c.id !== id);
    }
    savedCart();
}

function savedCart(){
    localStorage.setItem("cart",JSON.stringify(cart));
    renderCart();
}


window.onload = () => {
    const savedCart = localStorage.getItem("cart");
    if(savedCart){
        cart = JSON.parse(savedCart);
        renderCart();
    }
}





//assignment first letter should be capital
// json.encode()
// json.decode()
// json.parse()
// json.stringify()
// why we used innerHTML





