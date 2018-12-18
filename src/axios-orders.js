import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f7e47.firebaseio.com/'
});

export default instance;