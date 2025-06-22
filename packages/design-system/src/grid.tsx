import React from 'react';

export const Grid: DesignSystem.Components['Grid'] = function Grid({children, ...props}) {
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" {...props}>
        {children}
    </div>
}