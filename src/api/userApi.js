import axiosClientAuth from './axiosCilentAuth';
import axiosClient from './axiosClient'

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
        const url = `/client/register`;
        return axiosClient.post(url, data)
    },

    otpAuth(data, otp) {
        const url = `/client/checkotp?otp=${otp}`
        return axiosClient.put(url, data)
    },
    // login(data) {
    //     const url = `/auth/local`;
    //     return axiosClientAuth.post(url, data);
    // },

    forgetPass(data) {
        const url = '/client/forgetPassword';
        return axiosClient.patch(url, data)
    }
}

export default userApi;
