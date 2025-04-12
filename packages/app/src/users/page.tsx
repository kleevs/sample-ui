import React, { ComponentProps } from "react";
import { Users, AppLayout } from '@packages/user';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type LinkComponentType = ComponentProps<typeof AppLayout>['Link'];
type InputComponentType = ComponentProps<typeof Users>['Input'];
type AppLayoutComponentType = ComponentProps<typeof Users>['AppLayout'];
type GridComponentType = ComponentProps<typeof Users>['Grid'];

const CustomLink: LinkComponentType = ({children, href}) => <Link to={href}>{children}</Link>;
const CustomTextField: InputComponentType = ({ onChange, ...props }) => <div><TextField {...props} variant="outlined" onChange={e => onChange(e.target.value)} /></div>;
const CustomAppLayout: AppLayoutComponentType = (props) => <AppLayout {...props} Link={CustomLink} />
const CustomGrid: GridComponentType = () => <div></div>

export default () => <Users AppLayout={CustomAppLayout} Input={CustomTextField} Button={Button} Grid={CustomGrid} />