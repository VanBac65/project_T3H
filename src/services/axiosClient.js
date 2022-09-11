import axios from "axios"
const accessToken = localStorage.getItem("accessToken")
const axiosClient = axios.create({
    headers:{
        "Authorization": "bearer" + accessToken
    }
})