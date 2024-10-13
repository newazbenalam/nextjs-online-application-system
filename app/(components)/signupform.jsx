"use client";

import { useState } from "react";
import { createUser, GetAuth } from "@/app/lib/actions/getAuthentication";
import Link from "next/link";

const SignupForm = () => {
  const [state, setState] = useState( null, { error: null });
  const [data, setData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const newState = await GetAuth(formData.get("email"), formData.get("password"));
    // setState(newState);
    // console.log(newState.error);

    const newState = await createUser(data);
    if (newState) {
      window.location.href = "/";
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
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <input
          type="name"
          name="name"
          className="form-control form-control-lg mb-3"
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />
        <input
          type="mobile"
          name="mobile"
          className="form-control form-control-lg mb-3"
          placeholder="Mobile"
          onChange={(e) => setData({ ...data, mobile: e.target.value })}
          required
        />
        <input
          type="password"
          name="password"
          className="form-control form-control-lg mb-3"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />
        {state && <p className="alert-info text-white text-lg px-4 py-2 border-radius-md">{state.error}</p>}

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
          >
          Register
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
