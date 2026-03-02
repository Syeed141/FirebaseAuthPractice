import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";



const Register = () => {


  const {users} = use(AuthContext);

  

    const handleRegister = e => {

        e.preventDefault();

        // const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.password.value;

        
        

        users(email, pass)
        .then(result => {

          console.log(result)
        })

        .catch((error) => {

          console.log(error)
        })
        

    }

  return (
    <div className="hero min-h-screen bg-base-200 px-4">
      <div className="hero-content w-full max-w-md flex-col gap-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight">Register</h1>
          <p className="text-sm opacity-70">
             Please enter your details.
          </p>
        </div>

        {/* Card */}
        <div className="card w-full bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <form onSubmit={handleRegister} className="space-y-4" >
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Your name"
                  name="name"
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="you@example.com"
                    name="email"
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="••••••••"
                    name="password"
                />
                <label className="label">
                  <a className="label-text-alt link link-hover opacity-80">
                    Forgot password?
                  </a>
                </label>
              </div>

              <button className="btn btn-neutral w-full">Register</button>
            </form>

            <div className="divider my-6">OR</div>

            <p className="text-center text-sm opacity-80">
              Already have an account?{" "}
              <Link to="/Login" className="link link-primary font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Small footer note */}
        <p className="text-xs text-center opacity-60">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Register;
