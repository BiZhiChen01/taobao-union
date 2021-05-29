import axios from 'axios';
import qs from 'qs';

//携带证书
axios.defaults.withCredentials = true;
//设置超时时间
axios.defaults.timeout = 100000;

export default {
    requestGet(url) {
        return new Promise((resolve, reject) => {
            axios.get(url).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        })
    },
    requestPost(options) {
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'POST',
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: qs.stringify({
                    ...options.data
                })
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        })
    }
}