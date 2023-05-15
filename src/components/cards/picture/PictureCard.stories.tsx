import { ComponentStory, ComponentMeta } from '@storybook/react';
import PictureCard, { IPictureCard } from './PictureCard';
import { mockPictureCardProps } from './PictureCard.mocks'

export default {
    title: 'cards/PictureCard',
    component: PictureCard,
    argTypes: {},
} as ComponentMeta<typeof PictureCard>;
  
const Template: ComponentStory<typeof PictureCard> = (args) => (
    <PictureCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockPictureCardProps.base,
} as IPictureCard;
