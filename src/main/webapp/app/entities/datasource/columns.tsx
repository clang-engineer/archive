import React from "react";
import {ColumnDef} from "@tanstack/react-table"
import {IDatasource} from "app/shared/model/datasource.model";
import {Checkbox} from "app/shacdn/components/ui/checkbox";
import {Button} from "app/shacdn/components/ui/button";

"use client"

// export const columns: ColumnDef<IDatasource>[] = [
export const columns = (onEditClick: (row: IDatasource) => void): ColumnDef<IDatasource>[] => [
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
    },
    {
        accessorKey: "edit",
        header: "Edit",
        cell: ({row}) => (
            <Button
                variant="outline"
                onClick={() => onEditClick(row.original)}
            >
                Edit
            </Button>
        ),

    }
]
