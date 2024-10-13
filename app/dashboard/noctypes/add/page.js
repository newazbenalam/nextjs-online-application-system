"use client";

import "@/app/globals.css";
import React, { use, useEffect, useState } from "react";
import LoadingSpinner from "@/app/(components)/LoadingSpinner";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { createNOCtype } from "@/app/lib/actions/getNocTypes";

export default function AddNOCtypes() {

  const router = useRouter();

  useEffect(() => {
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const hyperlink = e.target.hyperlink.value;

    const res = await createNOCtype( title, description, hyperlink);
    // append new notice to the list
    if (res) {
      e.target.reset();
      router.back();
    }
    console.log(res);
  };

  return (
    <>


      <div className="row mt-4">
        <div className="col-lg-12 mb-lg-0 mb-4">
          <div className="card card-body">
            <form onSubmit={ handleSubmit }>
              {/* {session && <h6>Welcome, {session?.user?.name}</h6>} */}
                <h6>Create New NOC Types</h6>
                <div className="form-group">
                  <label >Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Application notice..."
                    name="title"
                  />
                </div>

                <div className="form-group">
                  <label >Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="..."
                    name="description"
                  />
                </div>

                <div className="form-group">
                  <label >Hyperlink</label>
                  <input
                    type="text"
                    className="form-control"
                    id="hyperlink"
                    placeholder="/application/vnoc"
                    name="hyperlink"
                  />
                </div>


                {/* <div className="form-group">
                  <label htmlFor="exampleFormControlInput2">Subject</label>
                  <input
                    value=''
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Subject"
                    // onChange={handleChange}
                    name="subject"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Priority</label>
                  <select
                    value=''
                    className="form-control"
                    id="exampleFormControlSelect1"
                    // onChange={handleChange}
                    name="priority"
                  >
                    <option>LOW</option>
                    <option>MEDIUM</option>
                    <option>HIGH</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect2">Category</label>
                  <select
                    value=''
                    className="form-control"
                    id="exampleFormControlSelect1"
                    // onChange={handleChange}
                    name="category"
                  >
                    <option>GENERAL</option>
                    <option>TECHNICAL</option>
                    <option>SALES</option>
                    <option>BILLING</option>
                    <option>ACCOUNT</option>
                    <option>OTHER</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Description</label>
                  <textarea
                    value=''
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Please describe your issue here..."
                    // onChange={handleChange}
                    name="description"
                  ></textarea>
                </div> */}
                <Button type="submit" className="btn bg-gradient-primary" >
                  Submit
                </Button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}
