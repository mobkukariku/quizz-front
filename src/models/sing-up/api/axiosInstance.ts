import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:7777/api",
    withCredentials: true,
    headers:{
        "Content-Type": "application/json",
    }
});

export const registerUser = async (data: { email: string; password: string, firstName: string, lastName: string }) => {
    try{
        const response = await axiosInstance.post("/auth/register", data);
        console.log(response);
        return response;
    }catch(error){
        console.error(error);
    }
}