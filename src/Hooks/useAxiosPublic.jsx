import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://pet-adoption-server-hazel.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;