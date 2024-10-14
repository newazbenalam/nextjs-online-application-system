"use client";

import Link from "next/link";
import React from "react";

export default function NoticeCard({ title, subtitle, actionButton }) {
  return (
    <>
      <div className="card blur rounded p-4">
        <div className=" d-flex flex-wrap">
          <div className="col-lg-10">
            <h4 className="mt-3  font-weight-bolder position-relative">
              { title }
            </h4>
            <p className="position-relative">{ subtitle }</p>
          </div>
          <div className="d-flex align-items-center">
            <Link href={ actionButton }>
            <button
              // onClick={() => actionButton }
              className=" col-12 btn btn-primary m-auto"
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
