import DetailPage from './DetailPage.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Composite/DetailPage',
  component: DetailPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof DetailPage>;

export const DetailView: StoryFn<typeof DetailPage> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DetailPage },

  // Here we define the `template`
  template: '<detail-page />',
});
