"use client";

import { deleteApplication, getApplication, updateApplication } from "@/app/lib/actions/getApplicationsUsecases";
import React, { useEffect, useState } from "react";
import { Status, Role } from "@prisma/client";
import { useRouter } from "next/navigation";

export default function ApplicationDetails({ params }) {
  const { id } = params;
  const [item, setItem] = useState({});
  const [change, setChange] = useState({});
  const [statuslists, setStatusLists] = useState(['Pending', 'Approved', 'Rejected', 'OnHold']);

  const router = useRouter();

  useEffect(() => {
    const fetchItem = async () => {
      setItem(await getApplication(parseInt(id)));
    }
    
    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(change);
    const res = await updateApplication(parseInt(id), change);
    if (res) {
      window.location.reload();
    }
  };

  const onDelete = async (e) => {
    const res = await deleteApplication(parseInt(id));
    if (res) {
     router.back();
    }
  }

  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-12 mb-lg-0 mb-4">
          <div className="card card-body d-flex flex-wrap gap-2">
            <form onSubmit={handleSubmit}>
              <h6>Applied Form Details</h6>
              <div className="d-flex flex-wrap">
                <div className="form-group col-6 px-2">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Form title..."
                    name="title"
                    onChange={(e) => [setItem({ ...item, title: e.target.value }), setChange({ ...change, title: e.target.value })]}
                    value={item.title}
                  />
                </div>

                
                <div className="form-group col-6 px-2">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Form description..."
                    name="description"
                    onChange={(e) => [setItem({ ...item, description: e.target.value }), setChange({ ...change, description: e.target.value })]}
                    value={item.description}
                  />
                </div>


                <div className="form-group col-6 px-2">
                  <label>CreatedAt</label>
                  <input
                    type="text"
                    className="form-control"
                    id="createdAt"
                    placeholder="Form createdAt..."
                    name="createdAt"
                    onChange={(e) => [setItem({ ...item, createdAt: e.target.value }), setChange({ ...change, createdAt: e.target.value })]}
                    value={item.createdAt}
                    disabled
                  />
                </div>


                <div className="form-group col-12 col-md-6 col-lg-6">
                    <label htmlFor="status">Status</label>
                    <select
                        className="form-control"
                        onChange={(e) => [setItem({ ...item, status: e.target.value }), setChange({ ...change, status: e.target.value })]}
                        id="status"
                        value={item.status}
                    >
                        { statuslists.map((item, index) =>
                            (<option value={item} key={index}>{item}</option>)
                        ) 
                        }
                    </select>
                </div>


                <div className="form-group col-6 px-2">
                  <label>CreatedAt</label>
                  <input
                    type="text"
                    className="form-control"
                    id="createdAt"
                    placeholder="Form createdAt..."
                    name="createdAt"
                    onChange={(e) => [setItem({ ...item, createdAt: e.target.value }), setChange({ ...change, createdAt: e.target.value })]}
                    value={item.createdAt}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Applicant Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={item.users?.name}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Notices</label>
                  <input
                    type="text"
                    className="form-control"
                    id="notices"
                    placeholder="Form notices..."
                    name="notices"
                    onChange={(e) => [setItem({ ...item, notices: e.target.value }), setChange({ ...change, notices: e.target.value })]}
                    value={item.notices?.title}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Applicant Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    // onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={item.users?.email}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Applicant Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    // onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={item.users?.mobile}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Applicant Current Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    // onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={item.users?.presentAddress}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Date of Birth</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    // onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={Date(item.users?.dob)
                      .split(":")[0]
                      .split(" ")
                      .slice(0, 4)
                      .join(" ")
                  }
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Role</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    // onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={item.users?.role}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Total Fees</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    // onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={item.paymentInfo?.totalAmount}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Main Total</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    // onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={item.paymentInfo?.fees}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Payment Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    // onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={item.paymentInfo?.fees}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Organization</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    // onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={item.orgNOCInfo?.orgName}
                    disabled
                  />
                </div>

                <div className="form-group col-6 px-2">
                  <label>Organization Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applicant"
                    placeholder="Form applicant..."
                    name="applicant"
                    // onChange={(e) => [setItem({ ...item, applicant: e.target.value }), setChange({ ...change, applicant: e.target.value })]}
                    value={item.orgNOCInfo?.orgEmail}
                    disabled
                  />
                </div>



                





           
              </div>

      
              <div className="text-end">
              <button type="submit" className=" mx-2 btn bg-gradient-primary">
                Save
              </button>
      
              <button type="button" className=" mx-2 btn bg-warning text-white" onClick={ onDelete}>
                Delete
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
