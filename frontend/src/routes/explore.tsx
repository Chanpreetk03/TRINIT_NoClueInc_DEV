import * as React from "react";

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {ArrowUpDown} from "lucide-react";
import {Link} from "react-router-dom";

export const columns = [
    {
        accessorKey: "name",
        header: () => <div>Name</div>,
        cell: ({row}: { row: any }) => <div>{row.getValue("name")}</div>,
    },
    {
        accessorKey: "language",
        header: () => <div>Language</div>,
        cell: ({row}: { row: any }) => <div>{row.getValue("language")}</div>,
    },
    {
        accessorKey: "experience",
        header: ({column}: { column: any }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Experience
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            );
        },
        cell: ({row}: { row: any }) => <div>{row.getValue("experience")}</div>,
    },
    {
        accessorKey: "pricing",
        header: ({column}: { column: any }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Pricing
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            );
        },
        cell: ({row}: { row: any }) => <div>{row.getValue("pricing")}</div>,
    },
    {
        id: "meetNow",
        cell: () => {
            return (
                <Link to="/contact" className="btn btn-outline">
                    Meet Now
                </Link>
            );
        },
    },
];

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                         }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div>
            <div className="flex items-center py-4">
                <Input
                    placeholder="Search for Teacher"
                    onChange={(event) => {
                        const value = event.target.value;
                        table.getColumn("name")?.setFilterValue(value);
                    }}
                    className="max-w-sm"
                />
                <Input
                    placeholder="Search for Language"
                    onChange={(event) => {
                        const value = event.target.value;
                        table.getColumn("language")?.setFilterValue(value);
                    }}
                    className="max-w-sm ml-4"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

function getData() {
    return [
        {
            id: "728ed52f",
            name: "Megan",
            pricing: 100,
            language: "English",
            experience: 5
        },
        {
            id: "728ed52g",
            name: "John",
            pricing: 120,
            language: "Spanish",
            experience: 3
        },
        {
            id: "728ed52h",
            name: "Samantha",
            pricing: 90,
            language: "French",
            experience: 7
        },
        {
            id: "728ed52i",
            name: "James",
            pricing: 110,
            language: "English",
            experience: 4
        },
        {
            id: "728ed52j",
            name: "Olivia",
            pricing: 100,
            language: "Spanish",
            experience: 6
        },
        {
            id: "728ed52k",
            name: "Michael",
            pricing: 120,
            language: "French",
            experience: 5
        },
        {
            id: "728ed52l",
            name: "Emily",
            pricing: 90,
            language: "English",
            experience: 3
        },
        {
            id: "728ed52m",
            name: "Daniel",
            pricing: 110,
            language: "Spanish",
            experience: 7
        },
        {
            id: "728ed52n",
            name: "Sophia",
            pricing: 100,
            language: "French",
            experience: 4
        },
        {
            id: "728ed52o",
            name: "Matthew",
            pricing: 120,
            language: "English",
            experience: 6
        },
    ];
}

export default function Explore() {
    const data = getData();

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data}/>
        </div>
    );
}
