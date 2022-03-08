import {gql} from 'apollo-server-express';

export const typeDefs = gql`

    """ Restaurant basic info """
    type Restaurant {
        """" Restaurant ID """
        restaurantUuid: String,
        """" Restaurant name """
        name: String,
        """" Restaurant country code """
        countryCode: String
    }

    """ Whether Restaurant has image or not """
    type RestaurantHasImage {
        """" Restaurant ID """
        restaurantUuid: String,
        """" Restaurant Image """
        imageID: ID
    }

    """ Country info """
    type Country {
        """ Country code """
        countryCode: ID,
        """ Locales for a country code"""
        locales: [String]
    }

    """ Images info """
    type Image {
        """ Image ID """
        imageUuid: String,
        """ Image URL """
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
        restaurantUuid: String,
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
        images : [Image]
        simpleRestaurants: [Restaurant]
        restaurants(
            """ Restaurant Name """
            name: String,
            """ Get only restaurants with images """
            with_image_only: Boolean = True): [RestaurantInfo]
    }
`;