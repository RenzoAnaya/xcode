const Oneproduct = [
    {   id: 1, 
        foto: "https://cdn.shopify.com/s/files/1/0286/1308/3188/products/MetodosNuevoRatio-15-19_590x.png?v=1589677656", 
        price: 180, 
        nombre: "Aeropress", 
        categoria: "Cafeteras"},
];



const getOneProduct = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(Oneproduct)
    }, 3000)
});

export default getOneProduct
