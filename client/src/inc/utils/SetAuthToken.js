import axios from "axios";

const SetAuthToken = token => {
    if (token) {
        axios.defaults.headers.authorization = token;
    } else {
        delete axios.defaults.headers.authorization;
    }
};

export default SetAuthToken;
