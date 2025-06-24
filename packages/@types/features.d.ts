declare namespace Features {
    type AsProps<T extends keyof Components> = Pick<Components, T>;
    type Props<T extends keyof Components> = React.ComponentProps<Pick<Components, T>>;
    type UserProps = {
        saveUser: (user: UserType) => Promise<void>;
    }

    export type UserType = {
        email: string;
        lastName: string;
        firstName: string;
        role: string;
        languages: string;
        available: boolean;
        projects: string[];
    };

    type Components = {
        User: React.FC<UserProps>;
    }
} 