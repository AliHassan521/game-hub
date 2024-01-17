import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"d89ea0ea4ce94a849525751c6c217775"
    }
})