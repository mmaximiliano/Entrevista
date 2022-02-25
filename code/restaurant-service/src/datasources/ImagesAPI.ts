import { RESTDataSource } from 'apollo-datasource-rest'

class ImagesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000/';
    }

    async getImages() {
        return this.get(`images`);
    }
}

export default ImagesAPI;