import React, { ReactNode } from 'react'

type NavbarProps = {
    action: ReactNode;
}

export function Navbar({action}: NavbarProps) {
    return <div className='flex items-center shadow-[0_0_5px_grey]'>
        <div className='w-[48px] h-[48px]' />
        <div className='grow-1' />
        <div>{action}</div>
    </div>
}