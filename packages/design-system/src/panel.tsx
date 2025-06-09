import React from 'react';
import { Panel as PanelType } from '@packages/design-system';

export const Panel: typeof PanelType = ({children, title, ...props}) => (
    <div {...props} className="mb-10 bg-gray-50 dark:bg-gray-800 border shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
);