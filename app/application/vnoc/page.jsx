"use client";

import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { GetNOCtypes } from "@/app/lib/actions/GetNocTypes";
import { useRouter } from "next/navigation";

export default function ApplicationPage() {
  const router = useRouter();
  const [nocTypes, setNocTypes] = useState([]);
  const [nocType, setNocType] = useState("");

  router.prefetch("/application/vnoc/form");

  useEffect(() => {
    const getNocTypes = async () => {
      const res = await GetNOCtypes();
      setNocTypes(res);
    };

    getNocTypes();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nocTypeId = formData.get("nocTypeId");
    console.log(nocTypeId);
    router.push("/application/vnoc/form?nocTypeId=" + nocTypeId + "&nocType=" + nocType);
  };

  return (
    <>
      <main className="main-content mt-0">
        <section>
          <div className="container" style={{ marginTop: "80px" }}>
            <div className="card">
              <div className=" d-flex justify-content-center ">
                <form className=" col-12 col-lg-9 text-center" onSubmit={onSubmit}>
                  {/* Progress state indicator */}

                  <div className=" card-body form-group">
                    <label for="exampleFormControlSelect1">
                      Select NOC Type
                    </label>
                    <select
                      className="form-control"
                      id="nocTypeId"
                      onChange={(e) => setNocType(e.target.selectedOptions[0].getAttribute('details'))}
                      required
                    >
                      <option value=""></option>
                      {nocTypes.map((nocType) => (
                        <option key={nocType.id} value={nocType.id} details={nocType.title} >
                          {nocType.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Link href={"/"} className="me-2">
                    <button type="reset" className="btn btn-default">
                      Back
                    </button>
                  </Link>

                  <button type="submit" className="btn bg-gradient-primary">
                    Next
                  </button>
                  {/* <Link href={"/application/vnoc/form"}/> */}
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
