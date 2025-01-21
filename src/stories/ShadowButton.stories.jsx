import { fn } from '@storybook/test';

import ShadowButton from '../components/ShadowButton';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Buttons/ShadowButton',
  component: ShadowButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: "text"
    },
    iconColor: {
      control: "select",
      options: ["blue", "red", "purple"],
      mapping: {blue: "text-blue-400", red: "text-red-400", purple:"text-purple-400"}
    }
  },
  args: { 
    onClick: fn(),
    children: "Boton"
  },
};

export const Default = {
  args: {
    className: "px-4"
  },
  render: (args) => <ShadowButton {...args}/>
};

export const WithIcon = {
  args:{
    icon:faSave,
    children:"Guardar",
  },
};

export const RightIcon = {
  args: {
    children: "Continue",
    icon: faArrowRight,
    iconLocaton: "right"
  }
}

export const OnlyIcon = {
  args: {
    icon: faSave,
    children: null,
  }
}

export const Long = {
  args: {
    children: "Select region...",
    icon: faChevronDown,
    iconLocaton: "right",
    className: "w-48"
  },
}
