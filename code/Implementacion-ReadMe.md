# Improvements a considerar

* **Tests**: Este es el punto mas fuerte faltante en la implementacion, definitivamente habria que considerar agregar 
  tests de todo tipo (unit test, integration test, end-to-end test).
* **Resolver chains**: Actualmente no se utiliza esta potente funcionalidad de Graphql. En esta direccion una mejora 
  seria re-implementar el resolver de la query `restaurants` para que utilice esta capacidad. Esta brindaria mejoras
  en terminos de latencia y en la cantidad de endpoint que se utilizan, ya que solo se buscaria cierto campo si el 
  usuario lo solicita, ahorrando asi tiempo.
* **Error Handling**: No hay handlers de errores implementados, lo cual seria muy util para darle un error comprensible
  al usuario en vez de que se crashee la aplicacion con algun *'undefined behaviour'*
* **Caching**: En el caso de que los datos comiencen a escalar, estaria bueno utilizar algun tipo de cache provisto por
  graphql para guardar algunos datos de la query que sean pesados; la misma puede refhesearse cada X cantidad de tiempo
  en base a algun conocimiento previo sobre cuan frecuente se actualiza la DB
* **Auth**: Este es otro punto fuerte a considerar si queremos restringir el acceso a los datos. Graphql tambien provee 
  esta capacidad integrada.
* **Monitoring**: Graphql tambien provee la posibilidad de obtener metricas. 
  Este es posiblemente uno de los improvements que mas insight nos brindaria y mas nos ayude a mejorar nuestra API. 
  Por ejemplo, haciendo uso del logging obtendriamos metricas acerca de cuales son las queries que mas se
  utilizan, cuanto demoran (podriamos identificar posibles cuellos de botella), en que horario se realizan la mayor
  cantidad de queries, etc. Esta informacion nos podria ayudar por ejemplo a reducir costos la utilizacion de recursos,
  ya que por ejemplo esto nos podria ayudar a escalar determinado servicio en una modalidad *'on-demand'* para los
  horarios que es mas utilizado, para luego reducir a su estado original. Entre otros casos de usos.

  
\
Al igual que la vez pasada me encontre con el mismo error al utilizar `docker-compose up` lo cual no me permitio
testear el servicio en su totalidad. Sin embargo, si corro las cosas por separado no hay ningun error de compilacion.
Esta vez tuve un poco mas de tiempo para debuggear el codigo, y esto es lo que creo que esta sucediendo:
\
Cuando se realiza `docker-compose up` el servicio `init-restaurant-service` inicializa la DB y ademas monta el codigo y
las dependencias, las cuales no se estan montando debido a un error en la inicializacion de la DB, entonces despues el
build no encuentra las dependencias y aparentemente por este motivo estaria fallando.


Transcribo el error a continuacion:

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

Espero su feedback.

Desde ya muchas gracias, \
Maxi.
