import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow
} from "app/tailadmin/components/ui/table";
import tableData from "app/entities/datasource/dummy";
import Badge from "app/tailadmin/components/ui/badge/Badge";
import { useAppSelector } from "app/config/store";
import { IDatasource } from "app/shared/model/datasource.model";

const DatasourceTable = () => {
  const entities = useAppSelector<IDatasource[]>(state => state.datasource.entities);

  const columss = [
    {"key": "title", "label": "Title"},
    {"key": "description", "label": "Description"},
    {"key": "createdBy", "label": "Created By"},
    {"key": "createdDate", "label": "Created Date"},
    {"key": "status", "label": "Status"},
  ]

  return (
      <div
          className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[1102px]">
            <Table>
              {/* Table Header */}
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  {
                    columss.map((column) => (
                        <TableCell
                            isHeader
                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                        >
                          {column.label}
                        </TableCell>
                    ))
                  }
                </TableRow>
              </TableHeader>
              {/* Table Body */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {
                  entities.map((datasource) => (
                      <TableRow key={datasource.id}>
                        <TableCell className="px-5 py-4 sm:px-6 text-start">
                          <div className="flex items-center gap-3">
                            <div>
                          <span
                              className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {datasource.title}
                          </span>
                              <span
                                  className="block text-gray-500 text-theme-xs dark:text-gray-400">
                            {datasource.description}
                          </span>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                  ))
                }
                {tableData.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="px-5 py-4 sm:px-6 text-start">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 overflow-hidden rounded-full">
                            <img
                                width={40}
                                height={40}
                                src={order.user.image}
                                alt={order.user.name}
                            />
                          </div>
                          <div>
                        <span
                            className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.user.name}
                        </span>
                            <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {order.user.role}
                        </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                          className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {order.projectName}
                      </TableCell>
                      <TableCell
                          className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <div className="flex -space-x-2">
                          {order.team.images.map((teamImage, index) => (
                              <div
                                  key={index}
                                  className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                              >
                                <img
                                    width={24}
                                    height={24}
                                    src={teamImage}
                                    alt={`Team member ${index + 1}`}
                                    className="w-full size-6"
                                />
                              </div>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell
                          className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <Badge
                            size="sm"
                            color={
                              order.status === "Active"
                                  ? "success"
                                  : order.status === "Pending"
                                      ? "warning"
                                      : "error"
                            }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell
                          className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                        {order.budget}
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
  )
};

export default DatasourceTable;