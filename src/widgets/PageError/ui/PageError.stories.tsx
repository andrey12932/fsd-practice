import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import '../../../app/styles/index.scss';
import {Theme} from "app/providers/ThemeProvider";
import {PageError} from "./PageError";

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = { args: {} };

Dark.decorators = [ThemeDecorator(Theme.DARK)]
