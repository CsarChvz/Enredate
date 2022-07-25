# Auth Screens

Pantallas para la autenticación.

Se tienen varias pantallas para la autenticación.
Podemos notar que las pantallas de Register estan dentro de una carpeta separada a las otras, esto así para tener mejor orden
en la estructura del proyecto.

Las otras pantallas que no estan separadas son así ya que su "control de flujo" es único, ya que de esas no se necesitan más pantallas para completar el fujo.

Por ejemplo de la pantalla de "Welcome" vamos a elegir hacia donde queremos ir, en este caso puede ser ya sea a la pantalla de **Login** o a la de **Register**.

De igual manera en la pantalla de login, la cual solo se tiene que ingresar los datos y pasar al stack de "Home" o al de "Drawer" que es el Stack principal para movernos entre pantallas.
Pero se tienen que seguir el flujo de autenticación de react navigation para tener buenas practicas y buen uso de esta librería.

## Bienvenida

Esta pantalla va a ser la pantalla de Bienvenida, podremos cambiar del diseño que ya se tenía a uno mejor optimizado y más llamativo.

Este va ser una simple pantalla de Bienvenida la cual va a tener dos botones para poder elegir que hacer, uno sería **Login** y el otro sería **Register**, estos nos llevarían al flujo correspondiente.
-- Colocar el documento si hay uno --

[Login.js](https://linktodocumentation)

## Inicio de sesión

Este login va a ser como un "login" cualquiera, ya que se va a pedir (por el momento) solo dos sencillos datos para ingresar.
Estos van a ser "email" y "password", los cuales van a ser usados para checar si existe una cuenta registrada con ese correo y si la contraseña coincide.

Tenemos en este caso definir si usar el estilo de codigo del "backend" de remix, el cual sería "logearse" y tomar el token que nos da, y así guardarlo en el "AsyncStorage"
Todo esto para mantener la sesión iniciada en el telefono y con el token, nada más usar "firebase-admin" y mandar a llamar a los datos. Esto para guardar, si es que se usa "react-context" datos relativamente importantes.

-- Colocar el documento si hay uno --

[Login.js](https://linktodocumentation)

## Registro de nuevo usuario

Estas pantallas o todo este conjunto va a estar adentro de una carpeta que se llama "RegisterScreens", las cuales es un conjunto
de pantallas que sirve para la creación del usuario según que eliga.

Para poder ver la explicación de sus documentos y la idea se puede ir al siguiente [link]() // Referenciar al "readme" de RegisterScreens -- El principal
