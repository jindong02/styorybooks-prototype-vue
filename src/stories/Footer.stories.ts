import MyFooter from './Footer.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Simple/Footer',
  component: MyFooter,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof MyFooter>;

export const MainFooter: StoryFn<typeof MyFooter> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyFooter },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-footer v-bind="args" />',
});