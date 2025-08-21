import React, { FC } from "react"
import { Project as ProjectF, Projects as ProjectsF } from '@packages/features';
import { exportProjectsToCSV, getProjects, getProject } from '@packages/services';
import { User as UserF, Users as UsersF,  UserCard as UserCardFeature } from '@packages/features';
import { exportUsersToCSV, getUsers, saveUser, getUser } from '@packages/services';
import { Calendar as CalendarF } from '@packages/features';
import { AppLayout } from '@packages/features';

export const Calendar: FC<{}> = () => <CalendarF AppLayout={PageLayout} />
export const PageLayout: DesignSystem.Components['PageLayout'] = (props) => <AppLayout {...props} />
export const Project: FC<{ id: number }> = (props) => <ProjectF AppLayout={PageLayout} UserCard={UserCard} getProject={getProject} {...props} />
export const Projects: FC<{}> = () => <ProjectsF AppLayout={PageLayout} getProjects={getProjects} exportProjectsToCSV={exportProjectsToCSV} />
export const UserCard: Features.Components['UserCard'] = (props) => <UserCardFeature {...props} />
export const User: FC<{ email: string; }> = (props) => <UserF {...props} AppLayout={PageLayout} saveUser={saveUser} getUser={getUser} />
export const Users: FC<{}> = () => <UsersF AppLayout={PageLayout} UserCard={UserCard} getUsers={getUsers} exportUsersToCSV={exportUsersToCSV} />