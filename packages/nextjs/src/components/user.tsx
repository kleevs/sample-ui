import React, { FC } from "react"
import { User as UserF, Users as UsersF,  UserCard as UserCardFeature } from '@packages/features';
import { exportUsersToCSV, getUsers, saveUser, getUser } from '@packages/services';
import { PageLayout } from "./page-layout";

export const UserCard: Features.Components['UserCard'] = (props) => <UserCardFeature {...props} />
export const User: FC<{ email: string; }> = (props) => <UserF {...props} AppLayout={PageLayout} saveUser={saveUser} getUser={getUser} />
export const Users: FC<{}> = () => <UsersF AppLayout={PageLayout} UserCard={UserCard} getUsers={getUsers} exportUsersToCSV={exportUsersToCSV} />
