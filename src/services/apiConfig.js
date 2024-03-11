import axios from "axios";

let apiUrl;

const apiUrls = {
    production: "www.cat-crud-api.heroku.com/lol",
    development: "http://127.0.0.1:3001/api"
};

// if localhost works go local, if not go production
if(window.location.hostname === "localhost") {
    apiUrl = apiUrls.development;
} else {
    apiUrl = apiUrls.production;
}

// setting axios to prepend the api endpoint
const api = axios.create({
    baseURL: apiUrl
});

export default api;
