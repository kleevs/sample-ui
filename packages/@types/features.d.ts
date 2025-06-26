declare namespace Features {
    export type UserType = {
        email: string;
        lastName: string;
        firstName: string;
        role: string;
        languages: string;
        available: boolean;
        projects: string[];
    };

    type AsProps<T extends keyof Components> = Pick<Components, T>;
    type Props<T extends keyof Components> = React.ComponentProps<Pick<Components, T>>;
    type UserProps = {
        saveUser: (user: UserType) => Promise<void>;
    }
    type UserCardProps = {
        user: UserType;
    }

    type Components = {
        User: React.FC<UserProps>;
        UserCard: RecordingState.FC<UserCardProps>;
    }
} 