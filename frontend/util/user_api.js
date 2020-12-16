import { $CombinedState } from "redux"

export const fetchUsers = () => {
    return $.ajax({
        url: "/api/users",
        method: "GET"
    })
};

export const fetchUser = userId => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: "GET"
    })
};

export const updateUser = (userData, id) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: "PATCH",
        data: userData,
        contentType: false,
        processData: false
    })
}