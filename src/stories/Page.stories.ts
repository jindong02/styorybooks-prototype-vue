import MyPage from './Page.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Composite/Page',
  component: MyPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof MyPage>;

export const HomePage: StoryFn<typeof MyPage> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyPage },

  // Here we define the `template`
  template: '<my-page />',
});
