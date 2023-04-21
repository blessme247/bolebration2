import axiosInstance from "./axiosConfig";

export const getFreeTicketCount = async ()=> {

    try {
        const response = await axiosInstance.get("/count");
        let { data } = response;
    
        console.log(data)
        return data;
      } catch (error) {
        
      }
}