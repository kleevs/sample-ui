import React from "react";
import { Users } from '@packages/user';
import { CustomAppLayout } from "../../components/AppLayout";
import { CustomTextField } from "../../components/TextField";
import { CustomButton } from "../../components/Button";
import { CustomGrid } from "../../components/Grid";


export default () => <Users AppLayout={CustomAppLayout} Input={CustomTextField} Button={CustomButton} Grid={CustomGrid} />