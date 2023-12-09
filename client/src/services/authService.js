import * as request from "../lib/request";


const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
  try {
    const result = await request.post(`${baseUrl}/login`, {
      email,
      password,
    });
    return result;
  } catch (error) {
    console.error("Error in login request:", error);
    throw error; 
  }
};

export const register = async (email, password, username) => {
  try {
    const result = await request.post(`${baseUrl}/register`, {
      email,
      password,
      username,
    });
    return result;
  } catch (error) {
    console.error("Error in register request:", error);
    throw error; 
  }
};

export const logout = () => {
  try {
    return request.get(`${baseUrl}/logout`);
  } catch (error) {
    console.error("Error in logout request:", error);
    throw error; 
  }
};
