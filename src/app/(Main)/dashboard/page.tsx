"use client";

import MainWrapper from "@/components/dashboard/main-wrapper";
import { useFetchClientsQuery } from "@/lib/api/client.api";

export default function DashboardPage() {
  const { data } = useFetchClientsQuery();

  console.log('Data', data);
  
  return <MainWrapper title="Dashboard">Dashboard page</MainWrapper>;
}
