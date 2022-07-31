import axiosClient from './axiosClient';

const productApi = {
    async getAll(type, params) {
        const newParams = { ...params };
        newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);

        delete newParams._page;

        // fetch product list + count
        const productList = await axiosClient.get(`/${type}`, { params: newParams });
        const count = await axiosClient.get('/pagination', { params: newParams });
        const total = count.data[`${type}`] || 1;

        return {
            data: productList,
            pagination: {
                page: params._page,
                limit: params._limit,
                total,
            },
        };
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
