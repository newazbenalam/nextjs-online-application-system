"use client";

import "@/app/globals.css";
import Script from 'next/script';
import React, { useEffect } from 'react'
import NoticeCard from '@/app/(components)/NoticeCard';
import Link from 'next/link';
import SignupForm from '@/app/(components)/signupform';


export default function SignupPage() {

  useEffect(() => {
    // if user is already logged in redirect to root route
  }, []);


  return (
    <body>
    <div className="container position-sticky z-index-sticky top-0">
      <div className="row">
        <div className="col-12">
          {/* <!-- Navbar --> */}
          <nav className="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4">
            <div className="container-fluid ms-0 ps-0 justify-between">
              <a
                className="navbar-brand font-weight-bolder ms-lg-0 ms-0 ps-0 "
                href={"/dashboard"}
              >
                <span className="d-none d-sm-inline">
                  Online Appliication System
                </span>
                <span className="d-inline d-sm-none">HTMS</span>
              </a>
              <button
                className="navbar-toggler shadow-none ms-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon mt-2">
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav mx-auto">
                  {/* TODO: Add navs here */}
                </ul>
                {/* <ul className="navbar-nav d-lg-block d-none">
                    <li className="nav-item w-24">
                      <a
                        href={"/tickets"}
                        className="btn btn-sm mb-0 me-1 btn-primary"
                      >
                        Create Ticket
                      </a>
                    </li>
                  </ul> */}
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}
        </div>
      </div>
    </div>

    <main className="main-content  mt-0">
      <section>
        <div className="page-header min-vh-100">
          <div className="container">
            <div className="row">
              <div className="card col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                <div className="card card-plain">
                  <div className="card-header pb-0 text-start">
                    <h4 className="font-weight-bolder">Sign up</h4>
                    <p className="mb-0">
                     Register your new account
                    </p>
                  </div>
                  <div className="card-body">
                    <SignupForm />
                  </div>
                  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-sm mx-auto">
                      {"Already registered "}
                      <Link
                        href={"/"}
                        className="text-primary text-gradient font-weight-bold"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 justify-content-center flex-column">
                <div
                  className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column  overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg')",
                    backgroundSize: "cover",
                  }}
                >
                  <span className="mask bg-gradient-primary opacity-6"></span>

                  <div className="mt-5 pt-5 overflow-auto hidescrollbar">
                    {/* {notices.map((notice, index) => {
                      return (
                        <div key={index}>
                          <NoticeCard
                            title={notice.title}
                            subtitle={notice.description}
                            actionButton={ notice.hyperlink }

                          />
                          <br />
                        </div>
                      );
                    })} */}

                    {/*                       
                    <NoticeCard
                      title={"Online Application for Various NOC "}
                      subtitle={
                        "(Safe Manning, Surveyor license, Ship Builders, Design Making,Class Authorization, Others)"
                      }
                    ></NoticeCard><br />
                    <NoticeCard
                      title={"Online Application for Various NOC "}
                      subtitle={
                        "(Safe Manning, Surveyor license, Ship Builders, Design Making,Class Authorization, Others)"
                      }
                    ></NoticeCard><br />
                    <NoticeCard
                      title={"Online Application for Various NOC "}
                      subtitle={
                        "(Safe Manning, Surveyor license, Ship Builders, Design Making,Class Authorization, Others)"
                      }
                    ></NoticeCard><br />
                    <NoticeCard
                      title={"Online Application for Various NOC "}
                      subtitle={
                        "(Safe Manning, Surveyor license, Ship Builders, Design Making,Class Authorization, Others)"
                      }
                    ></NoticeCard><br />
                    <NoticeCard
                      title={"Online Application for Various NOC "}
                      subtitle={
                        "(Safe Manning, Surveyor license, Ship Builders, Design Making,Class Authorization, Others)"
                      }
                    ></NoticeCard><br />
                    <NoticeCard
                      title={"Online Application for Various NOC "}
                      subtitle={
                        "(Safe Manning, Surveyor license, Ship Builders, Design Making,Class Authorization, Others)"
                      }
                    ></NoticeCard><br /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  </body>
  )
}
