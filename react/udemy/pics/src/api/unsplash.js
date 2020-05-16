import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ONVad5yWYKYu-hGQelvEJoArZZgBvKe0UpltvYwWWKc'
    }
});