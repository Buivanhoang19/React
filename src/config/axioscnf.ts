import axios from "axios";
const axionInstance = axios.create({
    baseURL:`http://localhost:4000/`
})
export default axionInstance