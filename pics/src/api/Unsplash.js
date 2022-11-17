import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization:
                'Client-ID tw4VYePIpJCddXgFQuCKW85emB8kMAJ9wAGX2bN2NW8'
        }
    });