"use client";

import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {  SetApplicationUserData } from "@/app/lib/actions/getApplicationsForm";

export default function ApplicationPage() {
  const [noticeId, setNoticeId] = useState(useSearchParams().get("noticeId"));
  const [nocTypeID, setNocTypeID] = useState(useSearchParams().get("nocTypeId"));
  const [nocType, setNocType] = useState(useSearchParams().get("nocType"));
  const [alert, setAlert] = useState(false);

  const router = useRouter();

  useEffect(() => {
    //restore data from local storage
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    if (personalInfo) {
      // document.getElementById("applicantName").value = personalInfo.applicantName;
      // document.getElementById("email").value = personalInfo.email;
      // document.getElementById("applicantPhone").value = personalInfo.applicantPhone;
      // document.getElementById("address").value = personalInfo.address;
      // document.getElementById("orgAddress").value = personalInfo.orgAddress;
      // document.getElementById("orgEmail").value = personalInfo.orgEmail;
      // document.getElementById("orgMobile").value = personalInfo.orgMobile;
      // document.getElementById("orgName").value = personalInfo.orgName;
      // document.getElementById("expirationDate").value = personalInfo.expirationDate;
    }
  }, [alert]);

  const onSubmitFormToNextPage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("Form data:", formDataObj);

    // save data to local storage
    formDataObj.nocTypeID = nocTypeID;
    formDataObj.nocType = nocType;

    localStorage.setItem("personalInfo", JSON.stringify(formDataObj));

    const res = await  SetApplicationUserData(formDataObj,noticeId);
    
    if (res.status === 'success') {
      setAlert(res.status);
      setTimeout(() => {
        router.push("/application/payment?appliedId="+res.appliedId);
      }, 400);
    }
    
  };

  return (
    <>
      <main className="container" style={{ marginTop: "75px" }}>
        <section className="rounded-3 card mb-2"></section>
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
                    required
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
                    required
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
                    required
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
                  <label>Current Address</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="currentAddress"
                    name="currentAddress"
                    placeholder="Dhaka, Bangladesh"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Parmanent Address</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="parAddress"
                    name="parAddress"
                    placeholder="Dhaka, Bangladesh"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Father Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="fatherName"
                    name="fatherName"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Mother Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="motherName"
                    name="motherName"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="form-group">
                  <label>NOC Types Title</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="nocTypesTitle"
                    name="nocTypesTitle"
                    placeholder="NOC Type Title"
                    value={nocType}
                    disabled
                  />
                </div>
              </div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>NID/Passport/Birth Certificate</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="nid"
                    name="nid"
                    placeholder="xxxxxxxxxx"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Date Of Birth</label>
                  <input
                    required
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                  />
                </div>
              </div>
              {/* image picker upload */}
              {/* <div className="col-md-6">
                <div className="form-group">
                  <label>Upload Profile</label>
                  <input
                    required
                    type="file"
                    className="form-control"
                    id="nid"
                    name="nid"
                  />
                </div>
              </div> */}
            </div>
            <Link href="/" className="me-2">
              <button type="reset" className="btn btn-default">
                Back
              </button>
            </Link>
            <button type="submit" className="btn bg-gradient-primary">
              Next
            </button>
          {alert && (
            <div className="alert alert-info text-white font-weight-bold" role="alert">
              {alert}
            </div>
          )}
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
