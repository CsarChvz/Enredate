
# Session Client

En este archivo se tienen las funciones que se usan para poder escribir, encontrar las cosas en el SecureStore, se puede encontrar su documentación [aquí](https://docs.expo.dev/versions/v45.0.0/sdk/securestore/).

Esto nos dice "expo-secure-store provides a way to encrypt and securely store key–value pairs locally on the device. Each Expo project has a separate storage system and has no access to the storage of other Expo projects. Please note that for iOS standalone apps, data stored with expo-secure-store can persist across app installs."

Podemos usar esta librería al igual que en AsyncStorage, pero en este caso se va a usar esta libreria para poder guardar o usar como un session-storage de un navegador.

Se usan los metodos de esta libreria, ejemplos:

Primero se importa la libreria:

> ```javascript
>       import * as SecureStore from 'expo-secure-store';
> ```

- Guardar un valor:
    ```javascript
    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
    }
    ```
- Obtener un valor:
    ```javascript
    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
    }
    ```
- Eliminar un valor:
    ```javascript
    async function deleteValue(key) {
        await SecureStore.deleteItemAsync(key);
    }
    ```

## Token

Este key, va a contener el token del usuario, el cual se puede conseguir con el objecto del usuario que se logeo.

### createUserSession(Token)

Esta funcion guarda un valor con la llave ***sessionToken***

### getUserSession()

Esta funcion obtiene valor con la llave ***sessionToken***

### deleteUserSession()

Esta funcion elimina valor con la llave ***sessionToken***

## uid
Este key, va a contener el **uid** del usuario, el cual se puede conseguir con el objecto del usuario que se logeo.

### setUserUid(uid)

Esta funcion guarda un valor con la llave ***uid***

### getUserUid()

Esta funcion obtiene valor con la llave ***uid***

### deleteUserUid()

Esta funcion elimina valor con la llave ***uid***