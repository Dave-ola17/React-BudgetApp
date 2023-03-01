// react-router-dom imports
import { Navigate } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction(){
    // to delete a user
    deleteItem({
        key: "userName"
    })
    toast.success("Your account has been deleted successfully!!", {position: "top-left", autoClose: 2000} );
    // to redirect a user
    return Navigate("/")
}