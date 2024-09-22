import React from 'react'
import { Nav } from 'react-bootstrap'
import NavBar from '../(components)/NavBar'

export default function ApplicationLayout({ children }) {
  return (
    <>
          <body className=''>
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4">
              <div className="m-auto">
                <a
                  className="navbar-brand font-weight-bolder ms-lg-0 ms-0 ps-0 "
                  href={"/dashboard"}
                >
                  <span className="d-none d-sm-inline">
                 {" Department of Shipping (Online Application System)"}
                  </span>
                  <span className="d-inline d-sm-none">OAS</span>
                </a>
                {/* <button
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
                </button> */}

              </div>
            </nav>
            {/* <!-- End Navbar --> */}
          </div>
        </div>
      </div>
      {/* <NavBar /> */}
      { children }
    </body>
    </>
  )
}
