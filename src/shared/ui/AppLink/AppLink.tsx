import React, {FC} from 'react';
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib/classNames";

export enum AppLikTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    children?: React.ReactNode,
    theme?: AppLikTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLikTheme.PRIMARY,
        ...otherProps
    } = props;



    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};