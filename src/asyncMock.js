const products =[
    {id: 1,
    name: 'Asus Rog Strix G16 - G614JV-AS73',
    price: 300000,
    category: 'laptop',
    img: 'https://www.gsmpro.cl/cdn/shop/files/asus-rog-strix-g16-g614jv-as73.jpg?v=1697216784&width=1000',
    stock: 10,
    description:'ASUS ROG Strix G16 tiene una pantalla de 16 pulgadas con resolución Full HD. El procesador es un Intel® CoreTM i7 de 13ma Generación con una frecuencia base eficiente de núcleo de 3.6 GHz y, en modo turbo, puede alcanzar 4.9 GHz.'},

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
