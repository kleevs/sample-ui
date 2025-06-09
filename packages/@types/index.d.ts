declare type PageLayoutProps = {
    children: React.ReactNode;
    action?: React.ReactNode;
}

declare type LinkProps = {
    readonly children: React.ReactNode;
    readonly href: string;
}

declare module "@packages/design-system" {
    type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
    const Input: React.FC<InputProps>;
    type PanelProps = { children: React.ReactNode; title: React.ReactNode; }
    const Panel: React.FC<PanelProps>;
    type PageLayoutProps = {
        children: React.ReactNode;
        action?: React.ReactNode;
    }
    const PageLayout: React.FC<PageLayoutProps>;
    type LinkProps = {
        readonly children: React.ReactNode;
        readonly href: string;
    }
    const Link: React.FC<LinkProps>;
    type ButtonProps = {
        readonly onClick: () => void;
        readonly children: React.ReactNode;
    }
    const Button: React.FC<ButtonProps>;
}