declare namespace Features {
    export type UserType = {
        readonly email: string;
        readonly lastName: string;
        readonly firstName: string;
        readonly role: string;
        readonly languages: string;
        readonly available: boolean;
        readonly projects: string[];
    };

    export type ProjectType = {
        readonly id: number;
        readonly title: string;
        readonly type: string;
        readonly audience: string;
        readonly period: string;
        readonly users: UserType[];
    };

    type AsProps<K extends keyof Components> = { [P in K]: Components[P]; };
    type Props<T extends keyof Components> = React.ComponentProps<Components[T]>;

    type UserProps = {
        readonly email: string;
        readonly saveUser: (user: UserType) => Promise<void>;
        readonly getUser: (email: string) => Promise<UserType>;
    }
    type UserCardProps = {
        readonly user: UserType;
    }
    type AppLayoutProps = {
        children: React.ReactNode;
        action?: React.ReactNode;
    }

    type Components = {
        AppLayout: React.FC<PageLayoutProps>;
        readonly User: React.FC<UserProps>;
        readonly UserCard: React.FC<UserCardProps>;
    }
} 