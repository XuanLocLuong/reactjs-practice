const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    return response.json();
};

export const fetchUserById = async (id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    return response.json();
}