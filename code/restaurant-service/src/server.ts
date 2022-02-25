import {ApolloServer, gql} from 'apollo-server-express';
import express from 'express';
import config from 'config';
import ImagesAPI from "./datasources/ImagesAPI";
import RestaurantData from "./datasources/RestaurantData";
import {dataSources, RestaurantInfo, Image} from "../@types/types";


// These types definitions and resolvers are just an example, you can remove them and move the new types and resolvers elsewhere if you want.
const typeDefs = gql`

    """ Restaurant basic info """
    type Restaurant {
        """" Restaurant ID """
        restaurantID: ID,
        """" Restaurant name """
        name: String,
        """" Restaurant country code """
        countryCode: String
    }

    """ Whether Restaurant has image or not """
    type RestaurantHasImage {
        """" Restaurant ID """
        restaurantID: String,
        """" Restaurant Image """
        imageID: ID
    }

    """ Country info """
    type Country {
        countryCode: ID,
        locales: [String]
    }

    """ Images info """
    type Images {
        imageID: ID,
        url: String
    }

    """ Creates the collection type for the Type that has the directive, implementing the PaginatedCollection interface. """
    directive @collection on FIELD_DEFINITION

    """ Interface that all collection types need to implement to support pagination """
    interface PaginatedCollection {
        """ Total number of items available in collection. """
        total: Int!
        """ Number of pages. """
        pageCount: Int!
        """ current page returned in query. """
        currentPage: Int!
    }

    type RestaurantInfo {
        """" Restaurant ID """
        restaurantID: ID,
        """" Restaurant name """
        name: String,
        """" Restaurant country """
        country: Country
        """ Restaurant images urls """
        images: [String]
        """ Does Restaurant allow review """
        allowReview: Boolean
    }

    type Query {
        getRestaurant(name: String): [Restaurant]
        restaurants(
            """ Restaurant Name """
            name: String,
            """ Get only restaurants with images """
            with_image_only: Boolean = True): [RestaurantInfo]
    }
`;

const resolvers = {
    Query: {
        getRestaurant: async (_parent: any, args: { name: string; with_image_only: boolean; }, {dataSources}: { dataSources: dataSources }) => {
            let restaurantInfo : [RestaurantInfo];
            let images : [Image];
            if (args.name) {
                restaurantInfo = dataSources.restaurantData.getRestaurantDataByName(args.name);
            }

            if (args.with_image_only) {
                restaurantInfo = dataSources.restaurantData.getRestaurantData().filter((r: any) => r.image_uuid)
            }


            //dataSources.imageAPI.get('images');
            //dataSources.restaurantData.getRestaurantData();
            return restaurantInfo;
        }
    }
};

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
