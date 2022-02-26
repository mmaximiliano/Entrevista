import ImageAPI from "../src/datasources/ImagesAPI";
import RestaurantData from "../src/datasources/RestaurantData";

export interface Country {
    code: ID;
    locales: [String];
}

export interface RestaurantSimple {
    restaurantID: number;
    name: string;
    country_code: string;
    locales: [string];
}

export interface RestaurantInfo {
    restaurantUuid: number;
    name: string;
    country: { locales: [string]; code: string };
    images: Image | undefined;
    allowReview: boolean
}

export interface Image {
    imageID: number;
    url: string;
}

export interface dataSources {
    imageAPI: ImageAPI;
    restaurantData: RestaurantData;
}