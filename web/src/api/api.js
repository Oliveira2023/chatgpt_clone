import axios from 'axios';
const URL_API = 'http://localhost:5500/api/prompt';

export const makeRequest = async (message) => {
    try{
        const { data } = await axios.post(URL_API, message);
        return data;
    }catch(err){
        console.log('Api front error:', err);
        return;
    }
}