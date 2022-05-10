![](./%F0%9F%91%A8_%F0%9F%92%BB_Ecommerce__Ruido_Negro_%F0%9F%91%A9_%F0%9F%92%BB.png)
![GitHub repo size](https://img.shields.io/github/repo-size/JeanVittory/TMI)
![npm](https://img.shields.io/npm/v/npm)

# Ecommerce Ruido Negro
Ruido Negro es una aplicación de compras online desarrollada para la banda de rock [Red Sun Cult](https://redsuncult.bandcamp.com/) en la cual el usuario puede encontrar toda la merch actualizada de la banda, realizar compras y registrar su correo para recibir newsletters.

## Tech
Las dependecias usadas para el desarrollo de esta aplicación fueron:
- [React v.17.0](https://es.reactjs.org/) - Framework de JS para el desarrollo de la UI.
- [Firebase v.9.6](https://firebase.google.com/) - Servidor de Google implementado para alojar los datos necesarios para el funcionamiento de la aplicación.
- [Tailwind v.3.0](https://tailwindcss.com/) - Framework CSS usado por su implementación de utilty classes dentro del mismo HTML o JSX en el caso de react facilitando el flujo de trabajo y la rápidez con la que se puede maquetar y personalizar los diseños. 
- [React Toastify v.8.2](https://www.npmjs.com/package/react-toastify) - Por la sencillez en su implementación y estética apropiada para el proyecto. Toastify notificara al usuario alertas que le guiaran para una mejor experiencia en el uso de la aplicación.
- [SpinnersReact v.1](https://www.npmjs.com/package/spinners-react) - Una pequeña libreria para la implementación de spinners que acompañen la interfaz mientras las peticiones fetch van realizándose
- [React-Router-Dom v.6.3](https://reactrouter.com/docs/en/v6/getting-started/overview) - Libreria usada para la navegabilidad de la aplicación como SPA. 


## Instalación

Ruido Negro fue desarrollado usando [Node.js](https://nodejs.org/es/) v.18.1 como entorno de ejecución, así que se recomienda la instalacion del mismo para poder correr la aplicación. 

Una vez intalado NodeJs se recomienda clonar el repositorio con

```sh 
git clone https://github.com/JeanVittory/TMI
```

Seguido de lo anterior y, usando el manejador de paquetes de node [npm](https://www.npmjs.com/), se ejecuta la aplicación con el siguiente comando: 

```sh
npm run start
```

## Componentes
En este apartado se encontrará una breve explicación del funcionamiento de cada uno de los componentes que forman la aplicación:

### App
Este componente es el núcleo central de la aplicación el cual cuenta con la importación  de los componentes `<BrowserRouter/>`, `<Routes/>` y `<Route/>` de la libreria `react-router-dom`. 

Por otro lado se conforma con la importación de los componentes `<NavBar/>`,`<ItemListContainer/>`, `<ItemDetailContainer/>`,`<Footer/>`, `<CartContainer/>`, `<OrderConfirmed/>`, `<Error404/>` y `<Checkout/>`. Siendo todos a excepción de `NavBar` y `Footer` rutas de navegación administradas por react-router-dom.

Por último y no menos importante se encuentra una importación del componente `<AddCartProvider/>` como proveedor del context de la aplicación y repartido desde `<App/>` hacia componentes hijos.

### ItemListContainer
Este componente se encarga de ser el contenedor de los productos de la aplicación en la vista general. Cuenta con 2 estados `products` y `categories` los cuales se encargan de almacenar los productos y categorias que provee la base de datos firestore.

A través de 2 useEffect este componente realiza dos peticiones a firestore: Categorias disponibles que se ejecutan a la carga del documento y productos disponibles que tiene como dependecia el useParams `categoryName` el cual es validado dentro del mismo useEffect en la linea 31 para cargar en el componente ya sea los productos filtrados por categorias o todos los productos disponibles. Estos dos useEffect finalizan seteando los estados categories y products respectivamente.

Por último, en la etapa de renderizado, el componente a través de un `Array.map` itera en el estado products con el fin de desplegar cada uno de los productos dentro de otro componente denominado `<Products/>` el cual termina almacenando como props cada una de las propiedades recibidas desde firestore en la linea 35.

### ItemDetailContainer
Este componente tiene como funcion mostrar de manera detallada el producto seleccionado desde el `ItemListContainer/>` permitiendole al usuario visualizar más fácilmente tanto su imagen como sus especificaciones. 

Inicia con un estado `products` que almacenara en su interior lo que recibe desde firestore, petición que es ejecutada desde el useEffect de la línea 13. A su vez cuenta con un useParams que contiene el productId que proviene, dinamicamente, en cada imágen del componente `<ProductPicture/>`.

En la etapa de renderizado este componente despliega lo almacenado en el estado `product` pasando su contenido como props del componente `<ItemDetail/>`.

### CartContainer
Este componente tiene como funcionalidad principal aislar lo máximo posible la lógica del componente `<Cart/>` el cual se encaragará de mostrar dedicadamente la maquetación más no la sumatoria de los precios de cada producto agregado en `<ItemListContainer/>` o `<ItemDetailContainer/>`.

Este componente inicia con un estado que almacena el resultado de la sumatoria ejecutada en el useEffect de la línea 14 para lograr calcular el subTotal de toda la compra del usuario. Por otro lado se invoca el estado `productsAdded` almacenado en el context de la aplicación con el fín de ser usado en la etapa de renderizado del componente.

Ya en la etapa de dicho renderizado se ejecuta un return condicional a partir de la longitud del estado productsAdded en dónde se busca ya sea renderizar un mensaje de 'You have no items in your shopping cart' para el caso de que no hayan productos en dicho estado o si bien se renderice toda la maquetación que entre sus apartes se encuentra también la renderización del componente `<Cart/>` el cual sera renderizado desde un `Array.map` segun la cantidad de items que existan en en el estado `productsAdded`.

### NavBar

Este componente hace parte de la área estática de la aplicación y se desempeña como un *Stateless Component* ya que solo se encarga de renderizar el `<Logo/>` y el `<Nav/>` componentes que conforman en `<NavBar/>`.

### Logo

Este componente también es un *Stateless Component* ya que solo se encarga de renderizar el logo y encapuslar la imagen en un `<Link/>` de `react-router-dom` que tiene como destino la pantalla inicial de la aplicacion es decir el `<ItemListContainer/>`

### Nav

Este componente se encarga de renderizar condicionalmente a partír del tamaño del viewport de usuario los componentes correspondientes para la navegabilidad segun el diseño de la aplicación.

Las medidas del viewport se obtendran a partir del useEffect de la línea 12 en el cual a través de un `window.addEventListener('resize')` se ejecuta la función `handleResize` la cual setea el estado del componente `viewportDimension` con su respectivo `window.innerWidth`.

Ahora bien, hemos definido 730px como breakpoint para que la validacion ejecute un resultado ya sea `true` si es menor o igual a dicho valor o `false` para el caso contrario. Los componentes `<BuguerMenu/>` y `<NavMenuSmall/>` se renderizaran para el primer caso y solamente `NavMenu/>` para el segundo caso.

Las funciones finales `handleOpenPanel` y `handleClosePanel`, que setean el estado `viewPanel` a `true` o `false`, y que de acuerdo a dicho valor desplegaran o no el panel de navegabilidad en dispositivos moviles, se pasaran como props a los componentes `<BuguerMenu/>` y `<NavMenuSmall/>` que hacen parte del diseño para dicho tipo de dispositivos.

### NavMenu

Este componente hace parte de los *Stateless Components* de la aplicación ya que solo se encargara de distribuir a través del uso de `NavLink` de `react-router-dom` la navegación a HOME, FAQS y CONTACT.

### NavMenuSmall

Este componente es exclusivo para los dispositivos con un viewport por debajo de los 730px. Cumple con la funcionalidad de permitirle al usuario navegar a tráves de las opciones HOME, FAQS y CONTACT.

La lógica del componente inicia con un estado `positionPanel` que almacena la posición del panel dentro de la pantalla con el fín de mostrarlo o no con un efecto de slide. Este estado se actualizará a través de un useEffect que ejecutará los respectivos `setPositionPanel` despues de validar si la propiedad `viewPanel` proveniente del componente padre `<Nav/>` se encuentra en `false` o `true`.

### BurguerMenu

Este componente hace parte de los *Stateless components* y su función es renderizar una imagen .svg en forma de *burguer menu* que al recibir un click ejecutará la función `handleOpenPanel` la cual actualizara el estado `viewPanel` en el componente `<Nav/>` con el fín de alterar la posicion del panel de navegación `<NavMenuSmall/>`.

### CartWidget

Este componente más allá de sólo mostrar el .svg que ilustra un cart tiene como lógica, a través de un useEffect que ejecuta la función `totalQuantity`, sumar la cantidad de productos dentro del estado `productsAdded` obtenido a través del `useContext`. Este estado `productsAdded` es iterado a través de un `Array.map` con el fin de obtener en un formato de `Array` solo los valores del objeto que representan las cantidades de cada producto agregado por el usuario para luego, por medio de un `Array.reduce` ejecutar la sumatoria de dichos valores. El resultado obtenido en dicho `Array.reduce` es almacenado en el estado del componente <CartWidget/>  `totalQuantity` para luego ser renderizado.

Adjunto a lo anterior el componente cuenta con un renderizado condicional el cual tiene como función solo mostrar el componente cuando el estado `productsAdded` contiene productos en su interior.

### Footer
Este es el componente de tipo *Stateless component* más grande de la aplicación ya que sólo cumple con la función de desplegar de manera informativa y estática los datos de redes sociales junto con un pequeño formulario el cual tiene como fín recoger el correo electrónico de los usuarios interesados en recibir información adicional de nuevos productos, promociones etc.