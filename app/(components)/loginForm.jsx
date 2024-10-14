"use client";

import { useState } from "react";
import { GetAuth } from "@/app/lib/actions/GetAuthentication";

const LoginForm = () => {
  const [state, setState] = useState( null, { error: null });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newState = await GetAuth(formData.get("email"), formData.get("password"));
    setState(newState);
    console.log(newState.error);
    if (newState === "Wrong Credentials") {
      
      return;
    }
    if (newState.error === "Success"){

      window.location.href = "/dashboard"  // hard reload to update the UI as a replacement for the redirect.
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="form-control form-control-lg mb-3"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          className="form-control form-control-lg mb-3"
          placeholder="Password"
          required
        />
        {state && <p className="alert-info text-white text-lg px-4 py-2 border-radius-md">{state.error}</p>}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="rememberMe"
            name="remember-me"
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
