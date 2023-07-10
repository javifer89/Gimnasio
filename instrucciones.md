## PREVIO

-Instalar bootstrap
-Interfaz CLIENTE (interfaces/cliente.interface.js)
 (nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni)

## Rutas y componentes

### Componentes
- pages/clientes/ListaClientes
- pages/clientes/NuevoCliente
- pages/clientes/EditarCliente

- pages/staff/Registro
- pages/staff/Login

- components/Menu( enlaces para movernos por las diferentes paginas)

### Rutas
- /clientes -> ListaClientes
- /clientes/nuevo -> NuevoCliente
- /clientes/Editar/IDCLIENTE -> EditarCliente
- /registro -> Registro
- /login -> Login


## Lista de Clientes

- Creo un servicio -> services/Clientes
- Configuramos servicio (HttpClient)
- Dentro del servicio generamos método getAll -> siguiendo las instrucciones del BACK, lanzamos la petición.
- Dentro del componente ejecutamos el método del servicio (inyectar servicio primero)
- Mostrar los clientes en el HTML

## Nuevo cliente
- Vamos a generar un formulario de tipo MODEL dentro del componente
    1. Importar dentro del módulo principal la librería ReactiveFormsModule
    2. Dentro del TS del componente creamos el FormGroup y los FormControl
    3. En el HTML creamos la estructura del formulario
    4. Conectamos el TS con el HTML
        -Objetivo: Cuando pulsemos el botón de enviar del formulario nos muestre por consola lo que hemos escrito en los campos de texto.
        -BONUS: hay que poner tantos campos dentro del formulario como valores tengamos que incluir en el body de la petición.

## Edición del cliente

- Creamos un formulario de tipo MODEL con todos los campos que requiera el cliente
