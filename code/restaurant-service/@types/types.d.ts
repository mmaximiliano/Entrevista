import ImageAPI from "../src/datasources/ImagesAPI";
import RestaurantData from "../src/datasources/RestaurantData";

export interface Country {
    countryCode: ID;
    locales: [String];
}

export interface RestaurantSimple {
    restaurantID: number;
    name: string;
    country_code: string;
    locales: [string];
}

export interface RestaurantInfo {
    restaurantID: number;
    name: string;
    country: Country;
    images: [string];
    allowReview: boolean;
}

export interface Image {
    imageID: number;
    url: string;
}

export interface dataSources {
    imageAPI: ImageAPI;
    restaurantData: RestaurantData;
}