import { BASE_URL } from "./baseUrl"
import { commonHTTPRequest } from "./commonHTTPrequests"

// Register API
export const register = async (body) => {
    return await commonHTTPRequest("POST", `${BASE_URL}/register`, body)
}
// Login API
export const login = async (body) => {
    return await commonHTTPRequest("POST", `${BASE_URL}/login`, body)
}

// Api for project details
export const projects=async()=>{
    return await commonHTTPRequest("GET",`${BASE_URL}`)
}