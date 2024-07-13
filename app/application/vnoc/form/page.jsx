"use client";

import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { GetNOCtypes } from "@/app/lib/actions/GetNocTypes";

export default function ApplicationPage() {
  const [nocTypes, setNocTypes] = useState([]);

  useEffect(() => {
    const getNocTypes = async () => {
      const res = await GetNOCtypes();
      setNocTypes(res);
    };

    getNocTypes();
  }, []);

  const foo = () => {
    // redirect to login page
    window.location.href = "/application/payment";
  };

  return (
    <>
      <main className="main-content container " style={{ marginTop: "100px" }}>
        <section>
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label
                    for="example-password-input"
                    class="form-control-label"
                  >
                    Password
                  </label>

                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label
                    for="example-password-input"
                    class="form-control-label"
                  >
                    Password
                  </label>

                  <input
                    type="text"
                    placeholder="Regular"
                    class="form-control"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label
                    for="example-password-input"
                    class="form-control-label"
                  >
                    Password
                  </label>

                  <div class="input-group mb-4">
                    <span class="input-group-text">
                      <i class="ni ni-zoom-split-in"></i>
                    </span>
                    <input
                      class="form-control"
                      placeholder="Search"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label
                    for="example-password-input"
                    class="form-control-label"
                  >
                    Password
                  </label>

                  <div class="input-group mb-4">
                    <input
                      class="form-control"
                      placeholder="Birthday"
                      type="text"
                    />
                    <span class="input-group-text">
                      <i class="ni ni-zoom-split-in"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group has-success">
                  <input
                    type="text"
                    placeholder="Success"
                    class="form-control is-valid"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group has-danger">
                  <input
                    type="email"
                    placeholder="Error Input"
                    class="form-control is-invalid"
                  />
                </div>
              </div>
            </div>
            <Link href={"/"} className="me-2">
              <button type="reset" className="btn btn-default">
                Back
              </button>
            </Link>

            <button type="submit" className="btn bg-gradient-primary">
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
