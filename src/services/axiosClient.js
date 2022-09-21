// import axios from "axios"
// const accessToken = localStorage.getItem("accessToken")
// const axiosClient = axios.create({
//     headers: {
//         "Authorization": "bearer" + accessToken
//     }
// })

import axios from "axios"

export const BASE_URL = 'https://api-qa.muangay-vn.com/api/'
export const BODY = {
    "menuGUID": "7359bfe8-dbf1-4f4d-8b70-0a10566e51ea",
    "isPreview": false,
    "tableId": null
}

export const setLog = (username, password) => {
    axios.post(`${BASE_URL}user/login`, {
        "mobilePhone": username,
        "password": password
    })
        .then(rs => {
            console.log(rs)
        })
}