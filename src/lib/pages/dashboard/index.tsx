'use client';

import { useEffect } from 'react';

import DashboardTable from '@/lib/components/dashboard/table';
import { Label } from '@/lib/components/ui/label';
import { useUserStore } from '@/utils/zustandStore';

const MOCKUSERID = 'USER001';

const DashboardPage = () => {
  const setUserID = useUserStore((state) => state.setUserID);

  useEffect(() => {
    setUserID(MOCKUSERID);
  }, [setUserID]);

  return (
    <div className="flex flex-col items-center w-full mt-10 space-y-4">
      <Label> Hello, User {MOCKUSERID} </Label>
      <DashboardTable />
    </div>
  );
};

export default DashboardPage;
