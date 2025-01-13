import { fn } from '@storybook/test';

import ShadowButton from '../components/ShadowButton';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

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
    
  },
};

export const WithIcon = {
  args:{
    icon:faSave,
    children:"Guardar",
  },
};


