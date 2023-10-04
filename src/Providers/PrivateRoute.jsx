import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,lodding}=useContext(AuthContext)
    const location= useLocation()
    console.log(location.pathname)
    if(lodding){
        return <span className="loading loading-spinner loading-lg mx-auto text-center"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;