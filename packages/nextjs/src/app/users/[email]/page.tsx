'use client';
import { User } from '@/components';
import { useParams } from 'next/navigation'

export default function () {
    return <User email={useParams().email?.[0] || ''} />
};