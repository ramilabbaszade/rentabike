import * as apiService from './apiService';

export const signIn = (employeeCredentials) => {
    return apiService.post("api/getToken", employeeCredentials)
        .then(data => {
            if (!data.message) {
                localStorage.setItem("jwtToken", data.jwtToken);
            }
            return data;
        })
        .catch(err => err);
}

export const signUp = (employeeCredentials) => {
    return apiService.post("registration", employeeCredentials)
        .then(data => {
            if (!data.message) {
                localStorage.setItem("jwtToken", data.jwtToken);
            }
            return data;
        })
        .catch(err => err);
}

export const signOut = () => {
    localStorage.removeItem("jwtToken");
}