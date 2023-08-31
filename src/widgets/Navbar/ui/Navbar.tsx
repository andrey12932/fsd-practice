import React, {useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aliquid aperiam, assumenda beatae consectetur cum delectus deserunt dolore dolores ducimus ea est fugit inventore iusto labore magni maxime nulla odit quae quaerat qui quibusdam, quidem repellat sapiente sed sint sit soluta suscipit tempore, unde vel vitae voluptate. Aut deleniti dolorem doloremque ea error fugiat incidunt, laudantium molestias possimus quaerat quasi sequi ullam, vitae? Culpa, doloremque eius nemo nesciunt qui quia ratione. A ab animi dolor eaque eum excepturi nesciunt numquam omnis quis veritatis! Asperiores dicta incidunt laudantium libero numquam possimus quia unde, vero! Distinctio dolores doloribus eligendi repellat saepe.
            </Modal>
        </div>
    );
};
