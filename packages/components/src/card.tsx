import { Link } from "./link"
import React from "react"
import { Card as CardDS } from '@packages/design-system';

export const Card: DesignSystem.Components['Card'] = (props) => <CardDS {...props} Link={Link} />