import MyHeader from './MainHeader.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Composite/MainHeader',
  component: MyHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    activeStatus: { control: 'object' },
    position: {control: 'text'},
  },
} as Meta<typeof MyHeader>;

export const Header: StoryFn<typeof MyHeader> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { 
      args: {
        type: 'SEARCH',
        position: 'right'
      }
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header v-bind="args" />',
});
