import axios from "axios";

export const authClient = axios.create({
    baseURL: import.meta.env.AUTH_BASE_URL
})
