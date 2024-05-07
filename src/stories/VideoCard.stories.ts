import VideoCard from './VideoCard.vue';
import { Meta, StoryFn } from '@storybook/vue3';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Simple/VideoCard',
  component: VideoCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    imdbid: { control: 'text' },
    imageurl: { control: 'file' },
    title: { control: 'text' },
    year: { control: 'number' },
    onClick: {},
  },
} as Meta<typeof VideoCard>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Card: StoryFn<typeof VideoCard> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VideoCard },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { 
      args: {
        imdbid: 'tt2283362',
        year: 2020,
        title: 'Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.',
        imageurl: 'https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      } 
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<video-card v-bind="args" />',
});