import axios from "axios";

const baseApiUrl = 'http://localhost:4000/v1'



export const  createUser = async(payload) => {
    const createUserEndpoint =`${baseApiUrl}/user/`;
    const {data : apiResponse} = await axios.post(createUserEndpoint, payload);

    return apiResponse;
}

export const editUser = async(userId, payload) =>{
    const editUserEndpoint = `${baseApiUrl}/user/${userId}`;
    const {data: apiResponse} = await axios.put(editUserEndpoint, payload);
    return apiResponse;
}

export const RetriveUser = async(userId) =>{
    const getUserEndpoint = `${baseApiUrl}/user/${userId}`;
    const {data: apiResponse }= await axios.get(getUserEndpoint);

    return apiResponse;
}

export const retriveAllUsers = async() =>{
    const getAllUsersurl = `${baseApiUrl}/user/all`;
    const {data: apiResponse} = await axios.get(`${getAllUsersurl}`);
    return apiResponse;
}

export const removeUser = async(userId) => {
    const removeUserEndpoint = `${baseApiUrl}/user/${userId}`;
    const {data: apiResponse} = await axios.delete(removeUserEndpoint);
    return apiResponse;
}
 