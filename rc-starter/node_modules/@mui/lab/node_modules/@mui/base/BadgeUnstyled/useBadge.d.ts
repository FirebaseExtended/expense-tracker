import * as React from 'react';
import BadgeUnstyledProps from './BadgeUnstyledProps';
export interface UseBadgeProps {
    badgeContent: BadgeUnstyledProps['badgeContent'];
    invisible: BadgeUnstyledProps['invisible'];
    max: BadgeUnstyledProps['max'];
    showZero: BadgeUnstyledProps['showZero'];
}
export default function useBadge(props: UseBadgeProps): {
    badgeContent: React.ReactNode;
    invisible: boolean;
    max: number;
    displayValue: React.ReactNode;
};
