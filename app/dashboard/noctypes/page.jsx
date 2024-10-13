"use client";

import "@/app/globals.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LoadingSpinner from "@/app/(components)/LoadingSpinner";
import NOCtypesTable from "./components/NOCtypesTable";
import { createNotice, getNotices } from "@/app/lib/actions/getNoticesUsecase";
import { Button } from "react-bootstrap";
import { getNocTypes } from "@/app/lib/actions/getOrgInfos";
import { usePathname } from "next/navigation";

export default function NOCtypes() {
  const [nOCtypes, setNOCtypes] = useState(<LoadingSpinner />);
  const [closedTickets, setClosedTickets] = useState(<LoadingSpinner />);
  const [customerSupport, setCustomerSupport] = useState(<LoadingSpinner />);
  const [servicesStatus, setServicesStatus] = useState(<LoadingSpinner />);
  const [ticketData, setTicketData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setNOCtypes(await getNocTypes());
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
      setNOCtypes([...nOCtypes, res]);
      e.target.reset();
    }
    console.log(res);
  };


  const pathname = usePathname();


  return (
    <>



      <div className="row mt-4">
        <div className="col-lg-12 mb-lg-0 mb-4">
          <div className="card col-12">
            <div className="card-header p-3 pb-2 d-flex justify-content-between">
              <h6 className="mb-0">NOC types </h6>
              <Link href={pathname  + "/add"}>
                <button className="btn bg-gradient-primary btn-sm">Add NOC types</button>
              </Link>

            </div>
            {isLoading && (
              <div className="pl-3 pb-3 text-center">
                <LoadingSpinner className="small-spinner" />
              </div>
            )}
            {!isLoading &&
              (Array.isArray(nOCtypes) && nOCtypes.length > 0 ? (
                <NOCtypesTable perPage={18} ticketData={nOCtypes} className="z-index-0" />
              ) : (
                <p className="p-3 pt-0 pb-2">
                 {" You have no notice(s) at the moment."}
                </p>
              ))}
          </div>
        </div>
      </div>




    </>
  );
}
