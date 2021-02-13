import * as apiService from './apiService';

export const getUsers = () => {
    return apiService.get("api/v1/profile/")
        .then(data => data)
        .catch(err => err);
}

export const updateUser = s => {
    return apiService.put("api/v1/profile/", s)
        .then(data => data)
        .catch(err => err);
}
