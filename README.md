# TechnoWorld E-Commerce

**TechnoWorld** es una página de e-commerce de productos tecnológicos creada con React. Este proyecto tiene como objetivo proporcionar una experiencia de compra en línea fluida y moderna para usuarios interesados en comprar productos tecnológicos de última generación.

## Tecnologías y Bibliotecas Utilizadas

- **React**: Biblioteca principal para la creación de la interfaz de usuario.
- **React Bootstrap**: Para componentes de interfaz de usuario estilizados y responsivos.
- **React Router DOM**: Para gestionar la navegación y las rutas dentro de la aplicación.
- **React Toastify**: Para notificaciones y alertas dentro de la aplicación.
- **FontAwesome**: Para íconos de redes sociales y otros elementos visuales.
- **Firebase Firestore**: Base de datos NoSQL utilizada para almacenar la información de los productos y los pedidos.
- **Netlify**: Plataforma utilizada para desplegar la aplicación en producción.

## Funcionalidades Principales

- **Navegación entre categorías de productos**: Los usuarios pueden navegar por diferentes categorías de productos tecnológicos como laptops, teléfonos, y tablets.
- **Detalle del producto**: Visualiza información detallada sobre cada producto, incluyendo descripción, precio, y stock disponible.
- **Carrito de compras**: Añade y elimina productos del carrito de compras.
- **Notificaciones**: Utiliza `React Toastify` para mostrar notificaciones al agregar o eliminar productos del carrito.
- **Despliegue en producción**: Desplegado en Netlify para garantizar accesibilidad y rendimiento óptimos.

## Instalación y Ejecución

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:
    ```sh
    git clone https://github.com/AlexisCH48/ProyectoFinal-Concha-Herrera.git
    cd ProyectoFinal-Ecommerce
    ```

2. **Instala las dependencias**:
    ```sh
    npm install
    ```

3. **Configura Firebase**:
    Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase:
    ```
    VITE_apiKey=tu-api-key
    VITE_authDomain=tu-auth-domain
    VITE_projectId=tu-project-id
    VITE_storageBucket=tu-storage-bucket
    VITE_messagingSenderId=tu-messaging-sender-id
    VITE_appId=tu-app-id
    ```

4. **Estuctura de la colección de Firebase**:
    Se sugiere crear un coleccion con el siguiente orden 
    *colección*
    ```
    {
    "products"
    }
    ```
    *campos*
    ```
    { 
    "name": "***",
    "img": ****
    "price": "****",
    "stock": "****"
    "category": "****"
    "description": "****"
    }
    ```

5. **Ejecuta la aplicación**:
    ```sh
    npm start
    ```
    o
    ```sh
    npm run dev
    ```

6. **Visualiza en producción**:
    La aplicación está desplegada en [Netlify](https://super-mandazi-a24272.netlify.app/).

## Autor

Este proyecto fue creado por **Alexis Concha Herrera**.

---

¡Gracias por visitar **TechnoWorld**! Esperamos que disfrutes de tu experiencia de compra.
