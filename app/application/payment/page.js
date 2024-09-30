"use client";

import { CreatePaymentInfo, GetAppliedForm, UpdateAppliedForm } from "@/app/lib/actions/SetApplicationsForm";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import './style.css';

export default function PaymentPage() {
  const [alert, setAlert] = useState(false);
  const [appliedId, setAppliedId] = useState(
    useSearchParams().get("appliedId")
  );
  const [appliedData, setAppliedData] = useState(null);
  const [lateFee, setLateFee] = useState(0);
  const [vat, setVat] = useState(0);
  const [totalFee, setTotalFee] = useState(0);

  useEffect(() => {
    const foo = async () => {
      const res = await GetAppliedForm(appliedId);
      setAppliedData(res);
      if (res.notices.cost > 0) {
        setLateFee(res.notices.lateFee);
        setVat(res.notices.cost + res.notices.lateFee * 0.15);
        setTotalFee(res.notices.cost + res.notices.lateFee + vat);
      }
    };
    foo();
  }, []);

 const handleClick = () => {
    CreatePaymentInfo({ title: appliedData.title, appliedId: appliedId , totalAmount: totalFee , status: "done", paymentType: "online",  });
    // redirect to payment gateway
  }

  return (
    <>
      <main className="container" style={{ marginTop: "75px" }}>
        <section className="rounded-3 card mb-2"></section>
        <section className="card">
          <p className="pt-4 navbar-brand font-weight-bold m-auto py-2">
            {"Payment Information"}
          </p>
          <div className="card-body py-0 mx-0">
            <p className="font-weight-bold py-2">
              {"Applicant ID: " + appliedId}
            </p>
            {appliedData && (
              <>
                <p className=" font-weight-bold ">{"Application Type: " + appliedData.title}</p>
                {/* view the costs in row using space betweem */}
                <div className="d-flex row justify-content-between">
                  <p className="col-6 col-lg-3 ">{"Application Fee: "}</p>
                  <p className="col-4 col-lg-2 text-end">{ appliedData.notices.cost +' BDT'}</p>
                </div>
                <div className="d-flex row justify-content-between">
                  <p className="col-6 col-lg-3 ">{"Late Fee: "}</p>
                  <p className="col-4 col-lg-2 text-end">{lateFee +' BDT'}</p>
                </div>
                <div className="d-flex row justify-content-between">
                  <p className="col-6 col-lg-3 ">{"VAT: "}</p>
                  <p className="col-4 col-lg-2 text-end">{vat +' BDT'}</p>
                </div>
                {/* place a divider here with grey line*/}
                <hr />
                <div className="d-flex row justify-content-between">
                  <p className="col-6 col-lg-3 ">{"Total Fee: "}</p>
                  <p className="col-4 col-lg-2 text-end">{totalFee +' BDT'}</p>
                </div>
                {/* add payment type */}
                <div className="d-flex row justify-content-between">
                  <p className="col-6 col-lg-3 ">{"Payment Type: "}</p>
                  <p className="col-4 col-lg-2 text-end">{"Online"}</p>
                </div>

                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handleClick}
                >
                  {"Pay Now"}
                </button>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
