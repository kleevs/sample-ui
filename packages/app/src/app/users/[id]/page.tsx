import { User } from '@packages/user';
import React from 'react';
import { CustomAppLayout } from '../../../components/AppLayout';
import { CustomTextField } from '../../../components/TextField';
import { CustomButton } from '../../../components/Button';

export default () => <User AppLayout={CustomAppLayout} Input={CustomTextField} Button={CustomButton} />