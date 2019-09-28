import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 10000;

export function get(url, params) {
    // console.log(url);
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            headers: {
                "Access-Session": localStorage.getItem('session'),
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

export function post(url, params) {
    // console.log(params);
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
            .then(res => {
                resolve(res.data);
                localStorage.setItem('session', res.headers["access-session"]);
                // console.log(localStorage.getItem('session'));
            }).catch(err => {
                reject(err.data)
            })
    });
}

export function getimg(url, params) {
    // console.log(url);
    return new Promise((resolve, reject) => {
        axios.get(url, { 
            responseType: 'blob'
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}