declare type PageLayoutProps = {
    children: React.ReactNode;
    action?: React.ReactNode;
}

declare type LinkProps = {
    readonly children: React.ReactNode;
    readonly href: string;
}

declare namespace React {
    namespace JSX {
        interface IntrinsicElements {
            "k-input": React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        }
    }
}

declare module "@design-system/components" {
    type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
    const Input: React.FC<InputProps>;
}