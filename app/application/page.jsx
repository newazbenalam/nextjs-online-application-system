"use client";

import Script from "next/script";
import React, { useEffect, useState } from "react";
import { getNocTypes } from "../lib/actions/getNocTypes";

export default function ApplicationPage() {
  const [nocTypes, setNocTypes] = useState([]);

  useEffect(() => {
    const runner = async () => {
      const res = await getNocTypes();
      setNocTypes(res);
    }

    runner();
  }  , []);



  const foo = () => {
    // redirect to login page
    window.location.href = "/application/payment";
  };

  return (
    <>
      <main className="main-content  mt-0">
        <section>
          <div className="page-header mt-5 pt-5">
            <div className="container">
              <div className=" d-flex justify-content-center ">

                
                <form className="col-12 col-lg-9">

                  {/* Progress state indicator */}


                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      Select NOC Type
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1" required>
                      <option value=""></option>
                      {nocTypes.map((nocType) => (
                        <option key={nocType.id} value={nocType.id}>
                          {nocType.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" class="btn bg-gradient-primary">Next</button>


                </form>
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
    </>
  );
}
