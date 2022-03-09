import config from "config";
import {SQLDataSource} from 'datasource-sql';
import {RestaurantSimple} from "../@types/types";

const MINUTE = 60;
const knexConfig = {
    client: "pg",
    connection: config.get('database')
};

class RestaurantData extends SQLDataSource {
    constructor() {
        super(knexConfig);
    }

    getRestaurantData(limit: number, offset: number): RestaurantSimple[] {
        let data = this.knex
            .select("*")
            .from("restaurant")
            .join("country", "country.country_code", "restaurant.country_code")
            .leftJoin("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .count()
            .offset(offset)
            .limit(limit)
            .cache(MINUTE);
        return data.rows.map((r: RestaurantSimple) => {
            return {
                restaurant_uuid: r.restaurant_uuid,
                name: r.name,
                country_code: r.country_code,
                locales: r.locales,
                image_uuid: r.image_uuid
            }
        });
    }

    getRestaurantDataTotal() {
        let data = this.knex
            .select("*")
            .from("restaurant")
            .join("country", "country.country_code", "restaurant.country_code")
            .leftJoin("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .count()
            .cache(MINUTE);

        return data.rows.count;
    }

    getRestaurantDataByName(name: string, limit: number, offset: number) {
        let data = this.knex
            .select("*")
            .from("restaurant")
            .where({name: name})
            .join("country", "country.country_code", "restaurant.country_code")
            .leftJoin("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .offset(offset)
            .limit(limit)
            .cache(MINUTE);

        return data.rows.map((r: RestaurantSimple) => {
            return {
                restaurant_uuid: r.restaurant_uuid,
                name: r.name,
                country_code: r.country_code,
                locales: r.locales,
                image_uuid: r.image_uuid
            }
        });
    }

    getRestaurantDataByNameTotal(name: string) {
        let data = this.knex
            .select("*")
            .from("restaurant")
            .where({name: name})
            .join("country", "country.country_code", "restaurant.country_code")
            .leftJoin("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .count()
            .cache(MINUTE);

        return data.rows.count;
    }

    getRestaurantDataByNameWithImageOnly(name: string, limit: number, offset: number) {
        let data = this.knex
            .select("*")
            .from("restaurant")
            .where({name: name})
            .join("country", "country.country_code", "restaurant.country_code")
            .join("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .offset(offset)
            .limit(limit)
            .cache(MINUTE);

        return data.rows.map((r: RestaurantSimple) => {
            return {
                restaurant_uuid: r.restaurant_uuid,
                name: r.name,
                country_code: r.country_code,
                locales: r.locales,
                image_uuid: r.image_uuid
            }
        });
    }

    getRestaurantDataByNameWithImageOnlyTotal(name: string) {
        let data = this.knex
            .select("*")
            .from("restaurant")
            .where({name: name})
            .join("country", "country.country_code", "restaurant.country_code")
            .join("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .count()
            .cache(MINUTE);

        return data.rows.count;
    }

    getRestaurantDataWithImageOnly(limit: number, offset: number) {
        let data = this.knex
            .select("*")
            .from("restaurant")
            .join("country", "country.country_code", "restaurant.country_code")
            .join("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .offset(offset)
            .limit(limit)
            .cache(MINUTE);

        return data.rows.map((r: RestaurantSimple) => {
            return {
                restaurant_uuid: r.restaurant_uuid,
                name: r.name,
                country_code: r.country_code,
                locales: r.locales,
                image_uuid: r.image_uuid
            }
        });
    }

    getRestaurantDataWithImageOnlyTotal() {
        let data = this.knex
            .select("*")
            .from("restaurant")
            .join("country", "country.country_code", "restaurant.country_code")
            .join("restaurant_has_image", "restaurant_has_image.restaurant_uuid", "restaurant.restaurant_uuid")
            .count()
            .cache(MINUTE);

        return data.rows.count;
    }
}

export default RestaurantData;