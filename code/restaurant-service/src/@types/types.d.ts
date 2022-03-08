import ImageAPI from "../datasources/ImagesAPI";
import RestaurantData from "../datasources/RestaurantData";

export interface Country {
    code: string;
    locales: [String];
}

export interface RestaurantSimple {
    restaurantID: string;
    name: string;
    country_code: string;
    locales: [string];
}

export interface RestaurantInfo {
    restaurantUuid: string;
    name: string;
    country: Country;
    images: Image | undefined;
    allowReview: boolean
}

export interface Image {
    imageUuid: string;
    url: string;
}

export interface DataSources {
    imagesAPI: ImageAPI;
    restaurantData: RestaurantData;
}

export interface ImagesResponse {
    images: [Image]
}