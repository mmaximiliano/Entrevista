import config from "config";
import {SQLDataSource} from 'datasource-sql';

const MINUTE = 60;
const knexConfig = {
    client: "pg",
    connection: config.get('database')
};

class RestaurantData extends SQLDataSource {
    constructor() {
        super(knexConfig);
    }

    getRestaurantData(limit: number, offset: number) {
        return this.knex
            .select("*")
            .from("restaurant")
            .join("country", "country.country_code", "restaurant.country_code")
            .leftJoin("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .count()
            .offset(offset)
            .limit(limit)
            .cache(MINUTE);
    }

    getRestaurantDataTotal() {
        return this.knex
            .select("*")
            .from("restaurant")
            .join("country", "country.country_code", "restaurant.country_code")
            .leftJoin("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .count()
            .cache(MINUTE);
    }

    getRestaurantDataByName(name: string, limit: number, offset: number) {
        return this.knex
            .select("*")
            .from("restaurant")
            .where({name: name})
            .join("country", "country.country_code", "restaurant.country_code")
            .leftJoin("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .offset(offset)
            .limit(limit)
            .cache(MINUTE);
    }

    getRestaurantDataByNameTotal(name: string) {
        return this.knex
            .select("*")
            .from("restaurant")
            .where({name: name})
            .join("country", "country.country_code", "restaurant.country_code")
            .leftJoin("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .count()
            .cache(MINUTE);
    }

    getRestaurantDataByNameWithImageOnly(name: string, limit: number, offset: number) {
        return this.knex
            .select("*")
            .from("restaurant")
            .where({name: name})
            .join("country", "country.country_code", "restaurant.country_code")
            .join("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .offset(offset)
            .limit(limit)
            .cache(MINUTE);
    }

    getRestaurantDataByNameWithImageOnlyTotal(name: string) {
        return this.knex
            .select("*")
            .from("restaurant")
            .where({name: name})
            .join("country", "country.country_code", "restaurant.country_code")
            .join("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .count()
            .cache(MINUTE);
    }

    getRestaurantDataWithImageOnly(limit: number, offset: number) {
        return this.knex
            .select("*")
            .from("restaurant")
            .join("country", "country.country_code", "restaurant.country_code")
            .join("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .offset(offset)
            .limit(limit)
            .cache(MINUTE);
    }

    getRestaurantDataWithImageOnlyTotal() {
        return this.knex
            .select("*")
            .from("restaurant")
            .join("country", "country.country_code", "restaurant.country_code")
            .join("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .count()
            .cache(MINUTE);
    }
}

export default RestaurantData;