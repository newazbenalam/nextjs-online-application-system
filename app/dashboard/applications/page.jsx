'use client';

import ApplicationsTable from '@/app/(components)/ApplicationsTable';
import LoadingSpinner from '@/app/(components)/LoadingSpinner'
import { getApplications } from '@/app/lib/actions/getApplicationsUsecases';
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Applications() {
  const [appliedforms, setAppliedforms] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAppliedforms = async () => {
      setAppliedforms(await getApplications());
      setIsLoading(false);
    };

    fetchAppliedforms();
  }, []);


  return (
    <>
    <div className="row mt-4">
        <div className="col-lg-12 mb-lg-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pb-2">
              <h6 className="mb-0">Latest Applied Forms </h6>
            </div>
            {isLoading && (
              <div className="pl-3 pb-3 text-center">
                <LoadingSpinner className="small-spinner" />
              </div>
            )}
            {!isLoading &&
              (Array.isArray(appliedforms) && appliedforms.length > 0 ? (
                <ApplicationsTable ticketData={appliedforms} className="z-index-0" />
              ) : (
                <p className="p-3 pt-0 pb-2">
                  You have no tickets at the moment.
                </p>
              ))}
          </div>
        </div>
    </div>
    </>
  )
}
