import axios from "axios";
const URL = 'http://localhost:9090/login';
class UserDetailsService {
  validateUser(mobileNumber, password) {
    return axios.get(`${URL}/${mobileNumber}/${password}`)
  }
}
export default new UserDetailsService()