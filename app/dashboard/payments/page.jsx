'use client';

import LoadingSpinner from '@/app/(components)/LoadingSpinner'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PaymentsTable from './PaymentsTable';
import { getPayments } from '@/app/lib/actions/getPayments';

export default function Payments() {
  const [orgInfos, setOrgInfos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrgInfos = async () => {
      setOrgInfos(await getPayments());
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
              <h6 className="mb-0">Payments Info</h6>
            </div>
            {isLoading && (
              <div className="pl-3 pb-3 text-center">
                <LoadingSpinner className="small-spinner" />
              </div>
            )}
            {!isLoading &&
              (Array.isArray(orgInfos) && orgInfos.length > 0 ? (
                <PaymentsTable ticketData={orgInfos} className="z-index-0" />
              ) : (
                <p className="p-3 pt-0 pb-2">
                  {'You have no invoice(s) listed at the moment.'}
                </p>
              ))}
          </div>
        </div>
    </div>
    </>
  )
}
