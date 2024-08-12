"use client";

import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SetApplicationPersonalData } from "@/app/lib/actions/SetApplicationsForm";

export default function ApplicationPage() {
  const [nocTypeID, setNocTypeID] = useState(useSearchParams().get("nocTypeId"));
  const [nocType, setNocType] = useState(useSearchParams().get("nocType"));

  useEffect(() => {
    //restore data from local storage
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    if (personalInfo) {
      document.getElementById("applicantName").value = personalInfo.applicantName;
      document.getElementById("email").value = personalInfo.email;
      document.getElementById("applicantPhone").value = personalInfo.applicantPhone;
      document.getElementById("address").value = personalInfo.address;
      document.getElementById("orgAddress").value = personalInfo.orgAddress;
      document.getElementById("orgEmail").value = personalInfo.orgEmail;
      document.getElementById("orgMobile").value = personalInfo.orgMobile;
      document.getElementById("orgName").value = personalInfo.orgName;
      document.getElementById("expirationDate").value = personalInfo.expirationDate;
    }
  }, []);

  const onSubmitFormToNextPage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("Form data:", formDataObj);

    // save data to local storage
    formDataObj.nocTypeID = nocTypeID;
    formDataObj.nocType = nocType;

    localStorage.setItem("personalInfo", JSON.stringify(formDataObj));

    const res = await  SetApplicationPersonalData(formDataObj);
    
    if (res.status === 201) {
      window.location.href = "/application/payment";
    }
    
  };

  return (
    <>
      <main className="container" style={{ marginTop: "75px" }}>
        <section className="rounded-3 card mb-2">
        </section>
        <section className="card">
          <p className="pt-4 navbar-brand font-weight-bold m-auto py-2">
            {"Personal Information"}
          </p>
          <form className="m-4" onSubmit={onSubmitFormToNextPage}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicantName"
                    name="applicantName"
                    placeholder="Full Name As Per NID"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="applicantPhone"
                    name="applicantPhone"
                    placeholder="01500000125"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Dhaka, Bangladesh"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Organization Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="orgAddress"
                    name="orgAddress"
                    placeholder="Dhaka, Bangladesh"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Organization Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="orgEmail"
                    name="orgEmail"
                    placeholder="example@org.com"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Organization Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="orgMobile"
                    name="orgMobile"
                    placeholder="01500000125"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>NOC Types Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nocTypesTitle"
                    name="nocTypesTitle"
                    placeholder="NOC Type Title"
                    value={nocType}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Organization Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="orgName"
                    name="orgName"
                    placeholder="Organization Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Expiration Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="expirationDate"
                    name="expirationDate"
                  />
                </div>
              </div>
            </div>
            <Link href="/" className="me-2">
              <button type="reset" className="btn btn-default">
                Back
              </button>
            </Link>
            <button   type="submit" className="btn bg-gradient-primary">
              Next
            </button>
          </form>
        </section>
      </main>

      <Script id="sidenav-scrollbar-script">
        {`
          var win = navigator.platform.indexOf('Win') > -1;
          if (win && document.querySelector('#sidenav-scrollbar')) {
            var options = {
              damping: '0.5'
            };
            Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
          }
        `}
      </Script>
    </>
  );
}
