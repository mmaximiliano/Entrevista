Por algun motivo, cuando intentaba correr el docker-compose.yaml obtenia el siguiente error que no fui capaz de resolver.
Sin embargo, cuando corria el comando (`ts-node ./src/server.ts`) desde la terminal, el mismo si funciona

[nodemon] starting `ts-node ./src/server.ts`
2022-02-26T04:19:58.661880300Z
2022-02-26T04:19:58.663135300Z /code/node_modules/ts-node/src/index.ts:513
2022-02-26T04:19:58.663188700Z     return new TSError(diagnosticText, diagnosticCodes)
2022-02-26T04:19:58.663251000Z            ^
2022-02-26T04:19:58.663306200Z TSError: ⨯ Unable to compile TypeScript:
2022-02-26T04:19:58.663319100Z src/datasources/ImagesAPI.ts(1,32): error TS2307: Cannot find module 'apollo-datasource-rest' or its corresponding type declarations.
2022-02-26T04:19:58.663346800Z src/datasources/ImagesAPI.ts(6,14): error TS2339: Property 'baseURL' does not exist on type 'ImagesAPI'.
2022-02-26T04:19:58.663384800Z src/datasources/ImagesAPI.ts(10,21): error TS2339: Property 'get' does not exist on type 'ImagesAPI'.