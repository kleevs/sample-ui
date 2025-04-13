import React, { useMemo } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid';

type CustomGridProps<T> = {
    readonly value: T[];
    readonly columns: any[];
    readonly count: number;
    readonly page: number;
    readonly pageSize: number;
    readonly rowId: keyof T;
}


const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'firstName',
      headerName: 'First name',
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
export function CustomGrid<T extends GridValidRowModel>({value, columns, rowId, pageSize, count, page }: CustomGridProps<T>) {
    const col: GridColDef<T>[] = useMemo(() => columns.map(c => ({...c, flex: 1})) as any, [columns]);

    return <Box sx={{ height: 400, width: '100%' }}><DataGrid
        getRowId={(_) => _[rowId]}
        rows={value}
        columns={col}
        initialState={{
            pagination: {
                rowCount: count,
                paginationModel: {
                    pageSize: pageSize,
                    page: page
                },
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
    />
    </Box>
}