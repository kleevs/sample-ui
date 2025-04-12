import React from "react";
import TextField from '@mui/material/TextField';

type CustomTextFieldProps = {
    readonly label: string;
    readonly value: string;
    readonly onChange: (v: string) => void;
    readonly className?: string;
}

export const CustomTextField = ({ onChange, ...props }: CustomTextFieldProps) => <div><TextField {...props} variant="outlined" onChange={e => onChange(e.target.value)} /></div>;
