const products =[
    {id: 1,
    name: 'MSI RAIDER GE78HX 13VH GAMING',
    price: 300000,
    category: 'laptop',
    img: 'https://www.tradeinn.com/f/13985/139855444/msi-portatil-gaming-raider-ge78hx-13vh-066xes-17-i7-13700hx-32gb-1tb-ssd-rtx-4080.webp',
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
    img: 'https://www.gsmpro.cl/cdn/shop/files/ipad-air-2024-11-pulgadas-2.jpg?v=1718042243&width=1200',
    stock: 15,
    description:'El iPad Air cuenta con los superpoderes del chip M2 de Apple y, por primera vez, está disponible en 13 pulgadas.'},

]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 1000)
    });
};

export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(produ => produ.id === productId))
        }, 1000)
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(product => product.category === categoryId);
            console.log(filteredProducts); 
            resolve(filteredProducts);
        }, 1000);
    });
};
