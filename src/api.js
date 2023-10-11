import axios from "axios";

const api = axios.create({
    baseURL: "https://65120ae2b8c6ce52b39547bf.mockapi.io/musica"
});

export default api;