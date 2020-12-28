import jquery from "jquery";

export class ApiService {
    static BASE_URL = 'http://localhost:4200/users/';
    static getAllUsers(successCallback) {
        jquery.get(ApiService.BASE_URL, successCallback);
    }
    static getUsers(firstName, successCallback) {
        jquery.get(ApiService.BASE_URL+'?fname='+firstName, successCallback);
    }
    static post(payload, callback) {
        jquery.post(ApiService.BASE_URL, payload, callback);
    }
    static deleteUser(id, callback, errorCallback) {
        jquery.ajax(ApiService.BASE_URL + id, {
            type: 'delete',
            success: callback,
            error: errorCallback
        });
    }
}

export class B{

}
//   ApiService;