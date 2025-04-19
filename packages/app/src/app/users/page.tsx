import React from "react";
import { Users } from '@packages/user';
import { CustomAppLayout } from "../../components/AppLayout";
import { CustomTextField } from "../../components/TextField";
import { CustomButton } from "../../components/Button";
import { CustomUserGrid } from "../../components/user-grid";

export default () => <Users AppLayout={CustomAppLayout} Input={CustomTextField} Button={CustomButton} UserGrid={CustomUserGrid} />