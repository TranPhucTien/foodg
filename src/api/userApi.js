import axiosClientAuth from './axiosCilentAuth';

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

export default userApi;
