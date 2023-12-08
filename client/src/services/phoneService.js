import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/phones';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;


};
export const getOne = async (phoneId) => {
    const result = await request.get(`${baseUrl}/${phoneId}`);
    return result;


}
export const create = async (phoneData) => {
    const result = await request.post(baseUrl, phoneData);
    return result;
}

export const edit = async (phoneId, phoneData) => {
    const result = await request.put(`${baseUrl}/${phoneId}`, phoneData);

    return result;
};

export const remove = async (phoneId) => request.del(`${baseUrl}/${phoneId}`);

export const dali = async (phoneId) => request.deleteBuy(`${baseUrl}/${phoneId}`);

