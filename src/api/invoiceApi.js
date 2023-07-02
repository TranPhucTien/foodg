import axiosClient from './axiosClient';

export const invoiceApi = {
    create(data, codeDiscount) {
        const url = `/invoices?codeDiscount=${codeDiscount}`;
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/invoices`;
        return axiosClient.put(url, data);
    },
};

export default invoiceApi;
