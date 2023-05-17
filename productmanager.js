class ProductManager {
    constructor(){
        this.products = [];
    }

    validateId(){
        if(this.products.length){
            let idMayor = this.products.reduce((p,c) => {
                return c.id > p ? c.id : p;
            }, 0);
            return idMayor +1;
        }
        return 1;
    }

    getProducts(){
        return this.products
    }

    addProduct(obj){
        let { title, description, price, thumbnail, code, stock } = obj
        
        //Verifica que todos los campos sean obligatorios
         if (title == "" || description =="" || price =="" || thumbnail ==""|| code=="" || stock==""){
            return console.error("No puedes dejar un campo vacio, completalos a todos.")
        }
        
        //verifica si ya hay un producto con el mismo code.
        let verifyCode = this.products.some(producto => producto.code ===code)
        if (verifyCode){
            return console.error("Ya hay un producto registrado con el mismo Code")
        }

        this.products.push({
            id: this.validateId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
    }

    getProductById(productCode){
        let operacion = this.products.some(producto => producto.code ===productCode)
        operacion ? console.log(`Producto ID:${productCode} encontrado!`) : console.error("Not found")      
    }

}

/*Testing del entregable!*/

//Se crea la instancia
let tienda = new ProductManager()
//Se llama a "getProducts" y me devuelve el arreglo vacio.  
console.log(tienda.getProducts())
//Llamo a "addProduct" y agrego un producto nuevo.
tienda.addProduct({
    title: "producto prueba",
    description:"Este es un producto prueba",
    price:200,
    thumbnail:"Sin imagen",
    code:"abc123",
    stock:25
});
//Se llama a "getProducts" y me muestra el producto agregado con la ID 1
console.log(tienda.getProducts())
//Llamo a "addProduct" y verifica que el code ya existe, dando asi un error.
tienda.addProduct({
    title: "producto prueba",
    description:"Este es un producto prueba",
    price:200,
    thumbnail:"Sin imagen",
    code:"abc123",
    stock:25
});

//llamo a getProductById con el parm("Code") del producto y me devuelve si esta o no
tienda.getProductById("abc123")