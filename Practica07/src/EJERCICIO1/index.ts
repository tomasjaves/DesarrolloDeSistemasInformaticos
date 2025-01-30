import inquirer from 'inquirer';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { Customer } from './customer';
import { Furniture } from './furniture';
import { Provider } from './provider';
import { Stock } from './stock';


// Configuración de la base de datos Lowdb
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ furniture: [], suppliers: [], clients: [] }).write();
let stock: Stock = new Stock(db.get('furniture').value())

/**
 * Función para mostrar el menú principal
 * Retorna void. no retorna nada.
 */
async function mainMenu() {
  // Menú principal
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Seleccione una acción:',
    choices: [
      'Gestionar los clientes',
      'Gestionar los muebles',
      'Gestionar los proveedores',
      'Consultar el stock',
      'Salir'
    ],
  });
  // Dependiendo de la opción seleccionada, llamamos a la función correspondiente
  switch (answer.action) {
    case 'Gestionar los clientes':
      await manageCustomers();
      break;
    case 'Gestionar los muebles':
      await manageFurniture();
      break;
    case 'Gestionar los proveedores':
      await manageProviders();
      break;
    case 'Consultar el stock':
      await ConsultarStock();
      break;
    case 'Salir':
      console.log('Saliendo...');
      process.exit();
  }
  await mainMenu();
}

/**
 * Función para agregar un cliente
 * Se encarga de agregar un cliente con los datos ingresados por el usuario y lo agrega a la base de datos
 * @returns void no retorna nada
 */
async function addCustomer() {
  // Agregamos un cliente con los datos ingresados por el usuario y lo agregamos a la base de datos
  const customer = await inquirer.prompt([
    {
      name: 'id',
      message: 'Ingrese el id del cliente:', 
    },
    {
      name: 'name',
      message: 'Ingrese el nombre del cliente:',
    },
    {
      name: 'contact',
      message: 'Ingrese el contacto del cliente:',
    },
    {
      name: 'address',
      message: 'Ingrese la dirección del cliente:',
    },
  ]);
  (db.get('clients')as any).push(customer).write();
  console.log(`Cliente agregado con éxito.`);
}

/**
 * Función para eliminar un cliente
 * Para ello, se filtra el cliente seleccionado y se actualiza la base de datos
 * Retorna void. no retorna nada.
 */
async function deleteCustomer() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();
  // Obtenemos la lista de clientes actual
  const clients: Customer[] = db.get('clients').value();
  // Si no hay clientes, informamos al usuario
  if (clients.length === 0) {
    console.log('No hay clientes para eliminar.');
    return;
  }
  // Preparamos la lista de nombres de clientes para Inquirer
  const clientNames = clients.map(client => client.name);
  // Solicitamos al usuario que seleccione el cliente a eliminar por nombre
  const { clientNameToDelete } = await inquirer.prompt({
    name: 'clientNameToDelete',
    type: 'list',
    choices: clientNames,
    message: 'Seleccione el cliente a eliminar:'
  });
  // Filtramos el cliente seleccionado y actualizamos la base de datos
  const updatedClients = clients.filter(client => client.name !== clientNameToDelete);
  db.set('clients', updatedClients).write();
  console.log(`Cliente eliminado con éxito.`);
}

/**
 * Función para buscar un cliente
 * Lo que hace es filtrar los clientes que coinciden con el término de búsqueda
 * y los muestra en consola si se encontraron
 * Retorna void. no retorna nada.
 */
async function searchCustomer() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();
  // Obtenemos la lista de clientes actual
  const clients: Customer[] = db.get('clients').value();
  // Si no hay clientes, informamos al usuario
  if (clients.length === 0) {
    console.log('No hay clientes para buscar.');
    return;
  }
  // Solicitamos al usuario que seleccione el criterio de búsqueda
  const searchType = await inquirer.prompt({
    name: 'type',
    type: 'list',
    message: 'Seleccione el criterio de búsqueda:',
    choices: ['nombre', 'contacto', 'dirección'],
  });
  // Solicitamos al usuario que ingrese el término de búsqueda
  const searchTerm = await inquirer.prompt({
    name: 'term',
    type: 'input',
    message: `Ingrese el ${searchType.type} del cliente a buscar:`,
  });
  // Filtramos los clientes que coinciden con el término de búsqueda
  let foundClients: Customer[] = [];
  switch (searchType.type) {
    case 'nombre':
      foundClients = clients.filter(client => client.name.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'contacto':
      foundClients = clients.filter(client => client.contact.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'dirección':
      foundClients = clients.filter(client => client.address.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
  }
  // Si no se encontraron clientes, informamos al usuario
  if (foundClients.length === 0) {
    console.log('Cliente no encontrado.');
    return;
  } else {
    // Si se encontraron clientes, los mostramos en consola
    console.log('Cliente(s) encontrado(s):');
    foundClients.forEach(client => {
      console.log(`ID: ${client.id}, Nombre: ${client.name}, Contacto: ${client.contact}, Dirección: ${client.address}`);
    });
  }
}

/**
 * Función para gestionar clientes
 * Se encarga de mostrar el menú de gestión de clientes y llamar a la función correspondiente
 * Retorna void. no retorna nada.
 */
async function manageCustomers() {
  // Menú de gestión de clientes
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Seleccione una acción para los clientes:',
    choices: [
      'Agregar cliente',
      'Eliminar cliente',
      'Buscar cliente',
      'Volver al menú principal'
    ],
  });
  // Dependiendo de la opción seleccionada, llamamos a la función correspondiente
  switch (answer.action) {
    case 'Agregar cliente':
      await addCustomer();
      break;
    case 'Eliminar cliente':
      await deleteCustomer();
      break;
    case 'Buscar cliente':
      await searchCustomer();
      break;
    case 'Volver al menú principal':
      return;
  }
  await manageCustomers();
}

/**
 * Función para agregar un mueble
 * Se encarga de agregar un mueble con los datos ingresados por el usuario y lo agrega a la base de datos
 * Para ello, lo que hace es generar un id aleatorio, la fecha actual, el precio del mueble, el tipo de transacción (Compra) y el mueble.
 * Retorna void. no retorna nada.
 */
async function addFurniture() {
  // Agregamos un mueble con los datos ingresados por el usuario y lo agregamos a la base de datos
  const furniture = await inquirer.prompt([
    {
      name: 'id',
      message: 'Ingrese el id del mueble:', 
    },
    {
      name: 'name',
      message: 'Ingrese el nombre del mueble:',
    },
    {
      name: 'description',
      message: 'Ingrese la descripción del mueble:',
    },
    {
      name: 'material',
      message: 'Ingrese el material del mueble:',
    },
    {
      name: 'dimensions',
      message: 'Ingrese las dimensiones del mueble:',
    },
    {
      name: 'price',
      type: 'number',
      message: 'Ingrese el precio del mueble:',
    },
    {
      name: 'quantity',
      type: 'number',
      message: 'Ingrese cuantos quiere añadir',
    }
  ]);
  (db.get('furniture') as any).push(furniture).write();
  stock.addItem(furniture, furniture.quantity)
  console.log(`Mueble agregado con éxito.`);
}

/**
 * Función para eliminar un mueble
 * Se encarga de filtrar el mueble seleccionado y actualizar la base de datos y el stock
 * Retorna void. no retorna nada.
 */
async function deleteFurniture() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();
  // Obtenemos la lista de muebles actual
  const furnitureList: Furniture[] = db.get('furniture').value();
  // Si no hay muebles, informamos al usuario
  if (!furnitureList.length) {
    console.log('No hay muebles para eliminar.');
    return;
  }
  // Preparamos la lista de nombres de muebles para Inquirer
  let furnitureNames = furnitureList.map((furniture) => furniture.name);
  furnitureNames = furnitureNames.filter((item, index) => furnitureNames.indexOf(item) === index);
  // Solicitamos al usuario que seleccione el mueble a eliminar por nombre
  const deletefurnitureinfo = await inquirer.prompt([
    {
    type: 'list',
    name: 'furnitureNameToDelete',
    choices: furnitureNames,
    message: 'Seleccione el mueble a eliminar:'
    },
    {
      type: 'number',
      name: 'quantity',
      message: '¿Cuántos desea eliminar?'
    }
  ]);

  // Filtramos el mueble seleccionado y actualizamos la base de datos
  const updatedFurnitureList = [...furnitureList];
  const furnituretodelete: Furniture = updatedFurnitureList.find(value => value.name == deletefurnitureinfo.furnitureNameToDelete) as Furniture;
  const rest = furnituretodelete.quantity - deletefurnitureinfo.quantity;
  updatedFurnitureList.forEach((item, index) => {
    if (item === furnituretodelete) {
      item.quantity == 0 ? updatedFurnitureList.splice(index, 1) : item.quantity = rest;
    }
  });
  db.set('furniture', updatedFurnitureList).write();
  stock.removeItem(furnituretodelete, rest);
  console.log(`Mueble eliminado con éxito.`);
  
}


/**
 * Función para buscar un mueble
 * Se encarga de filtrar los muebles que coinciden con el término de búsqueda
 * y los muestra en consola si se encontraron
 * Retorna void. no retorna nada.
 */
async function searchFurniture() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();
  // Obtenemos la lista de muebles actual
  const furnitureList: Furniture[] = db.get('furniture').value();
  // Si no hay muebles, informamos al usuario
  if (furnitureList.length === 0) {
    console.log('No hay muebles para buscar.');
    return;
  }
  // Solicitamos al usuario que seleccione el criterio de búsqueda
  const searchType = await inquirer.prompt({
    name: 'type',
    type: 'list',
    message: 'Seleccione el criterio de búsqueda:',
    choices: ['nombre', 'descripción', 'material'],
  });

  // Solicitamos al usuario que ingrese el término de búsqueda
  const searchTerm = await inquirer.prompt({
    name: 'term',
    type: 'input',
    message: `Ingrese el ${searchType.type} del mueble a buscar:`,
  });

  // Filtramos los muebles que coinciden con el término de búsqueda
  let foundFurniture: Furniture[] = [];
  switch (searchType.type) {
    case 'nombre':
      foundFurniture = furnitureList.filter(furniture => furniture.name.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'descripción':
      foundFurniture = furnitureList.filter(furniture => furniture.description.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'material':
      foundFurniture = furnitureList.filter(furniture => furniture.material.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
  }

  // Si no se encontraron muebles, informamos al usuario
  if (foundFurniture.length === 0) {
    console.log('Mueble no encontrado.');
  } else {
    // Si se encontraron muebles, los mostramos en consola
    console.log('Mueble(s) encontrado(s):');
    foundFurniture.forEach(furniture => {
      console.log(`ID: ${furniture.id}, Nombre: ${furniture.name}, Descripción: ${furniture.description}, Material: ${furniture.material}, Dimensiones: ${furniture.dimensions}, Precio: ${furniture.price}`);
    });
  }
}

/**
 * Función para gestionar muebles
 * Se encarga de mostrar el menú de gestión de muebles y llamar a la función correspondiente
 * Retorna void. no retorna nada.
 */
async function manageFurniture() {
  // Menú de gestión de muebles
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Seleccione una acción para los muebles:',
    choices: [
      'Agregar mueble',
      'Eliminar mueble',
      'Buscar mueble',
      'Volver al menú principal'
    ],
  });
  // Dependiendo de la opción seleccionada, llamamos a la función correspondiente
  switch (answer.action) {
    case 'Agregar mueble':
      await addFurniture();
      break;
    case 'Eliminar mueble':
      await deleteFurniture();
      break;
    case 'Buscar mueble':
      await searchFurniture();
      break;
    case 'Volver al menú principal':
      return;
  }
  await manageFurniture();
}

/**
 * Función para agregar un proveedor
 * Se encarga de agregar un proveedor con los datos ingresados por el usuario y lo agrega a la base de datos
 * Retorna void. no retorna nada.
 */
async function addProvider() {
  // Creamos un proveedor con los datos ingresados por el usuario y lo agregamos a la base de datos
  const provider = await inquirer.prompt([
    {
      name: 'id',
      message: 'Ingrese el id del proveedor:', 
    },
    {
      name: 'name',
      message: 'Ingrese el nombre del proveedor:',
    },
    {
      name: 'contact',
      message: 'Ingrese el contacto del proveedor:',
    },
    {
      name: 'address',
      message: 'Ingrese la dirección del proveedor:',
    },
  ]);
  (db.get('suppliers') as any).push(provider).write();
  console.log(`Proveedor agregado con éxito.`);
}

/**
 * Función para eliminar un proveedor
 * Se encarga de filtrar el proveedor seleccionado y actualizar la base de datos
 * Retorna void. no retorna nada.
 */
async function deleteProvider() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();
  // Obtenemos la lista de proveedores actual
  const providers: Provider[] = db.get('suppliers').value();
  // Si no hay proveedores, informamos al usuario
  if (!providers.length) {
    console.log('No hay proveedores para eliminar.');
    return;
  }
  // Preparamos la lista de nombres de proveedores para Inquirer
  const providerNames = providers.map((provider) => provider.name);
  // Solicitamos al usuario que seleccione el proveedor a eliminar por nombre
  const { providerNameToDelete } = await inquirer.prompt([{
    name: 'providerNameToDelete',
    type: 'list',
    choices: providerNames,
    message: 'Seleccione el proveedor a eliminar:'
  }]);
  // Filtramos el proveedor seleccionado y actualizamos la base de datos
  const updatedProviders = providers.filter((provider) => provider.name !== providerNameToDelete);
  db.set('suppliers', updatedProviders).write();
  console.log(`Proveedor eliminado con éxito.`);
}

/**
 * Función para buscar un proveedor
 * Se encarga de filtrar los proveedores que coinciden con el término de búsqueda
 * y los muestra en consola si se encontraron
 * Retorna void. no retorna nada.
 */
async function searchProvider() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();
  // Obtenemos la lista de proveedores actual
  const providers: Provider[] = db.get('suppliers').value();
  // Si no hay proveedores, informamos al usuario
  if (providers.length === 0) {
    console.log('No hay proveedores para buscar.');
    return;
  }
  // Solicitamos al usuario que seleccione el criterio de búsqueda
  const searchType = await inquirer.prompt({
    name: 'type',
    type: 'list',
    message: 'Seleccione el criterio de búsqueda:',
    choices: ['nombre', 'contacto', 'dirección'],
  });
  // Solicitamos al usuario que ingrese el término de búsqueda
  const searchTerm = await inquirer.prompt({
    name: 'term',
    type: 'input',
    message: `Ingrese el ${searchType.type} del proveedor a buscar:`,
  });
  // Filtramos los proveedores que coinciden con el término de búsqueda
  let foundProviders: Provider[] = [];
  switch (searchType.type) {
    case 'nombre':
      foundProviders = providers.filter(provider => provider.name.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'contacto':
      foundProviders = providers.filter(provider => provider.contact.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'dirección':
      foundProviders = providers.filter(provider => provider.address.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
  }
  // Si no se encontraron proveedores, informamos al usuario
  if (foundProviders.length === 0) {
    console.log('Proveedor no encontrado.');
  } else {
    // Si se encontraron proveedores, los mostramos en consola
    console.log('Proveedor(es) encontrado(s):');
    foundProviders.forEach(provider => {
      console.log(`ID: ${provider.id}, Nombre: ${provider.name}, Contacto: ${provider.contact}, Dirección: ${provider.address}`);
    });
  }
}

/**
 * Función para gestionar proveedores
 * Se encarga de mostrar el menú de gestión de proveedores y llamar a la función correspondiente
 * Retorna void. no retorna nada.
 */
async function manageProviders() {
  // Menú de gestión de proveedores
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Seleccione una acción para los proveedores:',
    choices: [
      'Agregar proveedor',
      'Eliminar proveedor',
      'Buscar proveedor',
      'Volver al menú principal'
    ],
  });
  switch (answer.action) {
    case 'Agregar proveedor':
      await addProvider();
      break;
    case 'Eliminar proveedor':
      await deleteProvider();
      break;
    case 'Buscar proveedor':
      await searchProvider();
      break;
    case 'Volver al menú principal':
      return;
  }
  await manageProviders();
}

/**
 * Método para consultar el stock
 * Se encarga de mostrar el menú de consulta de stock y llamar a la función correspondiente
 * Retorna void. no retorna nada.
 */
async function ConsultarStock() {
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: '¿Qué desea consultar del stock?',
    choices: [
      'Consultar stock entero',
      'Consultar mueble',
      'Ver transacciones',
      'Obtener informes de ventas y compras'
    ]
  });
  // Dependiendo de la opción seleccionada, llamamos a la función correspondiente
  switch (answer.action) {
    case 'Consultar stock entero':
      stock.printStock();
      break;
    case 'Consultar mueble':
      await printSpecificItemInfo();
      break;
    case 'Ver transacciones':
      stock.printTransactions();
      break;
    case 'Obtener informes de ventas y compras':
      await getHistoricInfo();
      break;
    default:
      break;
  }
}

/**
 * Método para obtener informes de ventas y compras
 * Se encarga de mostrar el menú de informes de ventas y compras y llamar a la función correspondiente
 * Retorna void. no retorna nada.
 */
async function getHistoricInfo() {
  const opciones = await inquirer.prompt(
    {
      name: 'dias',
      type: 'number',
      message: '¿Desde cuántos días atrás quieres mirar? (default: 0)',
      default: 0
    }
  );
  stock.getHistoricInfo(opciones.dias);  
}

/**
 * Método para imprimir la información de un mueble en específico
 * Se encarga de mostrar el menú de consulta de stock y llamar a la función correspondiente
 * @returns retorna void. no retorna nada.
 */
async function printSpecificItemInfo() {
  db.read();
  // Obtenemos la lista de muebles actual
  const furnitureList: Furniture[] = db.get('furniture').value();
  // Si no hay muebles, informamos al usuario
  if (!furnitureList.length) {
    console.log('No hay muebles para eliminar.');
    return;
  }
  // Preparamos la lista de nombres de muebles para Inquirer
  let furnitureNames = furnitureList.map((furniture) => furniture.name);
  furnitureNames = furnitureNames.filter((item, index) => furnitureNames.indexOf(item) === index);
  furnitureNames.push('Menú principal')
  // Solicitamos al usuario que seleccione el mueble a eliminar por nombre
  const itemName = await inquirer.prompt(
    {
    type: 'list',
    name: 'name',
    choices: furnitureNames,
    message: 'Seleccione el mueble que desea ver'
    },
  );
  // Filtramos el mueble seleccionado y actualizamos la base de datos
  if (itemName.name == 'Menú principal' ) {
    await mainMenu()
  }
  stock.specificItemInfo(itemName.name);
  await printSpecificItemInfo()
}

// Iniciamos el programa
mainMenu();