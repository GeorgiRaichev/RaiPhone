import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/phones';

export const getAll = async () => {
    try {
        const result = await request.get(baseUrl);
        return result;
    } catch (error) {
        console.error("Error in get all phones request:", error);
        throw error; 
    }
};

export const getOne = async (phoneId) => {
    try {
        const result = await request.get(`${baseUrl}/${phoneId}`);
        return result;
    } catch (error) {
        console.error(`Error in get phone by id (${phoneId}) request:`, error);
        throw error; 
    }
};

export const create = async (phoneData) => {
    try {
        const result = await request.post(baseUrl, phoneData);
        return result;
    } catch (error) {
        console.error("Error in create phone request:", error);
        throw error; 
    }
};

export const edit = async (phoneId, phoneData) => {
    try {
        const result = await request.put(`${baseUrl}/${phoneId}`, phoneData);
        return result;
    } catch (error) {
        console.error(`Error in edit phone (${phoneId}) request:`, error);
        throw error; 
    }
};

export const remove = async (phoneId) => {
    try {
        return await request.del(`${baseUrl}/${phoneId}`);
    } catch (error) {
        console.error(`Error in remove phone (${phoneId}) request:`, error);
        throw error; 
    }
};

export const dali = async (phoneId) => {
    try {
        return await request.deleteBuy(`${baseUrl}/${phoneId}`);
    } catch (error) {
        console.error(`Error in delete  phone (${phoneId}) request:`, error);
        throw error; 
    }
};
