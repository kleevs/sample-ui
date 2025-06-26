import { Link } from "./link"
import React from "react"
import { UserCard as UserCardFeature } from '@packages/features';
import { Card as CardDS } from '@packages/design-system';

export const Card: DesignSystem.Components['Card'] = (props) => <CardDS {...props} Link={Link} />
export const UserCard: Features.Components['UserCard'] = (props) => <UserCardFeature {...props} Card={Card} />