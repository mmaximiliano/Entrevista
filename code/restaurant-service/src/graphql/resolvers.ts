import {DataSources, Image, PaginatedRestaurants, RestaurantInfo, RestaurantSimple} from "../@types/types";

export const resolvers = {
    Query: {
        restaurants: async (_parent: any,
                            args: { pageCount: number, currentPage: number, name: string; with_image_only: boolean; },
                            {dataSources}: { dataSources: DataSources }) => {
            let paginatedRestaurants: PaginatedRestaurants;
            let restaurantInfo: RestaurantInfo[];
            let restaurantSimples: RestaurantSimple[];
            let images: Image[] = await dataSources.imagesAPI.getImages();
            let total: number;

            if (args.name) {
                if (args.with_image_only) {
                    restaurantSimples = dataSources.restaurantData.getRestaurantDataByNameWithImageOnly(args.name, args.pageCount, args.pageCount * args.pageCount);
                    total = dataSources.restaurantData.getRestaurantDataByNameWithImageOnlyTotal(args.name);
                } else {
                    restaurantSimples = dataSources.restaurantData.getRestaurantDataByName(args.name, args.pageCount, args.pageCount * args.pageCount);
                    total = dataSources.restaurantData.getRestaurantDataByNameTotal(args.name);
                }
            } else {
                if (args.with_image_only) {
                    restaurantSimples = dataSources.restaurantData.getRestaurantDataWithImageOnly(args.pageCount, args.pageCount * args.pageCount)
                    total = dataSources.restaurantData.getRestaurantDataWithImageOnlyTotal();
                } else {
                    restaurantSimples = dataSources.restaurantData.getRestaurantData(args.pageCount, args.pageCount * args.pageCount);
                    total = dataSources.restaurantData.getRestaurantDataTotal();
                }

            }

            restaurantInfo = restaurantSimples.map((r) => {
                return {
                    restaurantUuid: r.restaurant_uuid,
                    name: r.name,
                    country: {code: r.country_code, locales: r.locales},
                    images: images.filter((i) => i.imageUuid === r.restaurant_uuid).map((i) => i.url),
                    allowReview: !!r.locales.find((l) => l === "fr_FR")
                }
            })

            paginatedRestaurants = {
                restaurants: restaurantInfo,
                pagination: {
                    total: total,
                    pageCount: args.pageCount,
                    currentPage: args.currentPage
                }
            }

            return paginatedRestaurants;
        }
    }
};