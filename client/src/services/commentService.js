import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const create = async (phoneId, text) => {
    const data = {
        phoneId,
        text,
    }

    const response = await request.post(baseUrl,data);
    return response;
}

export const getAll = async (phoneId) => {
    const query = new URLSearchParams({
        where: `phoneId="${phoneId}"`,
        load: `owner=_ownerId:users`,
    });
    const result = await request.get(`${baseUrl}?${query}`);
    return result;


}