# Evitando el estado compartido

¿Que es una funcion?

Es un proceso que recibe parametros de entrada, y retorna una salida.

## Funciones puras
Siguen recibiendo parametros de entrada y de salida, pero son puras pq dado que dada una misma entrada, siempre regresa el mismo valor de salida y no tiene otro efecto secundario observable. (si entra string debe retornar string)

## inmutabilidad
es un principio fundamental en la programación funcional. varibles en js que pueden cambiar o no cambiar. Un objt es mutable cuando podemos cambiar sus propiedades. La inmutabilidad hace que en el transcurso del tiempo el obj no cambie. una varible CONST no cambia, es inmutable. Existe una libreria inmutable.js que son inmutables. En Angular2 y react se usan variables inmutables, pq tiene que ser consistente. (Si no quiero que cambie deberia generar una copia)