const buildOptions = (data, dali) => {
    const options = {};
  
    if (data) {
      options.body = JSON.stringify(data);
      options.headers = {
        'content-type': 'application/json'
      };
    }
    const token = localStorage.getItem('accessToken');
    if (token) {
      options.headers = {
        ...options.headers,
        'X-Authorization': token
      };
      if (dali) {
        options.headers = {
          ...options.headers,
          'X-Admin': token
        };
      }
    }
    return options;
  };
  
  export const request = async (method, url, data) => {
    try {
      const response = await fetch(url, {
        ...buildOptions(data),
        method,
      });
  
      if (response.status === 204) {
        return {};
      }
  
      const result = await response.json();
      if (!response.ok) {
        throw result;
      }
      return result;
    } catch (error) {
      console.error(`Error in ${method} request to ${url}:`, error);
      throw error;
    }
  };
  
  export const dali = async (method, url, data) => {
    try {
      const response = await fetch(url, {
        ...buildOptions(data, true),
        method,
      });
  
      if (response.status === 204) {
        return {};
      }
  
      const result = await response.json();
      if (!response.ok) {
        throw result;
      }
      return result;
    } catch (error) {
      console.error(`Error in ${method} request to ${url} (admin):`, error);
      throw error; 
    }
  };
  
  export const get = request.bind(null, 'GET');
  export const post = request.bind(null, 'POST');
  export const put = request.bind(null, 'PUT');
  export const del = request.bind(null, 'DELETE');
  export const deleteBuy = dali.bind(null, 'DELETE');
  