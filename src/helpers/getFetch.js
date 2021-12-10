const productos = [
    { id: 1, foto: "https://cdn.shopify.com/s/files/1/0286/1308/3188/products/MetodosNuevoRatio-15-19_590x.png?v=1589677656", price: 180, name: "Aeropress", categoria: "Cafeteras"},
    { id: 2, foto: "https://sc04.alicdn.com/kf/H3f35fa0b264f41bf96cd461552ad897fb.jpg", price: 150, name: "V60", categoria: "Cafeteras"},
    { id: 3, foto: "https://ae01.alicdn.com/kf/H9827de1aacdc47638e6f0f95fa867fd7h/Japan-Kalita-Hand-Made-Coffee-Pot-Set-Fan-shaped-Drip-Filter-Coffee-Glass-Pot-Three-Hole.jpg", price: 180, name: "Kalita", categoria: "Cafeteras"},
    { id: 4, foto: "https://falabella.scene7.com/is/image/FalabellaPE/770682279_1?wid=800&hei=800&qlt=70", price: 250, name: "Chemex", categoria: "Cafeteras"}
];

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})

