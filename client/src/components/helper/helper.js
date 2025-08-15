import axios from "axios"
const postApi = async (data, endpoint) => {
    try{
        const res= await axios.post(`${import.meta.env.VITE_LOCAL_SERVE}${endpoint}`,
            data)
        return res
    }
    catch (e) {
        console.log(e.message)
        return e.message
    }
}

const getApi = async (endpoint, params = {}) => {
    try {
        const res = await axios.get(
            `${import.meta.env.VITE_LOCAL_SERVE}${endpoint}`,
            // { params } // use params object for query strings
        );
        return res;
    } catch (e) {
        console.error(e.message);
        return e.message;
    }
};

export { postApi, getApi };