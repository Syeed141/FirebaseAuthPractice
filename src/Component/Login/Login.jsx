import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col text-center gap-6">
    <h1 className="text-3xl font-bold text-blue-800">Login now!</h1>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form >
          <label className="label">Email</label>
          <input type="email" className="input input-bordered" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input input-bordered" placeholder="Password" />

          <div className="text-left">
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4">Login</button>
        </form>

        <p>Don't have an account? <Link to='/Register'>Register</Link></p>
      </div>

    </div>
  </div>
</div>
    
  );
};

export default Login;
