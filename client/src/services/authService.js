const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const result = await response.json();
    return result;
}

export const register = async (email, password, username) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
            username,
        }),
    });

    const result = await response.json();
    return result;
}

export const logout = async () => {
    const token = sessionStorage.getItem('accessToken');
    const response = await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({
            email,
            password,
        }),

    });

}
