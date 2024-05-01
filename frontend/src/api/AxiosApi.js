import axios from "axios";


// axios - part of configuration

const Backend_Server = "http://localhost:5000/"

export const axiosInstance = async (method, endpoint, payload) => {
  try {
    const response = await axios({
      method,
      url: `${Backend_Server}${endpoint}`,
      data: payload,
    });
    return response.data;

  } catch (error) {

    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      throw error;
    }
  }
};
