import {ApolloServer} from 'apollo-server-express';
import express from 'express';
import config from 'config';
import ImagesAPI from "./datasources/ImagesAPI";
import RestaurantData from "./datasources/RestaurantData";
import {typeDefs} from './graphql/schema'
import {resolvers} from './graphql/resolvers'


const main = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: (): any => {
            return {
                imagesAPI: new ImagesAPI(),
                restaurantData: new RestaurantData(),
            };
        },
    });

    await server.start();

    server.applyMiddleware({app});

    app.listen({port: config.get('server.port')}, () => console.info(
        `🚀 Server ready and listening at ==> http://localhost:${config.get('server.port')}${
            server.graphqlPath
        }`,
    ));
};

main().catch((error) => {
    console.error('Server failed to start', error);
});
