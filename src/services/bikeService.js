import * as apiService from '../services/apiService';

export const getBikes = () => {
    return apiService.get("api/v1/bikes/")
        .then(data => data)
        .catch(err => err);
}
export const getBikeDetails = s => {
    return apiService.get("api/v1/bike/",s)
        .then(data => data)
        .catch(err => err);
}

export const createBike = s => {
    return apiService.post("/api/v1/bikes/", s)
        .then(data => data)
        .catch(err => err);
}

export const updateBike = s => {
    return apiService.put("station", s)
        .then(data => data)
        .catch(err => err);
}

export const deleteBike = s => {
    return apiService.del("station/" + s.id)
        .then(data => data)
        .catch(err => err);
}