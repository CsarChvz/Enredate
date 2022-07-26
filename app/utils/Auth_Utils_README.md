
# Auth Client

Este documento va a tenener las funciones para reusarla para toda la cuestion del control de flujo de la autenticación.

## auth.client.js

Este archivo contiene las funciones que se van a utilizar para poder ingresar y crear la cuenta del usuario.

Para esto se tiene que importar las funciones necesarias de las librerías o dependencias que se instalaron.

En este caso se esta usando **Firebase**, podemos checar su documentación [aqui](https://firebase.google.com/docs).

### initializeApp

Esta parte es importante ya que se tiene que inicializar la aplicación de firebase en nuestro proyecto con las credenciales de nuestro proyecto de firebase.
Esta se usa para poder usar las demás caracteristicas de firebase en el codigo, tanto autenticación y almacenamiento.

### getAuth()

Esta nos ayuda para crear una instancia con la aplicación ya inicializada de firebaes y así usar las funciones del servicio de ***autenticación***.

## auth

Esta instancia nos ayuda para poder acceder a la interfaz de autenticación.

**const auth = getAuth(Firebase) ;**
## Funciones de flujo de autenticación

Las siguientes funciones nos ayudan para terminar o iniciar el flujo de autenticación, estas funciones utilizan los metodos de la libreria de:

>
> firebase/auth
>

Estas son las siguientes metodos que se usan y esta es la forma de importarla:

```javascript
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  updateProfile,
} from "firebase/auth";
```

### signUp()

La siguiente funcion nos ayuda a crear a un usuario con con correo y la contraseña, aunque en este mismo metodo tambien se actualiza el nombre del usuario en el objeto de autenticación.

```javascript
async function signUp(email, password, name) {
  const token = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(token.user, { displayName: name })
  return token;
}
```

Se crea el usuario con el la funcion con los siguiente pametros:
```javascript
createUserWithEmailAndPassword(auth, email, password)
```
Esta es una funcion asíncrona, entonces la cual debe de tener la palabra reseverda ***await*** 
Ya completada esta funcion, nos devuelve un objeto con sus propiedades. Podemos encontrar este objeto en el siguiente link (link_PropiedadesObjeto)

Luego para colocar el nombre del usuario entonces se debe de usar la funcion
```javascript
updateProfile(user, {parametros})
```

Despues se devuelve el objeto usuario

### signIn()

Al igual que la funcion **signUp** toma los siguientes, toma los mismos parametros que la funcion anterior, pero solo dejando el de ___name___

```javascript
async function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
```
