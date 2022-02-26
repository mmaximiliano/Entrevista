Buenas, espero que se encuentren bien!

Utilizo este txt para contar rapidamente acerca de la implementacion.

Lamentablemente en el poco tiempo que tuve (a horas de viajar y lo que eso implica) no fui capaz de cumplir con la
funcionalidad que se pedia en el ejercicio.
Mi mayor enemigo fue error de tipado que no fui capaz de debuggear (lo describo mas abajo) y el mismo no me permitio
testear en "vivo" la implementacion a medida que avanzaba. Luego de tratar de resolverlo por horas, decidi utilizar el 
tiempo para seguir adelante sin testear y confiar en el tipado de typescript, motivo por el cual probablemente hayan
cosas que no funcionen ya que no las pude testear.

Por algun motivo, cuando intentaba correr el docker-compose.yaml obtenia el siguiente error que no fui capaz de resolver.
Sin embargo, cuando corria el comando (`ts-node ./src/server.ts`) desde la terminal, el mismo si funciona

```
[nodemon] starting `ts-node ./src/server.ts`
2022-02-26T04:19:58.661880300Z
2022-02-26T04:19:58.663135300Z /code/node_modules/ts-node/src/index.ts:513
2022-02-26T04:19:58.663188700Z     return new TSError(diagnosticText, diagnosticCodes)
2022-02-26T04:19:58.663251000Z            ^
2022-02-26T04:19:58.663306200Z TSError: ⨯ Unable to compile TypeScript:
2022-02-26T04:19:58.663319100Z src/datasources/ImagesAPI.ts(1,32): error TS2307: Cannot find module 'apollo-datasource-rest' or its corresponding type declarations.
2022-02-26T04:19:58.663346800Z src/datasources/ImagesAPI.ts(6,14): error TS2339: Property 'baseURL' does not exist on type 'ImagesAPI'.
2022-02-26T04:19:58.663384800Z src/datasources/ImagesAPI.ts(10,21): error TS2339: Property 'get' does not exist on type 'ImagesAPI'.
```

De todas formas decido entregar el ejercicio en el estado actual ya que no voy a poder continuar avanzando en el mismo
mientras me encuentre de viaje (como lo comente en las entrevistas me voy en unas horas!). Si ustedes lo desean podria 
seguir trabajando en el ejercicio cuando vuelva (Lunes 7 de marzo) o incluso recibir un ejercicio nuevo.
Espero su feedback.

Desde ya muchas gracias, 
Maxi.
