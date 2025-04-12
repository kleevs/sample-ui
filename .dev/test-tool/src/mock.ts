export function mock<TResult, TArgs extends any[]>(fn: (...args: TArgs) => TResult) {
    return fn as any as jest.Mock<TResult, TArgs, any>;
}