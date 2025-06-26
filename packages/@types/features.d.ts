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

    type AsProps<T extends keyof Components> = Pick<Components, T>;
    type Props<T extends keyof Components> = React.ComponentProps<Pick<Components, T>>;

    type UserProps = {
        readonly saveUser: (user: UserType) => Promise<void>;
    }
    type UserCardProps = {
        readonly user: UserType;
    }

    type Components = {
        readonly User: React.FC<UserProps>;
        readonly UserCard: RecordingState.FC<UserCardProps>;
    }
} 