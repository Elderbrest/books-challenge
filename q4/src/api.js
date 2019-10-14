import axios from 'axios';
const API_URL = 'http://localhost:3000'

const getBooks = () => axios.get(`${API_URL}/books`);

export {
  getBooks,
}