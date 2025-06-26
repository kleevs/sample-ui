import { Link } from "./link"
import React, { FC } from "react"
import { Project as ProjectF, Projects as ProjectsF } from '@packages/features';
import { exportProjectsToCSV, getProjects, getProject } from '@packages/services';
import { Input, Panel, Button, Grid } from '@packages/design-system';
import { Card } from "./card";
import { UserCard } from "./user";
import { PageLayout } from "./page-layout";

export const Project: FC<{ id: number }> = (props) => <ProjectF Input={Input} Link={Link} PageLayout={PageLayout} Button={Button} Panel={Panel} UserCard={UserCard} Grid={Grid} getProject={getProject} {...props} />
export const Projects: FC<{}> = () => <ProjectsF Link={Link} PageLayout={PageLayout} Card={Card} Grid={Grid} getProjects={getProjects} exportProjectsToCSV={exportProjectsToCSV} />