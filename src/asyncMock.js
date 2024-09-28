const products =[
    {id: 1,
    name: 'MSI RAIDER GE78HX 13VH GAMING',
    price: 300000,
    category: 'laptop',
    img: 'https://b2482810.smushcdn.com/2482810/wp-content/uploads/2024/09/GE78-HX.jpg?lossy=2&strip=1&webp=1',
    stock: 10,
    description:'MSI RAIDER GE78HX 13VH GAMING Core™ i9-13980HX 1TB SSD 32GB 17″ (2560×1600) 240Hz WIN11 NVIDIA® RTX 4070 8192MB BLACK Backlit ENGKeyboard'},

    {id:2,
    name: 'Zte Nubia Red Magic 9 Pro',
    price: 250000,
    category: 'telefono',
    img: 'https://www.gsmpro.cl/cdn/shop/files/zte-nubia-red-magic-9-pro.png?v=1718040991&width=500',
    stock: 35,
    description:'El Nubia Red Magic 9 Pro es un teléfono de alta gama diseñado con materiales de primera calidad como aluminio y vidrio curvado Corning Gorilla Glass 5. Su pantalla AMOLED de 6.80 pulgadas y resolución FHD+ (1116-2480) con una tasa de refresco de 120 Hz y brillo máximo de 1600 cd/m².'},

    {id:3,
    name: 'iPad Air (M2)',
    price: 500000,
    category: 'tablet',
    img: 'https://d1aqw5mz0wngqe.cloudfront.net/images/spree/images/2464850/attachments/large/Apple_iPad_Air_11_M2_WiFi_Blue_1.jpg?1715280283',
    stock: 15,
    description:'El iPad Air cuenta con los superpoderes del chip M2 de Apple y, por primera vez, está disponible en 13 pulgadas.'},

]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}