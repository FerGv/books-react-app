// Utils
import { request } from '../utils/request';

const BASE_URI = '/books';

export const createBook = (data) => request.post(BASE_URI, data);
export const getBooks = () => request.get(BASE_URI);
export const getBook = (id) => request.get(`${BASE_URI}/${id}`);
export const updateBook = (id, data) => request.put(`${BASE_URI}/${id}`, data);
export const deleteBook = (id) => request.delete(`${BASE_URI}/${id}`);
