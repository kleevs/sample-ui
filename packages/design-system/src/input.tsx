import React from 'react';
import type { InputProps } from '@design-system/components';

export function Input(props: InputProps) {
    return <input {...props} className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded shadow-sm bg-white dark:bg-gray-700 dark:text-white" />
}