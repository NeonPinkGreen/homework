const API = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => fetch(API).then((data) => data.json());

export const getUser = (id) =>
  fetch(API + "/" + id).then((data) => data.json());

export const deleteUser = (id) =>
  fetch(API + "/${id}", {
    method: "DELETE",
  }).then((data) => data.json());
