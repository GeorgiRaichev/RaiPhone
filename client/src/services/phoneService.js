import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/phones';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return (Object.values(result));


};
export const getOne = async (phoneId) => {
    const result = await request.get(`${baseUrl}/${phoneId}`);
    return result;


}
export const create = async (phoneData) => {
    const result = await request.post(baseUrl, phoneData);
    return result;
}

