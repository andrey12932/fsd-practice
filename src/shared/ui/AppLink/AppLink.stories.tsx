import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import '../../../app/styles/index.scss';
import {Theme} from "app/providers/ThemeProvider";
import {AppLikTheme, AppLink} from "./AppLink";

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLikTheme.PRIMARY
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLikTheme.SECONDARY
    },
};

export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLikTheme.RED
    }
}


export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLikTheme.PRIMARY
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLikTheme.SECONDARY
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark: Story = {
    args: {
        children: 'Text',
        theme: AppLikTheme.RED
    }
}
RedDark.decorators = [ThemeDecorator(Theme.DARK)]
