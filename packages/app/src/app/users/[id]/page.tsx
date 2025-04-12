import { User } from '@packages/user';
import React from 'react';
import Button from '@mui/material/Button';
import { CustomAppLayout } from '../../../components/AppLayout';
import { CustomTextField } from '../../../components/TextField';

export default () => <User AppLayout={CustomAppLayout} Input={CustomTextField} Button={Button} />