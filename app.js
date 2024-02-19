const root=document.querySelector('#root')

const url='https://fakestoreapi.com/products/'


async function getProducts(){ 
    const res=await fetch(url) 
    const data= await res.json() 
    console.log(data); 
    // showProducts(data) 
} 
getProducts() 
 
// function showProducts(arr){ 
//     trending.innerHTML='' 
//     for (const product of arr) { 
//         trending.innerHTML+=` 
//         <div class="card" style="width: 18rem; " onclick='getItemById(${product.id})'> 
//         <img class="card-img-top" src="${product.image}" alt="Card image cap"> 
//         <div class="card-body"> 
//           <h5 class="card-title">${product.title}</h5> 
//           <p class="card-text">${product.category}</p> 
//           <h6>${product.price}$</h6> 
//         </div> 
//       </div> 
//         ` 
//     } 
// } 
