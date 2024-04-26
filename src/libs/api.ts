import axios from "axios";

const API = axios.create({
    baseURL: "localhost:3000/api",
    headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("GeHu") ? "Bearer " + localStorage.getItem("GeHu") : "",
    },
});

export default API;
