"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
// import '@app/globals.css'; 

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer pt-3">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              {year && (
                <>
                  All Rights Reserved DoS © {year}, Powered by: Dream71 
                 
                </>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <Link
                  href="https://github.com/Faria-Islam-Sumi"
                  className="nav-link text-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Faria Islam Sumi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link text-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="https://github.com/newazbenalam"
                  className="nav-link pe-0 text-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
