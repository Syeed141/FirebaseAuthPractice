import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { UserLogin } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;

    UserLogin(email, pass)
    .then((result) =>{

      console.log(result)
    })

    .catch((error) => {

      console.log(error)
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col text-center gap-6">
        <h1 className="text-3xl font-bold text-blue-800">Login now!</h1>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <label className="label">Email</label>
              <input
                type="email"
                className="input input-bordered"
                placeholder="Email"
                name="email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input input-bordered"
                placeholder="Password"
                name="pass"
              />

              <div className="text-left">
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button className="btn btn-neutral mt-4">Login</button>
            </form>

            <p>
              Don't have an account? <Link to="/Register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
