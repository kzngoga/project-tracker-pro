"use client";

import { DataTable } from "@/components/tables/data-table";
import { useFetchClientsQuery } from "@/lib/api/client.api";
import { columns } from "@/lib/config/clients/clients-table-columns";

export default function MainContent() {
  const { data: clients, isFetching, isError } = useFetchClientsQuery();

  return (
    <div>
      <DataTable
        title="All clients"
        columns={columns}
        data={clients || []}
        isLoading={isFetching}
        hasError={isError && !clients?.length}
        errorMessage="No clients found!"
        searchPlaceholder="Search clients..."
        onActionClick={() => {}}
      />
    </div>
  );
}
