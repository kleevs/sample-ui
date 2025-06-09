import React from "react";
import { Button as ButtonType } from '@packages/components';

export const Button: typeof ButtonType = ({children, onClick}) => (
    <button
        onClick={onClick}
        className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
    >{children}</button>
) 