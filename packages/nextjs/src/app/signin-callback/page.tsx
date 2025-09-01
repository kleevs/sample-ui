"use client"
import { SigninCallback } from '@packages/features';
import { useRouter } from 'next/navigation'

export default function SigninCallbackPage () {
    const router = useRouter();
    return <SigninCallback navigate={(url) => { 
        router.push(url);
    }} />
}