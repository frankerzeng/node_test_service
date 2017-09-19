import {baseUrl} from './../config/env';

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    if (type !== "GET" && type !== "POST") {
        throw new Error("请求类型不正确");
    }
    url = baseUrl + url;
    if (type === 'GET') {
        let queryStr = '';
        Object.keys(data).forEach(key => {
            queryStr += key + "=" + data[key] + "&";
        });

        if (queryStr !== '') {
            url = url + '?' + queryStr.substr(0, queryStr.length - 1);
        }
    }
    console.info('fetch_url==' + url);
    if (window.fetch && method === 'fetch' && false) {
        let requestConfig = {
            credentials: 'include',
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",
            cache: "force-cache"
        };

        if (type === 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data)
            })
        }

        console.log(requestConfig);
        try {
            const response = await window.fetch(url, requestConfig);
            return await response.json()
        } catch (error) {
            throw new Error(error)
        }
    } else {
        return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;
            }

            let sendData = '';
            if (type === 'POST') {
                sendData = JSON.stringify(data);
            }

            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);

            requestObj.onreadystatechange = () => {
                if (requestObj.readyState === 4) {
                    if (requestObj.status === 200) {
                        let obj = requestObj.response;
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj)
                    } else {
                        reject(requestObj)
                    }
                }
            }
        })
    }
}