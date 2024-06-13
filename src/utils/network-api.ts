import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password
  });

  return response.data;
}