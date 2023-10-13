import axios from "axios";

export function getGroupFullTime(){
    return axios.post('http://localhost/group/getAllGroupsFullTime');
}