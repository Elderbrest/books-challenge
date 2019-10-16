import axios from 'axios';
const API_URL = 'http://localhost:3000'

const getBooks = () => axios.get(`${API_URL}/books`);

const getBookBySlug = slug => axios.get(`${API_URL}/books/${slug}`);

export {
  getBooks,
  getBookBySlug
}