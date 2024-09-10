"use client";

import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import LogoutLink from "../LogoutLink";
import { usePathname } from "next/navigation";
// import { getCookies } from "@/app/lib/actions";

export default function NavBar() {
  const currentPath = usePathname();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      // const sessionData = await getCookies();
      // setUserRole(sessionData?.user?.role);
    };
    fetchUser();
  }, []);

  const getLinkClass = (href) => {
    if (currentPath === href) {
      return "nav-link active";
    }
    return "nav-link";
  };

  return (
    <aside
      className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <Link className="navbar-brand m-0 text-center" href="#">
          {/* <Image
            width={0}
            height={0}
            src="/fastcloudx_favicon-40x40.png"
            className="navbar-brand-img h-auto w-15"
            alt="main_logo"
          /> */}
          <h5 className="font-weight-bold pr-2">HTMS  </h5>
        </Link>
      </div>
      <hr className="horizontal dark mt-0" />
      <div className="w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={getLinkClass("/admin/dashboard")} href="/admin/dashboard">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass("/admin/dashboard/applications")} href="/admin/dashboard/applications">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Applications</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass("/admin/dashboard/users")} href="/admin/dashboard/users">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-user-run text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Users</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass("/admin/dashboard/reports")} href="/admin/dashboard/reports">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Reports</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass("/admin/dashboard/training-center")} href="/admin/dashboard/trainingenter">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Training Center</span>
            </Link>
          </li>
          {userRole === ("ADMIN" || "EMPLOYEE") && (
            <li className="nav-item">
              <Link
                className={getLinkClass("/admin/dashboard/dashboard/knowledge/create")}
                href="/admin/dashboard/dashboard/knowledge/create"
              >
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni  ni-fat-add ni-4x text-primary text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Add Knowledge Base</span>
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link
              className={getLinkClass("/admin/dashboard/dashboard/knowledge")}
              href="/admin/dashboard/dashboard/knowledge"
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-album-2 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Knowledge Base</span>
            </Link>
          </li>
          {userRole === ("ADMIN" || "EMPLOYEE") && (
            <li className="nav-item">
              <Link
                className={getLinkClass("/admin/dashboard/dashboard/tables")}
                href="/admin/dashboard/dashboard/tables"
              >
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Tables</span>
              </Link>
            </li>
          )}
          {/* <li className="nav-item">
            <Link className={getLinkClass('/dashboard/billing')} href="/admin/dashboard/dashboard/billing">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Billing</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass('/dashboard/virtual-reality')} href="/admin/dashboard/dashboard/virtual-reality">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-app text-info text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Virtual Reality</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={getLinkClass('/dashboard/rtl')} href="/admin/dashboard/dashboard/rtl">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-world-2 text-danger text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">RTL</span>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              className={getLinkClass("/admin/dashboard/dashboard/tickets/lists")}
              href="/admin/dashboard/dashboard/tickets/lists"
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-credit-card text-info text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">View Tickets</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getLinkClass("/admin/dashboard/notices")}
              href="/admin/dashboard/notices"
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-collection text-info text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Notices</span>
            </Link>
          </li>
          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
              Account Control
            </h6>
          </li>
          <li className="nav-item">
            <Link
              className={getLinkClass("/admin/dashboard/dashboard/profile")}
              href="/admin/dashboard/dashboard/profile"
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Profile Manager</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={getLinkClass("/admin/dashboard/settings")}
              href="/admin/dashboard/settings"
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-settings-gear-65 text-dark text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Settings</span>
            </Link>
          </li>
          {userRole === ("ADMIN" || "EMPLOYEE") && (
          <li className="nav-item">
            <Link
              className={getLinkClass("/admin/dashboard/dashboard/sign-in")}
              href="/admin/dashboard/dashboard/sign-in"
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Create User</span>
            </Link>
          </li>)}

          <LogoutLink />
        </ul>
      </div>
    </aside>
  );
}
