import axiosClientAuth from './axiosCilentAuth';
import axiosClient from './axiosClient';

const userApi = {
    register(data) {
        const url = `/auth/local/register`;
        return axiosClientAuth.post(url, data);
    },

    login(data) {
        const url = `/auth/local`;
        return axiosClientAuth.post(url, data);
    },
};

export const customerApi = {
    register(data) {
        const url = `/customers/register`;
        return axiosClient.post(url, data);
    },

    otpAuth(data, otp) {
        const url = `/customers/checkotp?otp=${otp}`;
        return axiosClient.put(url, data);
    },

    login(data) {
        const url = `/customers/loginCustomer`;
        return axiosClient.post(url, data);
    },

    forgetPass(data) {
        const url = '/customers/forgetPassword';
        return axiosClient.patch(url);
    },
};

export default userApi;
