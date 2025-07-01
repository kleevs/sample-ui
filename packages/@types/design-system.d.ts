declare namespace DesignSystem {
    type AsProps<K extends keyof Components> = { [P in K]: Components[P]; };
    type Props<T extends keyof Components> = React.ComponentProps<Components[T]>;
    type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
    type PanelProps = { children: React.ReactNode; title: React.ReactNode; }
    type PageLayoutProps = {
        children: React.ReactNode;
        action?: React.ReactNode;
    }
    type LinkProps = {
        readonly children: React.ReactNode;
        readonly href: string;
    }
    type ButtonProps = {
        readonly onClick: () => void;
        readonly children: React.ReactNode;
    }

    type CardProps = React.PropsWithChildren<{
        title: ReactNode;
        onUpdate?: () => void;
        onDelete?: () => void;
        href?: string;
    }>

    type Components = {
        Input: React.FC<InputProps>;
        Panel: React.FC<PanelProps>;
        PageLayout: React.FC<PageLayoutProps>;
        Link: React.FC<LinkProps>;
        Button: React.FC<ButtonProps>;
        Button: React.FC<ButtonProps>;
        Card: React.FC<CardProps>;
        Grid: React.FC<React.PropsWithChildren<{}>>;
    }
} 