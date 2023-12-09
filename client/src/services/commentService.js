import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const create = async (phoneId, text) => {
    try {
        const data = {
            phoneId,
            text,
        };

        const response = await request.post(baseUrl, data);
        return response;
    } catch (error) {
        console.error("Error in create comment request:", error);
        throw error; 
    }
};

export const getAll = async (phoneId) => {
    try {
        const query = new URLSearchParams({
            where: `phoneId="${phoneId}"`,
            load: `owner=_ownerId:users`,
        });

        const result = await request.get(`${baseUrl}?${query}`);
        return result;
    } catch (error) {
        console.error("Error in get all comments request:", error);
        throw error; 
    }
};
