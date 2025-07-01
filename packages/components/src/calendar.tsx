import React, { FC } from "react"
import { Calendar as CalendarF } from '@packages/features';
import { PageLayout } from "./page-layout";

export const Calendar: FC<{}> = () => <CalendarF AppLayout={PageLayout} />