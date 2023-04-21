import Swal from "sweetalert2";
import axiosInstance from "./axiosConfig";

export const handleResendOTP = async (payload)=> {


    try {
    let res = await axiosInstance.post("/resendotp", 
            payload
        )

        if (res) {
            Swal.fire({
                position: "center",
                icon: "success",
                title:
                  "Kindly check your Phone number for a new OTP",
                showConfirmButton: true,
                timer: 2500,
              })
        }

        console.log(res, "resendOtp")
    } catch (error) {
        Swal.fire({
            position: "center",
            icon: "error",
            title:
              "Something went wrong, Please wait for 30 seconds and resend OTP",
            showConfirmButton: true,
            timer: 2500,
          })
    }
    
}