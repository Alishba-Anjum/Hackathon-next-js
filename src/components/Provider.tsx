'use client';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'
import Header from './Header';

function Provider({ children }: { children: ReactNode }) {
  const path = usePathname();

    return (
        <>
            {
                path === "/login" || path === "/signup" ? (<></>) : (<Header />)
            }

            {children}
        </>
    )
}

export default Provider
