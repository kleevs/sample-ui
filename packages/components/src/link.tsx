import React from "react";
import { Link as ReactDomLink } from 'react-router-dom';

export const Link: DesignSystem.Components['Link'] = ({children, href, ...props}) => ( 
    <ReactDomLink {...props} to={href}>{children}</ReactDomLink> 
)

