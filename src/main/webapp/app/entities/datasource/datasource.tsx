import React, { useEffect } from 'react';
import { useAppDispatch } from "app/config/store";
import { getEntities } from "app/entities/datasource/datasource.reducer";
import PageMeta from "app/tailadmin/components/common/PageMeta";
import PageBreadcrumb from "app/tailadmin/components/common/PageBreadCrumb";
import ComponentCard from "app/tailadmin/components/common/ComponentCard";
import DatasourceTable from "app/entities/datasource/datasource-table";

const Datasource = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  return (
      <>
        <PageMeta
            title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
            description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
        />
        <PageBreadcrumb pageTitle="Basic Tables"/>
        <div className="space-y-6">
          <ComponentCard title="Basic Table 1">
            <DatasourceTable/>
          </ComponentCard>
        </div>
      </>
  );
}

export default Datasource;