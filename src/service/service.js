import jquery from "jquery";

class ApiService {
    static post(payload, callback) {
        return jquery.post('http://localhost:4200/users', payload, callback);
    }
    static deleteUser(id, callback, errorCallback) {
        return jquery.ajax('http://localhost:4200/users/' + id, {
            type: 'delete', 
            success: callback,
            error:errorCallback
        });
    }
}
export default ApiService;