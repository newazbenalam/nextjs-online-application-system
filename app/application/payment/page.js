"use client";

import { CreatePaymentInfo, GetAppliedForm } from "@/app/lib/actions/SetApplicationsForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import './style.css';
import { Image } from "react-bootstrap";

export default function PaymentPage() {
  const [alert, setAlert] = useState(false);
  const [appliedId, setAppliedId] = useState(
    useSearchParams().get("appliedId")
  );
  const [appliedData, setAppliedData] = useState(null);
  const [lateFee, setLateFee] = useState(0);
  const [vat, setVat] = useState(0.0);
  const [totalFee, setTotalFee] = useState(0);
  const [paymentType, setPaymentType] = useState("online");

  const router = useRouter();


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
    const res = CreatePaymentInfo({ title: appliedData.title, appliedId: appliedId , totalAmount: totalFee , vatAmount: vat, fees: lateFee, status: "done", paymentType: paymentType,  });
    // redirect to payment gateway
    if (!res.error) {
      // const update = UpdateAppliedForm(appliedId, { status: "done" });
      if (confirm("Payment Successful!")) {
        // txt = "You pressed OK!";
        router.push("/");
      } else {
        // txt = "You pressed Cancel!";
        router.push("/");
      }
      if (update) {
        // redirect to payment gateway
        // window.location.href = "https://sandbox.sslcommerz.com/gwprocess/v4/api.php";
      }
    }
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
                {/* add radio button with payment method type bkash, stripe or card */}
                <form >
                  <div className="d-flex gap-3">
                    <div className="">
                      <Image src="/assets/bkash.png" alt="Bkash" width={80} height={80} className="rounded-4"/>
                      <div class="form-check  my-1">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Bkash" onClick={(e) => setPaymentType(e.target.value)} required/>
                        <label class="form-check-label" for="inlineRadio1">Bkash</label>
                      </div>
                    </div>
                    <div className="">
                      <Image src="/assets/nagad.webp" alt="Bkash" width={80} height={80} className="rounded-4"/>
                      <div class="form-check my-1">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Nagad" onClick={(e) => setPaymentType(e.target.value)} required/>
                        <label class="form-check-label" for="inlineRadio1">Nagad</label>
                      </div>
                    </div>
                    
                    {/* <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
                      <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
                    </div> */}
                  </div>

                  <button
                    className="btn btn-primary mt-2"
                    onClick={handleClick}
                    type="button"
                  >
                    {"Pay Now"}
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
