/** @type { import('@storybook/react').Preview } */
import '../src/tailwind.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs', 'autodocs']
};

export default preview;
