# Utils Folder

En esta carpeta se encuentran los archivos los cuales se usan para poder hacer la interacción entre el servidor backend y el front.

- Firebase Authentication
- ExpoSecure

Son los servicios que se usan para obtener y hacer la interacción de la aplicación con el usuario

## auth.client.js

Se tienen varias funciones las cuales se usan para manejar el flujo de la autenticación del usuario y su interacción con la aplicación. 

Esta si se puede decir es la primera capa que se tiene para poder interactuar con la aplicación. Ya que a la hora de ingresar, nos devuelve un objeto del usuario, el cual debemos de usar para poder represar los datos en la aplicación e integrar con los datos que se manejan.

#### Documentación del archivo

[auht.client.js](https://linktodocumentation)


## session.client.js

Se usa la librería de expo "ExpoSecure" la cual es similar a la de AsyncStorage, pero esta es más segura, ya que se guardan datos confidenciales. En dado caso podremos usar la librería AsyncStorage en este archivo para datos que no sean de importancia en cuestión de seguridad del usuario.

#### Documentación del archivo

[session.client.js](https://linktodocumentation)
