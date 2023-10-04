import { Link } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const Register = () => {
    // const {createUser} = useContext(AuthProvider)
    const {createUser} = useContext(AuthContext)

    const handleRegister =e=>{
        e.preventDefault();
        console.log(e.currentTarget)
        // const email =e.target.name.value;
        const form =new FormData(e.currentTarget)
        const name =form.get('name')
        const email =form.get('email')
        
        const photo =form.get('photo')
        const password =form.get('password')
        console.log(name,photo,password,email)

        // createUser 
        
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    
    return (
        <div>
        <Navbar></Navbar>
           <div className="mt-10">
           <h2 className="text-3xl text-center">Please Register</h2>
          <form onSubmit={handleRegister} className=" mx-auto md:w-3/4 lg:w-1/2">

          <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name"  required placeholder="Name" className="input input-bordered"  />
        </div>
          <div className="form-control ">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo"  required placeholder="Photo" className="input input-bordered"  />
        </div>
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
          <p className="text-center py-5">Already have an account?
          
          <Link to="/login" className="text-blue-600 font-bold">
             Login</Link>
             
             </p>
           </div>    
        </div>
    );
};

export default Register;