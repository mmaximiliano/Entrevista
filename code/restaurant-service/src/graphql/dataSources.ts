import ImagesAPI from "../datasources/ImagesAPI";
import RestaurantData from "../datasources/RestaurantData";


export const dataSources = (): any => {
    return {
        imagesAPI: new ImagesAPI(),
        restaurantData: new RestaurantData(),
    };
};