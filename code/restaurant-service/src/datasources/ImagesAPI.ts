import {RESTDataSource} from 'apollo-datasource-rest'
import {Image, ImagesResponse} from "../@types/types";


class ImagesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3010/';
    }

    async getImages(): Promise<Image[]> {
        let imageResponse: ImagesResponse = await this.get(`images`);
        return imageResponse.images;
    }
}

export default ImagesAPI;