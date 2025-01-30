import { Furniture } from "./furniture"
import { TransactionType, Transaction } from "./transaction"

/**
 * Clase que representa el stock de una tienda de muebles
 * Se encarga de almacenar la información de los muebles en stock
 * 
 */
export class Stock {
  /**
   * Mapa que almacena los muebles en stock
   * La llave es el nombre del mueble y el valor es el mueble
   * Es privado para que no se pueda modificar desde afuera
   */
  private furniturestock: Map<string, Furniture> = new Map<string, Furniture>;
  /**
   * Arreglo que almacena las transacciones realizadas
   * Es privado para que no se pueda modificar desde afuera
   */
  private transactionshistory: Transaction[] = [];

  /**
   * Constructor de la clase Stock
   * Que se encarga de inicializar el stock con los muebles que recibe
   * Para ello, recorre el arreglo de muebles y los agrega al mapa.
   * Hace uso del método set de los mapas para agregar un nuevo elemento
   * @param items 
   */
  constructor(items: Furniture[]) {
    items.forEach((item) => {
      this.furniturestock.set(item.name, item)
    })
  }

  /**
   * Funcion para agregar un nuevo mueble al stock
   * Se encarga de agregar el mueble al mapa de muebles en stock
   * y de agregar una nueva transacción al historial.
   * Para ello, lo que hace es generar un id aleatorio, la fecha actual,
   * el precio del mueble, el tipo de transacción (Compra) y el mueble.
   * Luego hace uso del método push de los arreglos para agregar la nueva transacción
   * @param item item a agregar
   * @param quantity cantidad a agregar
   */
  addItem(item: Furniture, quantity: number): void {
    // Se agrega el mueble al stock 
    this.furniturestock.set(item.name, item);
    const id: number = Math.floor(Math.random() * 1000000);
    const date: Date = new Date();
    const price: number = item.price;
    const transactiontype: TransactionType = "Compra";
    const furniture: Furniture = item
    this.transactionshistory.push({
      id,
      date,
      price,
      quantity,
      transactiontype,
      furniture
    });
  }

  /**
   * Funcion para quitar un mueble del stock
   * Se encarga de quitar el mueble del mapa de muebles en stock.
   * Para ello, lo que hace es generar un id aleatorio, la fecha actual,
   * el precio del mueble, el tipo de transacción (Venta) y el mueble.
   * Luego hace uso del método push de los arreglos para agregar la nueva transacción
   * @param item item a quitar
   * @param quantity cantidad a quitar
   */
  removeItem(item: Furniture, quantity: number): void {
    // Se quita el mueble del stock
    this.furniturestock.set(item.name, item)
    const id: number = Math.floor(Math.random() * 1000000);
    const date: Date = new Date();
    const price: number = item.price;
    const transactiontype: TransactionType = "Venta";
    const furniture: Furniture = item
    // Se agrega la transacción al historial
    this.transactionshistory.push({
      id,
      date, 
      price, 
      quantity, 
      transactiontype, 
      furniture
    })
  }

  /**
   * Método que se encarga de imprimir el stock
   * Recorre el mapa de muebles en stock e imprime el nombre y la cantidad de cada mueble
   * Hace uso del método forEach de los mapas para recorrerlo y de console.log para imprimir
   */
  printStock() {
    this.furniturestock.forEach((item) => {
      console.log(item.name + ".............................." + item.quantity)
    });
  }

  /**
   * Método que se encarga de imprimir la información de un mueble en específico
   * Hace uso del método get de los mapas para obtener el mueble y de console.log para imprimir
   * @param name nombre del mueble a imprimir
   * @returns void no retorna nada
   */
  specificItemInfo(name: string): void {
    const item: Furniture = this.furniturestock.get(name) as Furniture;
    console.log()
    console.log("Objeto .............................. " + item.name);
    console.log("Material ............................ " + item.material);
    console.log("Precio .............................. " + item.price);
    console.log("Dimensiones ......................... " + item.dimensions);
    console.log("Cantidad en stock ................... " + item.quantity);
    console.log("Más detalles ........................ " + item.description);
    console.log("Id del objeto ....................... " + item.id);
    console.log()
  }

  /**
   * Método que se encarga de imprimir el historial de transacciones
   * Recorre el arreglo de transacciones e imprime la información de cada transacción
   * Hace uso del método forEach de los arreglos para recorrerlo y de console.log para imprimir
   * @returns void no retorna nada
   */
  printTransactions() {
    this.transactionshistory.forEach(transaction => {
      console.log();
      console.log("Id de la transacción .............. " + transaction.id);
      console.log("Fecha de la transacción ........... " + transaction.date);
      console.log("Precio ............................ " + transaction.price);
      console.log("Objeto ............................ " + transaction.furniture.name);
      console.log("Cantidad de objetos ............... " + transaction.quantity);
      console.log("Tipo de transacción ............... " + transaction.transactiontype);
      console.log();
    });
  }

  /**
   * Método que se encarga de consultar la información histórica de las transacciones
   * Recorre el arreglo de transacciones y calcula las ganancias, pérdidas y los objetos más vendidos
   * Hace uso del método forEach de los arreglos para recorrerlo y de console.log para imprimir
   * @param dias dias a consultar la información
   */
  getHistoricInfo(dias: number) {
    const miliseconds = dias * 24 * 60 * 60 * 1000;
    const thisday: Date = new Date();
    let fromday: Date = new Date(thisday.getTime() - miliseconds);
    let profit: number = 0;
    let losses: number = 0;
    let mostselled: Map<string, [Furniture, number]> = new Map<string, [Furniture, number]>;
    // Se recorre el arreglo de transacciones y se calcula la información
    this.transactionshistory.forEach(transaction => {
      if (transaction.date >= fromday) {
        console.log();
        console.log("Id de la transacción ............ " + transaction.id);
        console.log("Fecha de la transacción ......... " + transaction.date);
        console.log("Precio .......................... " + transaction.price);
        console.log("Objeto .......................... " + transaction.furniture.name);
        console.log("Cantidad de objetos ............. " + transaction.quantity);
        console.log("Tipo de transacción ............. " + transaction.transactiontype);
        console.log();
        // Si la transacción es de tipo Venta, se suma al profit y se agrega al mapa de los objetos más vendidos
        if (transaction.transactiontype == "Venta") {
          profit = profit + transaction.price;
          if (!mostselled.has(transaction.furniture.name)) {
            mostselled.set(transaction.furniture.name, [transaction.furniture, 1]);
          }
        } else if (transaction.transactiontype == "Compra") {
          losses = losses + transaction.price;
        }
      }
    })
    console.log();
    console.log("Ganancias ....................... " + profit);
    console.log("Pérdidas ........................ " + losses);
    console.log("Balance ........................ " + (profit - losses));
    console.log("Estadísticas de los objetos: ");
    // Se recorre el mapa de los objetos más vendidos
    mostselled.forEach((value, index) => {
      console.log()
      console.log("Nombre ........................ " + index);
      console.log("ventas ........................ " + value[1]);
    }) 
    console.log();
  }
}