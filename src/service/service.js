import jquery from "jquery";

export class ApiService {
    static BASE_URL = 'http://localhost:4200/users/';
    static updateUser(user, callback, errorCallback) {
        jquery.ajax(ApiService.BASE_URL + user.id, {
            type: 'put',
            data: user,
            success: callback,
            error: errorCallback
        });
    }
    static getAllUsers(successCallback) {
        jquery.get(ApiService.BASE_URL, successCallback);
    }
    static getUsers(firstName, successCallback) {
        jquery.get(ApiService.BASE_URL + '?fname=' + firstName, successCallback);
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
    static getSkills(success){
        jquery.get('http://localhost:4200/skills', success);
    }
}

export class B {

}
//   ApiService;