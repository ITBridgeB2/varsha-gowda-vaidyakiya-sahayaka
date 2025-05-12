import axios from "axios";
const VISITOR_URL = 'http://localhost:9091/userdetails'
class UserDetailsService {
  saveUserDetails(userdetails) {
    return axios.post(`${VISITOR_URL}`, userdetails)
  }
  validateUser(mobileNumber, password) {
    return axios.get(`${VISITOR_URL}/${mobileNumber}/${password}`)
  }
}
export default new UserDetailsService()