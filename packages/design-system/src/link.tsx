import React, { createContext, ReactNode, useContext } from "react";

type LinkComponentProviderProps = { Link: DesignSystem.Components['Link']; children: ReactNode; }
const LinkComponentContext = createContext<Partial<LinkComponentProviderProps>>({ Link: undefined });

export function LinkComponentProvider({ children, ...props}: LinkComponentProviderProps) {
    return <LinkComponentContext.Provider value={props}>{children}</LinkComponentContext.Provider>
}

export const Link: DesignSystem.Components['Link'] = ({children, href, ...props}) => { 
    const ReactDomLink = useContext(LinkComponentContext)?.Link!;
    return <ReactDomLink {...props} href={href}>{children}</ReactDomLink> 
}