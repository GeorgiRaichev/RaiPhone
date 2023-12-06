import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/phones';

export const getAll = async () => {
    const result = await request.request('GET',baseUrl);
    return (Object.values(result));  
};
export const getOne = async (phoneId) => {
    const result = await request.request('GET', `${baseUrl}/${phoneId}`);
    
    return result;
}
export const create = async (phoneData) => {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(phoneData)
    });
    const result = await response.json();

    return result;
}

