import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
export const adminKey = import.meta.env.VITE_APP_ADMIN_KEY;
export const userKey = import.meta.env.VITE_APP_TALENT_KEY;

// check user role
export const checkUserRole = (userKey: any) => {
    if (userKey == adminKey) {
        return "admin";
    } else {
        return "user";
    }
}

// Show Toastr function
export const showToast = (message: string, status: string, options?: any) => {
    const toastOptions: any = {
        type: status,
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: true,
        pauseOnHover: true,
        newestOnTop: true,
        rtl: false,
        pauseOnFocusLoss: true,
        theme: "light",
        ...options,
    };

    return toast(message, toastOptions);
};

// jwt decode
export function jwtDecoder(token:any) {
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken;
    }
}