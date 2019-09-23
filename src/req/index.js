import axios from 'axios'
axios.defaults.timeout = 10000;

export function get(url, params) {
    console.log(url);
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