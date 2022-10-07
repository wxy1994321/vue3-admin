import Apirequest from '../index.js';

export function deluser(id) {
    return Apirequest.delete({
        url: `/users/${id}`
    })
}