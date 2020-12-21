import jquery from "jquery";

class ApiService {
    static post(payload, callback) {
       return jquery.post('http://localhost:4200/users', payload, callback);
    }
}
export default ApiService;