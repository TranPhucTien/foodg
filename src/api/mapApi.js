import axiosClient from './axiosClient';

export const mapApi = {
    getMap(address) {
        const url = `/map?address=${address}`;
        return axiosClient.get(url);
    },
};

export default mapApi;
