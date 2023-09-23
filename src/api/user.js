import axios from "axios";

export function getUser(data){
    return axios.post('http://localhost/user/login', data);
}