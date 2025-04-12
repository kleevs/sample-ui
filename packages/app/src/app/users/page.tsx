import React, { ComponentProps } from "react";
import { Users, AppLayout } from '@packages/user';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type UsersProps = ComponentProps<typeof Users>;
type LinkComponentType = ComponentProps<typeof AppLayout>['Link'];
type InputComponentType = UsersProps['Input'];
type AppLayoutComponentType = UsersProps['AppLayout'];
type GridComponentType = UsersProps['Grid'];
type ButtonComponentType = UsersProps['Button'];

const CustomLink: LinkComponentType = ({children, href}) => <Link to={href}>{children}</Link>;
const CustomTextField: InputComponentType = ({ onChange, ...props }) => <div><TextField {...props} variant="outlined" onChange={e => onChange(e.target.value)} /></div>;
const CustomAppLayout: AppLayoutComponentType = (props) => <AppLayout {...props} Link={CustomLink} />
const CustomGrid: GridComponentType = () => <div></div>
const CustomButton: ButtonComponentType = (props) => <Button {...props} variant="outlined" />

export default () => <Users AppLayout={CustomAppLayout} Input={CustomTextField} Button={CustomButton} Grid={CustomGrid} />