import React from "react";
import Button from '@mui/material/Button';

type CustomButtonProps = {
    readonly children: React.ReactNode;
    readonly type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    readonly className?: string;
}

export const CustomButton = (props: CustomButtonProps) => <Button {...props} variant="outlined" />