import { Link } from "./link"
import React, { FC } from "react"
import { User as UserF, Users as UsersF,  UserCard as UserCardFeature } from '@packages/features';
import { exportUsersToCSV, getUsers, saveUser } from '@packages/services';
import { PageLayout } from "./page-layout";

export const UserCard: Features.Components['UserCard'] = (props) => <UserCardFeature {...props} />
export const User: FC<{}> = () => <UserF AppLayout={PageLayout} saveUser={saveUser} />
export const Users: FC<{}> = () => <UsersF Link={Link} AppLayout={PageLayout} UserCard={UserCard} getUsers={getUsers} exportUsersToCSV={exportUsersToCSV} />
