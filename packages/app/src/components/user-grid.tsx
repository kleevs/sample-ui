import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { UserType } from "@packages/user";

type CustomUserGridProps = {
    readonly value: UserType[]; 
    readonly count: number; 
    readonly page: number; 
    readonly pageSize: number; 
};

const columns = [
    {
        field: 'email',
        headerName: 'Email',
        flex: 1
    },
    {
      field: 'firstName',
      headerName: 'First name',
      flex: 1
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      flex: 1
    }
];
  
export function CustomUserGrid({value, pageSize, count, page }: CustomUserGridProps) {
    return <Box sx={{ height: 400, width: '100%' }}><DataGrid
        getRowId={(_) => _.email}
        rows={value}
        columns={columns}
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