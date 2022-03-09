import {gql} from 'apollo-server-express';

export const typeDefs = gql`

    """ Support for pagination """
    type PaginatedCollection {
        """ Total number of items available in collection. """
        total: Int!
        """ Number of items per page. """
        pageCount: Int!
        """ current page returned in query. """
        currentPage: Int!
    }

    """ Country info """
    type Country {
        """ Country code """
        countryCode: String,
        """ Locales for a country code"""
        locales: [String]
    }
    
    """ Complete Restaurant Info """
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
    
    """ Complete Restaurant Info With Paginated Results """
    type PaginatedRestaurants {
        restaurants: [RestaurantInfo],
        pagination: PaginatedCollection
    }

    type Query {
        restaurants(
            """ Number of Results per Page """
            pageCount: Int = 5,
            """ Offset Page """
            currentPage: Int = 1,
            """ Restaurant Name """
            name: String,
            """ Get only restaurants with images """
            with_image_only: Boolean = False): PaginatedRestaurants
    }
`;