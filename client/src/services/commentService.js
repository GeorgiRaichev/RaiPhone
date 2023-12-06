import * as requset from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (phoneId,username,text) => {
    const data = {
        phoneId,
        username,
        text
    }
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const newComment = await response.json();

    return newComment;
}  