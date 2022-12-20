const API = "https://63a22b00a543280f776a73b0.mockapi.io/dash/dash";

export const getUsers = () => fetch(API).then((data) => data.json());

export const getUser = (id) =>
  fetch(API + "/" + id).then((data) => data.json());

export const deleteUser = (id) =>
  fetch(API + "/${id}", {
    method: "DELETE",
  }).then((data) => data.json());

export const updateUser = (id, obj) => fetch(API+'/${id}',{
    method: "PUT",
        headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());
