import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
  const {SignIn}=useContext(AuthContext)
  const location =useLocation()
  console.log('location in login page',location)

  const navigate =useNavigate();

  console.log(location)
    const handleLogin =e=>{
        e.preventDefault();
        console.log(e.currentTarget)
        // const email =e.target.name.value;
      
        const form =new FormData(e.currentTarget)
        const email =form.get('email')
        const password =form.get('password')
        console.log(email,password)

        SignIn(email,password)
        .then(result=>{
          console.log(result.user)
          // navigate after login
          navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
          console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
           <div className="mt-10">
           <h2 className="text-3xl text-center">Please Login</h2>
          <form onSubmit={handleLogin} className=" mx-auto md:w-3/4 lg:w-1/2">

          <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email"  required placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" required name="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
          </form>
          <p className="text-center py-5">Do not have an account?<Link to='/register' className="text-blue-600 font-bold"> Register</Link></p>
           </div>
        </div>
    );
};

export default Login;