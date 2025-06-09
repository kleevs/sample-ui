import React from "react";
import { AppLayout } from '@packages/features';
import { Link } from "./link";
import type { PageLayout as PageLayoutType } from '@packages/design-system';

export const PageLayout: typeof PageLayoutType = (props) => <AppLayout {...props} Link={Link} />