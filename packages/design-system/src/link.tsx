import React from "react";
import { Link as ReactDomLink } from 'react-router-dom';
import type { Link as LinkType } from '@packages/design-system';

export const Link: typeof LinkType = ({children, href}) => ( 
    <ReactDomLink to={href}>{children}</ReactDomLink> 
)

