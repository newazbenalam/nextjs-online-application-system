"use client";

import "@/app/globals.css";
import React, { use, useEffect, useState } from "react";
// import { getTicketsStatus } from "./hooks/GetTicketsStatus";
// import { getCookies } from "@/app/lib/actions";
// import TicketTable from "../Tickets/components/TickketTable";
// import { revalidateLocalData } from "../tickets/hooks/revelidateTickets";
import Link from "next/link";
import LoadingSpinner from "@/app/(components)/LoadingSpinner";
import NoticesTable from "./components/NoticesTable";
import { createNotice, getNotices } from "@/app/lib/actions/getNoticesUsecase";
import { Button } from "react-bootstrap";

export default function DashboardNotices() {
  const [notices, setNotices] = useState(<LoadingSpinner />);
  const [closedTickets, setClosedTickets] = useState(<LoadingSpinner />);
  const [customerSupport, setCustomerSupport] = useState(<LoadingSpinner />);
  const [servicesStatus, setServicesStatus] = useState(<LoadingSpinner />);
  const [ticketData, setTicketData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await  getNotices();
      setNotices(res);
    };
    




    // revalidateData(prevData);
    fetchUsers();
    setIsLoading(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const hyperlink = e.target.hyperlink.value;

    const res = await createNotice( title, description, hyperlink);
    // append new notice to the list
    if (res) {
      setNotices([...notices, res]);
      e.target.reset();
    }
    console.log(res);
  };


  return (
    <>



      <div className="row mt-4">
        <div className="col-lg-12 mb-lg-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pb-2">
              <h6 className="mb-0">Notice List </h6>
            </div>
            {isLoading && (
              <div className="pl-3 pb-3 text-center">
                <LoadingSpinner className="small-spinner" />
              </div>
            )}
            {!isLoading &&
              (Array.isArray(notices) && notices.length > 0 ? (
                <NoticesTable perPage={18} ticketData={notices} className="z-index-0" />
              ) : (
                <p className="p-3 pt-0 pb-2">
                 {" You have no notice(s) at the moment."}
                </p>
              ))}
          </div>
        </div>
      </div>


      <div className="row mt-4">
        <div className="col-lg-12 mb-lg-0 mb-4">
          <div className="card card-body">
            <form onSubmit={ handleSubmit }>
              {/* {session && <h6>Welcome, {session?.user?.name}</h6>} */}
                <h6>Create New Notice</h6>
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
