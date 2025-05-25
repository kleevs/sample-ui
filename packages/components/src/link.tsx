import React from "react";
import { Link } from 'react-router-dom';

export function CustomLink({children, href}: LinkProps) { 
    return <Link to={href}>{children}</Link> 
}

