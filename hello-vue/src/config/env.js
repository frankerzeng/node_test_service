/**
 * Created by Frank on 2017/9/19.
 */
let baseUrl = 'http://localhost:8081';
if (process.env.NODE_ENV === 'dev') {
    baseUrl = 'http://localhost:8081';
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://localhost:8081';
}

export {
    baseUrl
};

