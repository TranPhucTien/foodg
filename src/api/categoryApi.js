import axiosClient from './axiosClient';

const categoryApi = {
    async getAll() {
        // http://localhost:8080/categories
        const data = (await axiosClient.get('/categories')).data;

        return {
            data,
        };
    },
};

export default categoryApi;
