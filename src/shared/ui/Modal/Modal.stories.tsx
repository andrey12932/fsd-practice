import type {Meta, StoryObj} from '@storybook/react';
import '../../../app/styles/index.scss';
import {Modal} from "shared/ui/Modal/Modal";

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        //layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aliquid aperiam, assumenda beatae consectetur cum delectus deserunt dolore dolores ducimus ea est fugit inventore iusto labore magni maxime nulla odit quae quaerat qui quibusdam, quidem repellat sapiente sed sint sit soluta suscipit tempore, unde vel vitae voluptate. Aut deleniti dolorem doloremque ea error fugiat incidunt, laudantium molestias possimus quaerat quasi sequi ullam, vitae? Culpa, doloremque eius nemo nesciunt qui quia ratione. A ab animi dolor eaque eum excepturi nesciunt numquam omnis quis veritatis! Asperiores dicta incidunt laudantium libero numquam possimus quia unde, vero! Distinctio dolores doloribus eligendi repellat saepe.',
        isOpen: true
    },
};
