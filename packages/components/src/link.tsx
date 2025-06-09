import React from "react";
import { Link as ReactDomLink } from 'react-router-dom';
import type { Link as LinkType } from '@packages/components';

export const Link: typeof LinkType = ({children, href, ...props}) => ( 
    <ReactDomLink {...props} to={href}>{children}</ReactDomLink> 
)

