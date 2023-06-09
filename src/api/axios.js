import axios from "axios";
export default axios.create({
    baseURL: "https://makeup-api.herokuapp.com/api/v1"
});