import axios from "axios";

export const instance = axios.create({
    baseURL: "https://app.ftoyd.com/fronttemp-service",
    headers: {
        "Content-Type": "application/json"
    }
})

