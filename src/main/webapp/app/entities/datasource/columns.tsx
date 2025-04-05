import React from "react";
import {ColumnDef} from "@tanstack/react-table"
import {IDatasource} from "app/shared/model/datasource.model";
import {Checkbox} from "app/shacdn/components/ui/checkbox";

"use client"

export const columns: ColumnDef<IDatasource>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "activated",
        header: "Activated",
        cell: ({ row }) => {
            const activated = row.getValue("activated");
            return (
                    <Checkbox
                        checked={Boolean(activated)}
                        disabled
                    />
            );
        },
    }
]
