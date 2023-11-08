import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import '../Styles/forgotPassword.css'
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  const onSubmitHandler = async(e) =>{
    try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth,email);
        toast.success("Email Was sent");
        navigate("/signin");
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  }
  return (
    <Layout title="Forgot-Password">
      <div className="container mt-4 ">
        <form onSubmit={onSubmitHandler}>
          <div className="container mb-3 w-50">
            <h1>Reset Your Password</h1>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary mt-3">
                Reset
              </button>
              <Link to='/signin' className="mt-2">Sign In</Link>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
