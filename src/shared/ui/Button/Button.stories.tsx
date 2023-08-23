import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Button, ThemeButton} from './Button';
import '../../../app/styles/index.scss';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text'
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    },
};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    }
}

export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    }
}
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
