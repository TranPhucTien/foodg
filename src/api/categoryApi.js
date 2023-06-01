import axiosClient from './axiosClient';

const categoryApi = {
    async getAll() {
        const data = (await axiosClient.get('/categories')).data;

        return {
            data,
        };
    },
};

export default categoryApi;
