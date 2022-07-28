import axiosClient from './axiosClient';

const productApi = {
    async getAll(type, params) {
        return axiosClient.get(type, { params });
    },

    get(id) {
        const url = `/best-foods/${id}`;
        return axiosClient.get(url);
    },

    remove(id) {
        const url = `/best-foods/${id}`;
        return axiosClient.delete(url);
    },
};

export default productApi;
