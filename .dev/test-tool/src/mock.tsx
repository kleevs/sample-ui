import React from 'react';

export function mock<TResult, TArgs extends any[]>(fn: (...args: TArgs) => TResult) {
    return fn as any as jest.Mock<TResult, TArgs, any>;
}

export const mocks: {[P in keyof DesignSystem.Components]: () => DesignSystem.Components[P]} = {
    Input() { return jest.fn((props) => <input {...props} />); },
    Link() { return jest.fn((props) => <a {...props} />); },
    PageLayout() { return jest.fn(({children}) => <div children={children} />); },
    Button() { return jest.fn(({children}) => <button children={children} />); },
    Panel() { return jest.fn(({title, children}) => <div>{title}{children}</div>); },
    Grid() { return jest.fn(({children}) => <div>{children}</div>); },
    Card() { return jest.fn(({title, children}) => <div>{title}{children}</div>); }
}