import React, { ReactNode } from "react";
import { Link } from 'react-router-dom';

type LinkProps = {
    readonly children: ReactNode;
    readonly href: string;
}

export function CustomLink({children, href}: LinkProps) { 
    return <Link to={href}>{children}</Link> 
}

