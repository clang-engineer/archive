import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "app/config/store";
import {getEntities} from "app/entities/datasource/datasource.reducer";
import PageMeta from "app/shared/tailadmin/components/common/PageMeta";
import PageBreadcrumb from "app/shared/tailadmin/components/common/PageBreadCrumb";
import ComponentCard from "app/shared/tailadmin/components/common/ComponentCard";
import {Button} from "app/shared/shacdn/components/ui/button";
import DatasourceUpdate from "app/entities/datasource/datasource-update";
import {DataTable} from "app/shared/shacdn/components/ui/data-table";
import {columns} from "app/entities/datasource/columns";

const Datasource = () => {
    const dispatch = useAppDispatch();

    const datasourceUpdateRef = useRef(null);

    const entities = useAppSelector(state => state.datasource.entities);

    useEffect(() => {
        dispatch(getEntities({}));
    }, []);

    return (
        <>
            <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Datasource"/>
            <div className="space-y-6">
                <ComponentCard title={
                    <Button onClick={() => {
                        datasourceUpdateRef.current.open({});
                    }}>
                        Add Datasource
                    </Button>

                }>
                    <DataTable
                        columns={
                        columns(
                            {
                                onEditClick: (row) => {
                                    datasourceUpdateRef.current.open(row);
                                },
                                onDeleteClick: (id) => {
                                    alert("Delete " + id);
                                }
                            }
                        )
                    } data={entities}/>
                </ComponentCard>
            </div>
            <DatasourceUpdate ref={datasourceUpdateRef}/>
        </>
    );
}

export default Datasource;