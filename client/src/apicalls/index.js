import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
         Authorization : `Bearer ${localStorage.getItem('token')}`
    }
});

export default axiosInstance;