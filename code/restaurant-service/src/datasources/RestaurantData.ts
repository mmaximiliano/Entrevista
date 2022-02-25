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

    getRestaurantData() {
        return this.knex
            .select("*")
            .from("restaurant")
            .join("country")
            .leftJoin("restaurant_has_image")
            .cache(MINUTE);
    }

    getRestaurantDataByName(name: string) {
        return this.knex
            .select("*")
            .from("restaurant")
            .where({name: name})
            .join("country")
            .leftJoin("restaurant_has_image")
            .cache(MINUTE);
    }
}

export default RestaurantData;