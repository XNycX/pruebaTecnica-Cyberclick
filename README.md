# pruebaTecnica-Cyberclick



## Pre-requisitos 📋

Necesitaremos simplemente la instalación de un programa para realizar nuestro código, en este proyecto se ha utilizado Visual Studio Code

## Construido con 🛠️

* [Visual studio code](https://code.visualstudio.com/Download/) - El IDE utilizado para la realización de este proyecto
* JS
* HTML5
* Node.JS


**Resolución Ejercicio 1:

He realizado un bucle for que se autoincrementase hasta llegara 100, dentro de ese bucle he creado un switch indicando las siguientes condiciones:

- En Los múltiplos de 3 he hecho que apareciese el string “cyber”.
- En los múltiplos de 5 he hecho que apareciese el string “click”.
- En los multiplos de 3 y de 5 he hecho que apareciese el string “cyberclick”. 
- Si no se cumplia ninguna de estas condiciones aparece el número normal.

También he dejado comentada otra forma de realizar el ejercicio esta vez usando IF & else if con su condición.

**Imagen de la solución:

![foto](/img/Ejercicio1.PNG)

**Resolución ejercicio 2:

En este ejercicio convierto cada linea del input.txt (utilizando el modulo readline) en un objeto y con la ayuda de un for y utilizando split combinado con filter 
creo tres propiedades dentro del objeto(letter,numbers,password).
Gracias a eso ya puedo realizar el ejercicio con facilidad creando dos if, uno para la primera parte del ejercicio en el cual comparo que la variable 
numberOfTimesLetterAppears(el numero de veces que la letra aparece en la contraseña), creada previamente, este entre los minimos y maximos permitidos.
En este caso el número de contraseñas validas son: 643.
Y en el segundo if (correspondiente a la parte 2 del ejercicio) incluyo una condición en la cual la letra especificada para esa contraseña(letter) debe estar
posicionada exactamente en una 1 de las dos posiciones que aparecen (numbers).
En este caso el número de contraseñas validas son: 688.

## Autores ✒️

* **Cristian Santamaria** - *Realización de los ejercicios*

