import axiosClient from './axiosClient';

const productApi = {
    async getAll(type, params) {
        const newParams = { ...params };
        //newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);

        // fetch product list + count
        const productList = await axiosClient.get(`/categories/${type}`, { params: newParams });
        const count = (await axiosClient.get('/pagination')).data;
        let total = count.data[`${type}`] || 1;

        if (newParams.q) {
            const productListSearch = await axiosClient.get(`/categories/${type}?q=${newParams.q}`);
            total = productListSearch.data.data.length || 1;
        }

        return {
            data: productList,
            pagination: {
                page: params._page,
                limit: params._limit,
                total,
            },
        };
    },

    get(type, id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    remove(type, id) {
        const url = `/${type}/${id}`;
        return axiosClient.delete(url);
    },
};

export default productApi;
