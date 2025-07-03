import React, { FC } from "react"
import { Project as ProjectF, Projects as ProjectsF } from '@packages/features';
import { exportProjectsToCSV, getProjects, getProject } from '@packages/services';
import { UserCard } from "./user";
import { PageLayout } from "./page-layout";

export const Project: FC<{ id: number }> = (props) => <ProjectF AppLayout={PageLayout} UserCard={UserCard} getProject={getProject} {...props} />
export const Projects: FC<{}> = () => <ProjectsF AppLayout={PageLayout} getProjects={getProjects} exportProjectsToCSV={exportProjectsToCSV} />