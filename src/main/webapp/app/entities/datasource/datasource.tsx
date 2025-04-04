import React, {useEffect} from 'react';
import {useAppDispatch} from "app/config/store";
import {getEntities} from "app/entities/datasource/datasource.reducer";
import PageMeta from "app/tailadmin/components/common/PageMeta";
import PageBreadcrumb from "app/tailadmin/components/common/PageBreadCrumb";
import ComponentCard from "app/tailadmin/components/common/ComponentCard";
import DatasourceTable from "app/entities/datasource/datasource-table";
import {PlusIcon} from "app/tailadmin/icons";
import DatasourceCreateModal from "app/entities/datasource/datasource-create-modal";

const Datasource = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getEntities({}));
    }, []);

    const TitleButton = () => {
        return <button type="button"
                       className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                    inline-flex items-center gap-2">
            <PlusIcon fill="white"/>
            Extra small
        </button>
    }


    return (
        <>
            <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Datasource"/>
            <div className="space-y-6">
                <ComponentCard title={<TitleButton/>}>
                    <DatasourceTable/>
                </ComponentCard>
            </div>
            <DatasourceCreateModal/>
        </>
    );
}

export default Datasource;