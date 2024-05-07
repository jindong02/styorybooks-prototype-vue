import SearchBox from './SearchBox.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { userEvent, within } from '@storybook/testing-library';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Simple/SearchBox',
  component: SearchBox,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    primary: {control: 'boolean'},
    label: {control: 'text'},
    onClick: {},
    onChange: {},
  },
} as Meta<typeof SearchBox>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const SampleSearchBox: StoryFn<typeof SearchBox> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SearchBox },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { 
      args: {
        primary: true,
        label: 'Search',
      } 
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<search-box v-bind="args" />',
});

// export const TestSearchBox = SampleSearchBox.bind({});
// TestSearchBox.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   // Other steps

//   // Waits for the component to be rendered before querying the element
//   await canvas.findByRole('button', { name: / button label/i });
// };

