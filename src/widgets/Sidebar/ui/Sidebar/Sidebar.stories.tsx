import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import '../../../../app/styles/index.scss';
import {Theme} from "app/providers/ThemeProvider";
import Sidebar from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {
    },
};

export const Dark: Story = { args: {} };

Dark.decorators = [ThemeDecorator(Theme.DARK)]
