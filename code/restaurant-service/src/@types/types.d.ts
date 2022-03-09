import ImageAPI from "../datasources/ImagesAPI";
import RestaurantData from "../datasources/RestaurantData";

export interface Country {
    code: string;
    locales: string[];
}

export interface RestaurantSimple {
    restaurant_uuid: string;
    name: string;
    country_code: string;
    locales: [string];
    image_uuid: string;
}

export interface RestaurantInfo {
    restaurantUuid: string;
    name: string;
    country: Country;
    images: string[] | undefined;
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

export interface PaginatedCollection {
    total: Int,
    pageCount: Int,
    currentPage: Int
}

export interface PaginatedRestaurants {
    restaurants: RestaurantInfo[],
    pagination: PaginatedCollection
}