import Script from "next/script";
import React from "react";


export const metadata = {
  title: "Login Page",
  description: "",
};


export default function LoginLayout({ children }) {
  return (
    <>
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

        {children}

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
    </>
  );
}
