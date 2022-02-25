import {Image, RestaurantInfo, RestaurantSimple} from "../../@types/types";


export const resolvers = {
    Query: {
        getRestaurant: async (_parent: any, args: { name: string; with_image_only: boolean; }, {dataSources}: { dataSources: dataSources }) => {
            let restaurantInfo: [RestaurantInfo];
            let restaurantSimples: [RestaurantSimple];
            let images: [Image] = await dataSources.imageAPI.getImages();

            if (args.name) {
                restaurantSimples = dataSources.restaurantData.getRestaurantDataByName(args.name);
            } else {
                restaurantSimples = dataSources.restaurantData.getRestaurantData();
            }

            if (args.with_image_only) {
                restaurantSimples = dataSources.restaurantData.getRestaurantData().filter((r: any) => r.image_uuid)
            }

            restaurantInfo = restaurantSimples.map((r) => {
                return {
                    restaurantUuid: r.restaurantID,
                    name: r.name,
                    country: {code: r.country_code, locales: r.locales},
                    images: images.find((i) => i.imageID === r.restaurantID),
                    allowReview: !!r.locales.find((l) => l === "fr_FR")
                }
            })

            return restaurantInfo;
        }
    }
};