"use client";

import "@/app/globals.css";
import React, { use, useEffect, useState } from "react";
// import { getTicketsStatus } from "./hooks/GetTicketsStatus";
// import { getCookies } from "@/app/lib/actions";
// import TicketTable from "../Tickets/components/TickketTable";
// import { revalidateLocalData } from "../tickets/hooks/revelidateTickets";
import Link from "next/link";
import LoadingSpinner from "@/app/(components)/LoadingSpinner";
import { GetUsers } from "@/app/lib/actions/UserUsecase";
import TicketTable from "@/app/(components)/TickketTable";

export default function DashboardUsers() {
  const [users, setUsers] = useState(<LoadingSpinner />);
  const [closedTickets, setClosedTickets] = useState(<LoadingSpinner />);
  const [customerSupport, setCustomerSupport] = useState(<LoadingSpinner />);
  const [servicesStatus, setServicesStatus] = useState(<LoadingSpinner />);
  const [ticketData, setTicketData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await  GetUsers();
      setUsers(res);
    };
    




    // revalidateData(prevData);
    fetchUsers();
    setIsLoading(false);
  }, []);

  return (
    <>


      {/* <div className="row mt-4 h-100">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <div className="card z-index-2 h-100">
            <div className="card-header pb-0 pt-3 bg-transparent">
              <h6 className="text-capitalize">Latest updates</h6>
            </div>
            <div className="card-body p-3">
              <div className="chart">
                <canvas
                  id="chart-line"
                  className="chart-canvas"
                  height="300"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card card-carousel overflow-hidden h-100 p-0">
            <div
              id="carouselExampleCaptions"
              className="carousel slide h-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner border-radius-lg h-100">
                <div
                  className="carousel-item h-100 active"
                  style={{
                    backgroundImage: 'url("/assets/img/carousel-1.jpg")',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i className="ni ni-camera-compact text-dark opacity-10"></i>
                    </div>
                    <h5 className="text-white mb-1">Get started with Argon</h5>
                    <p>
                      There’s nothing I really wanted to do in life that I
                      wasn’t able to get good at.
                    </p>
                  </div>
                </div>
                <div
                  className="carousel-item h-100"
                  style={{
                    backgroundImage: 'url("/assets/img/carousel-2.jpg")',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i className="ni ni-bulb-61 text-dark opacity-10"></i>
                    </div>
                    <h5 className="text-white mb-1">
                      Faster way to create web pages
                    </h5>
                    <p>
                      That’s my skill. I’m not really specifically talented at
                      anything except for the ability to learn.
                    </p>
                  </div>
                </div>
                <div
                  className="carousel-item h-100"
                  style={{
                    backgroundImage: 'url("/assets/img/carousel-3.jpg")',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i className="ni ni-trophy text-dark opacity-10"></i>
                    </div>
                    <h5 className="text-white mb-1">
                      Share with us your design tips!
                    </h5>
                    <p>
                      Don’t be afraid to be wrong because you can’t learn
                      anything from a compliment.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev w-5 me-3"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next w-5 me-3"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row mt-4">
        <div className="col-lg-12 mb-lg-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pb-2">
              <h6 className="mb-0">Latest Candidates </h6>
            </div>
            {isLoading && (
              <div className="pl-3 pb-3">
                <LoadingSpinner className="small-spinner" />
              </div>
            )}
            {!isLoading &&
              (Array.isArray(users) && users.length > 0 ? (
                <TicketTable perPage={18} ticketData={users} className="z-index-0" />
              ) : (
                <p className="p-3 pt-0 pb-2">
                  You have no tickets at the moment.
                </p>
              ))}
          </div>
        </div>

        {/* <div className="col-lg-5">
          <div className="card">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0">Categories</h6>
            </div>
            <div className="card-body p-3">
              <ul className="list-group">
                
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-tag text-white opacity-10"></i>
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Tickets</h6>
                      <span className="text-xs">
                        { closedTickets } closed,{" "}
                        <span className="font-weight-bold"> {users.length } open</span>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                      <i className="ni ni-bold-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-box-2 text-white opacity-10"></i>
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Error logs</h6>
                      <span className="text-xs">
                        0 is active,{" "}
                        <span className="font-weight-bold">4 closed</span>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                      <i className="ni ni-bold-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      {/* <Footer /> */}
      {/* <LogOutButton /> */}
    </>
  );
}
