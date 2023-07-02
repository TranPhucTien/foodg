import axiosClient from './axiosClient';

export const voucherApi = {
    checkVoucher(code, price) {
        const url = `/discounts/checkDiscounts?code=${code}&price=${price}`;
        return axiosClient.get(url);
    },
};

export default voucherApi;
