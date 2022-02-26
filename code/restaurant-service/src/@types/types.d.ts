import ImageAPI from "../datasources/ImagesAPI";
import RestaurantData from "../datasources/RestaurantData";

export interface Country {
    code: string;
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
    country: Country;
    images: Image | undefined;
    allowReview: boolean
}

export interface Image {
    imageID: number;
    url: string;
}

export interface DataSources {
    imageAPI: ImageAPI;
    restaurantData: RestaurantData;
}