import { User, AppLayout } from '@packages/user';
import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type LinkComponentType = ComponentProps<typeof AppLayout>['Link'];
type InputComponentType = ComponentProps<typeof User>['Input'];
type AppLayoutComponentType = ComponentProps<typeof User>['AppLayout'];

const CustomLink: LinkComponentType = ({children, href}) => <Link to={href}>{children}</Link>;
const CustomTextField: InputComponentType = ({ onChange, ...props }) => <div><TextField {...props} variant="outlined" onChange={e => onChange(e.target.value)} /></div>;
const CustomAppLayout: AppLayoutComponentType = (props) => <AppLayout {...props} Link={CustomLink} />

export default () => <User AppLayout={CustomAppLayout} Input={CustomTextField} Button={Button} />