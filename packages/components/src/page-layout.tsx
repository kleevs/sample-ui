import React from "react";
import { AppLayout } from '@packages/features';
import { Link } from "./link";

export const PageLayout: DesignSystem.Components['PageLayout'] = (props) => <AppLayout {...props} Link={Link} />