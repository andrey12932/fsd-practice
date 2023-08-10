import React from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Navbar.module.scss'
import { AppLikTheme, AppLink } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    theme={AppLikTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLikTheme.SECONDARY}
                    to={'/about'}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}
