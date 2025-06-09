import React from "react";
import { AppLayout } from '@packages/features';
import type { PageLayout as PageLayoutType } from '@packages/components';

export const PageLayout: typeof PageLayoutType = (props) => <AppLayout {...props} />