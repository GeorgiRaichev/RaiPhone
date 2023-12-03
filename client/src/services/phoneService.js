const baseUrl = 'http://localhost:3030/jsonstore';

export const create = async (phoneData) => {
    const response = await fetch(`${baseUrl}/phones`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(phoneData)
    });
    const result = await response.json();

    return result;
}