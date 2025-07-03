'use client';
import { Project } from '@/components';
import { useParams } from 'next/navigation'

export default function () {
    return <Project id={+(useParams().id?.[0] || '0')} />
};