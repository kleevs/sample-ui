import React from 'react';
import type { Input as InputType } from '@packages/design-system';
import './k-input';

export const Input: typeof InputType = (props) => {
    return <k-input {...props} />
}