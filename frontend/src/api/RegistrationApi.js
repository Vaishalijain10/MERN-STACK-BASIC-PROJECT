import { axiosInstance } from "./AxiosApi";


// export const restaurantLogin = async (payload) => {
//     const response = await axiosInstance("post", "./api/restaurant-login", payload);
//     return response;
//   };


  
  export const UserRegistrationSave = async (payload) => {
    const response = await axiosInstance("post", "./api/user_details", payload);
    return response;
  };

