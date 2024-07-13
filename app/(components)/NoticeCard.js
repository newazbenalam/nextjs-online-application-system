import Link from "next/link";
import React from "react";

export default function NoticeCard({ title, subtitle, actionButton }) {
  return (
    <>
      <div className="card blur rounded px-4 ">
        <div className="row">
          <div className="col-10">
            <h4 className="mt-3  font-weight-bolder position-relative">
              { title }
            </h4>
            <p className="position-relative">{ subtitle }</p>
          </div>
          <div className="col-2 d-flex align-items-center ">
            <Link href={ actionButton }>
            <button
              // onClick={() => actionButton }
              className=" col-12 btn btn-primary"
            >
              Apply
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
