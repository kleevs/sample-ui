import { Link } from "./link"
import React, { FC } from "react"
import { User as UserF, Users as UsersF,  UserCard as UserCardFeature } from '@packages/features';
import { exportUsersToCSV, getUsers, saveUser } from '@packages/services';
import { Input, Panel, Button, Grid } from '@packages/design-system';
import { Card } from "./card";
import { PageLayout } from "./page-layout";

export const UserCard: Features.Components['UserCard'] = (props) => <UserCardFeature {...props} Card={Card} />
export const User: FC<{}> = () => <UserF Input={Input} PageLayout={PageLayout} Panel={Panel} Button={Button} saveUser={saveUser} />
export const Users: FC<{}> = () => <UsersF Link={Link} PageLayout={PageLayout} Grid={Grid} UserCard={UserCard} getUsers={getUsers} exportUsersToCSV={exportUsersToCSV} />
