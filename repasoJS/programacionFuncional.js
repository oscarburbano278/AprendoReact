//////////////// EJERCICIOS UTILIZANDO ALGUNOS METODOS///////////////

//1.Imprima el precio de cada producto usando forEach

const products = [
    { product: 'banana', price: 5 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

   //products.forEach((precio) => console.log(precio.price));

//2. Imprima los elementos del producto de la siguiente manera usando forEach .... el oprecio de banana es 5 

    //products.forEach((item) => console.log(`el precio de ${item.product} es: ${item.price}`));

//3. Calcular la suma de todos los precios usando forEach

    // let suma = 0;    
    // products.forEach((item) => {
    //     const precio = parseFloat(item.price); // Convertimos el precio a número
    //     if (!isNaN(precio)) {  // Verificamos si el valor es un número válido
    //         suma += precio;   // Sumamos el precio
    //     }
    // });
    // console.log(suma);

//4. Crea una matriz de precios usando el map y almacénala en una variable prices

    // const prices = products.map((precio) => (precio.price));
    // console.log(prices);

//5.Filtrar productos con precios

    // const productosConPrecio = products.filter((item) => {
    //     const precio = parseFloat(item.price); // Convertimos el precio a número
    //     return !isNaN(precio) && precio > 0; // Filtramos solo si es un número válido y mayor que 0
    // });

    // console.log(productosConPrecio);

//6.Utilice el método de encadenamiento para obtener la suma de los precios (mapa, filtro, reducción)
    // const sumaPrecios = products
    // .map(item => parseFloat(item.price)) // Convertimos los precios a números
    // .filter(price => !isNaN(price) && price > 0) // Filtramos solo los precios válidos
    // .reduce((acc, price) => acc + price, 0); // Sumamos los precios filtrados

    // console.log("La suma de los precios válidos es: " + sumaPrecios);

//7. Calcular la suma de todos los precios utilizando solo reducir

    // const sumaPrecios = products.reduce((acc, item) => {
    //     const precio = parseFloat(item.price); // Convertimos el precio a número
    //     if (!isNaN(precio) && precio > 0) {  // Si el precio es válido y mayor que 0
    //         return acc + precio;              // Sumamos al acumulador
    //     }
    //     return acc; // Si no es válido, devolvemos el acumulador sin cambios
    // }, 0); // 0 es el valor inicial del acumulador

    // console.log("La suma de todos los precios válidos es: " + sumaPrecios);

//8. Encuentra el primer producto que no tenga un valor de precio

    // const producto = products.find((pro) => pro.price == !Number)
    // console.log(producto);

//9. Encuentra el índice del primer producto que no tiene valor de precio

    // const producto = products.findIndex((pro) => pro.price == !Number)
    // console.log(producto);

//10. Comprueba si algunos productos no tienen un valor de precio

    // const producto = products.filter((pro) => pro.price == !Number)
    // console.log(producto);

//11.Verificar si todos los productos tienen valor de precio

    // const producto = products.filter((pro) =>  pro.price > 0);
    // console.log(producto);

//12. Explicar la diferencia entre forEach, map, filter y reduce

    // forEach: solo se usa cuando se necesita iterar en cada elemento del array o inice o en ambos 
    // Map: se utiliza cuando queremos modificar una matriz, solo se utiliza en matrices y devuelve una matriz
    // Filter: solo se utiliza en matrices y devuelve una matriz de los elementos filtrados
    // Reduce: este se utiliza solo en matrices y este devuelve un unico valor, este NO devuelve una matriz

//13. Explicar la diferencia entre filtrar, buscar y findIndex

    // la diferencia entre filter y buscar es que filter filtra segun sea el requerimiento y buscar este busca mas explicitamente con ayuda de una exprecion regular y finIndex nos devuelve el indice del primer elemento de una matriz