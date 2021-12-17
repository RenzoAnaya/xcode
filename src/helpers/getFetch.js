const productos = [
    { id: 1, foto: "https://cdn.shopify.com/s/files/1/0286/1308/3188/products/MetodosNuevoRatio-15-19_590x.png?v=1589677656", price: 180, nombre: "Aeropress", categoria: "cafeteras"},
    { id: 2, foto: "https://sc04.alicdn.com/kf/H3f35fa0b264f41bf96cd461552ad897fb.jpg", price: 150, nombre: "V60", categoria: "cafeteras"},
    { id: 3, foto: "https://ae01.alicdn.com/kf/H9827de1aacdc47638e6f0f95fa867fd7h/Japan-Kalita-Hand-Made-Coffee-Pot-Set-Fan-shaped-Drip-Filter-Coffee-Glass-Pot-Three-Hole.jpg", price: 180, nombre: "Kalita", categoria: "cafeteras"},
    { id: 4, foto: "https://falabella.scene7.com/is/image/FalabellaPE/770682279_1?wid=800&hei=800&qlt=70", price: 250, nombre: "Chemex", categoria: "cafeteras"},
    { id: 5, foto: "http://cdn.shopify.com/s/files/1/0738/1409/products/tca_3.jpg?v=1594194717", price: 1350, nombre: "Sifon japonés", categoria: "cafeteras"},
    { id: 6, foto: "https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2020/05/09173832/unnamed-6-300x300.jpg", price: 40,nombre:"Zeus", categoria:"cafes"},
    { id: 7, foto: "https://4.bp.blogspot.com/-tXCc9h4povY/W9oEORtOUpI/AAAAAAAAMt4/Lf8HbGkdL38IHnniXJgC20zdTjz7JCxUACLcBGAs/s1600/Cafe-Tunki.jpg", price: 45,nombre:"Hefesto", categoria:"cafes"},
    { id: 8, foto: "https://plazavea.vteximg.com.br/arquivos/ids/1475241-450-450/1607629676984.jpg", price: 35,nombre:"Ulises", categoria:"cafes"},
    { id: 9, foto: "https://wongfood.vteximg.com.br/arquivos/ids/161157-512-512/Cafe-Molido-Leyenda-Mocca-Bolsa-250-g-479428003.jpg?v=636104988783900000", price: 40,nombre:"Hércules", categoria:"cafes"},
];

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
}, [])
