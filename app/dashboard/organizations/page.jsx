'use client';

import LoadingSpinner from '@/app/(components)/LoadingSpinner'
import { getOrgInfos } from '@/app/lib/actions/getOrgInfos';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import OrganizationsTable from './OrganizationsTable';

export default function Organizations() {
  const [orgInfos, setOrgInfos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrgInfos = async () => {
      setOrgInfos(await getOrgInfos());
      setIsLoading(false);
    };

    fetchOrgInfos();
  }, []);


  return (
    <>
    <div className="row mt-4">
        <div className="col-lg-12 mb-lg-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pb-2">
              <h6 className="mb-0">Organizations Info</h6>
            </div>
            {isLoading && (
              <div className="pl-3 pb-3 text-center">
                <LoadingSpinner className="small-spinner" />
              </div>
            )}
            {!isLoading &&
              (Array.isArray(orgInfos) && orgInfos.length > 0 ? (
                <OrganizationsTable ticketData={orgInfos} className="z-index-0" />
              ) : (
                <p className="p-3 pt-0 pb-2">
                  You have no organizations listed at the moment.
                </p>
              ))}
          </div>
        </div>
    </div>
    </>
  )
}
