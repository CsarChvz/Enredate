
# AuthNavigation -- Main

En esta carpeta se contienen dos stacks, pero uno es utilizado por el otro, ya que register es una conjunto de pantallas

## AuthNavigator.js

Este si se podría decir es el stack el cual usamos para la autenticación

Se tienen definidos tres "Screens" los cuales son las principales en la navegación de la autenticación.
- Welcome
- Login
- Register

Los dos primeros son dos pantallas normales, el ultimo "Register", es un stack para poder usar las demás pantallas si es que se quiere.

## RegisterStack.js

Este es el stack que esta adentro en el parametro "componente" del Navegador de autenticación, el cual se usa para poder a acceder a las pantallas de su flujo.

Esta es la forma en la que define las siguientes pantallas de su stack

```javascript
    
const RegisterStack = createNativeStackNavigator();

const RegisterNavigator = () => {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen name="Register" component={RegisterScreen} />
      <RegisterStack.Screen name="Choose" component={ChooseScreen} />
      <RegisterStack.Screen name="CreateStore" component={CreateStoreScreen} />
    </RegisterStack.Navigator>
  );
};

```

Aunque son pocas pantallas y se podría omitir, más vale tener ordenado esta estrcutura de navegación