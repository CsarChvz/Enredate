# Drawer Navigation

**DrawerNavigation.js**

## Uso

Este documento es usado como navegador para el Drawer o en español "cajón.

> Se puede checar el concepto de Drawer de la librería que se uso para implementarla (https://reactnavigation.org/docs/drawer-based-navigation/). Se utiliza la misma casi la misma Estructura.
>
> // Esta Estructura y diseño puede cambiar en un futuro según el diseño que se adapte

## Estructura

Se sigue la estrucutra para crear un stack, el cual sería:

```javascript
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const stack = createNativeStackNavigator();
const Navigator = () => {
  return (
      // Metodo "Navigator"
    <Navigator.Navigator>
      <Navigator.Screen name="Nombre_1" component={Componente o Stack} />
      <Navigator.Screen name="Nombre_2" component={Componente o Stack} />
      <Navigator.Screen name="Nombre_3" component={Componente o Stack} />
    </Navigator.Navigator>
  );
};

```

#### Cuestion de Stacks

En este caso el stack va a ser con el metodo de drawer.
Adentro del parametro "component" van a estar los stacks los cuales van a ser los principales que vamos a poder acceder.
Estos pueden tener varias pantallas adentro de los stacks.

## Explicación

### Summary:

Este componente o clase la cual es llamada en el documento **_DrawerNavigator_** hereda de la clase React.Component el cual sería para hacer un componente.
Este devuelve un Stack del tipo Drawer.
Se tiene en cuenta que este Navegador es el principal en nuestra apliacción después de acceder con el usuario y ya tener permiso.

## Documentation

[Documentation](https://linktodocumentation)

### Documentación no terminada aún
