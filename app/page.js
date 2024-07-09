"use client";

import React from "react";
import BoxCard from "./(components)/BoxCard";

export default function Home() {
  return (
    <>
      {/* <Navbar title="Online Application System" option="hidden"></Navbar> */}
      <main className="">
        <div className="d-flex gap-4 justify-content-center mt-5 flex-wrap">
          <BoxCard
            title="Online Application for Various NOC"
            image={
              "https://www.allbanglanewspaper.co/blog/wp-content/uploads/Services-nidw-gov-bd.png"
            }
          ></BoxCard>
          <BoxCard title="Online Application for INLAND"></BoxCard>
          <BoxCard title="Online Application for CADET EYE TEST"></BoxCard>
          <BoxCard title="Online Application for CADET NOC "></BoxCard>
          <BoxCard title="Bangladeshi CDC holder Sign Up for Password"></BoxCard>
          <BoxCard title="Other Sign Up for ID and Password"></BoxCard>
        </div>
        <div className="text-center my-5">
          <p>
            (সি ও পি সার্টিফিকেট এবং ইনল্যান্ড মাস্টার ও ড্রাইভার সার্টিফিকেট
            সংক্ৰান্ত যে কোন সমস্যার জন্য যোগাযোগ করুন : সকাল 10 টা থেকে দুপুর 1
            টা এবং দুপুর 2 টা থেকে বিকাল 4 টা পর্যন্ত)
          </p>
        </div>
        <form className="row d-flex justify-content-center ">
          <fieldset className="col-4">
            <legend> fieldset example</legend>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                 input
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledSelect" className="form-label">
                Disabled select menu
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Disabled select</option>
              </select>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  disabled
                />
                <label
                  className="form-check-label"
                  htmlFor="disabledFieldsetCheck"
                ></label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </main>
    </>
  );
}
