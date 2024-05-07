import VideoPanel from './VideoPanel.vue';
import { Meta, StoryFn } from '@storybook/vue3';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Composite/VideoPanel',
  component: VideoPanel,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    videos: { control: 'object' },
    count: { control: 'number' }
  },
} as Meta<typeof VideoPanel>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Template: StoryFn<typeof VideoPanel> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VideoPanel },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { 
      args: {
        videos: [
          {
            title: 'When Alice Klieg wins the Mega-Millions lottery, she immediately quits her psychiatric meds and buys her own talk show.',
            year: 2014,
            imageurl: 'https://m.media-amazon.com/images/M/MV5BMTA0NTAyNTYwNDheQTJeQWpwZ15BbWU4MDY2ODcyNTQx._V1_SX300.jpg',
            imdbid: 'tt2788716'
          },
          {
              title: 'Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.',
              year: 2017,
              imageurl: 'https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
              imdbid: 'tt2283362'
          },
          {
              title: 'Set in 1998, this origin story explores the secrets of the mysterious Spencer Mansion and the ill-fated Raccoon City.',
              year: 2021,
              imageurl: 'https://m.media-amazon.com/images/M/MV5BNjA5NmZkMTYtM2I2Mi00NzJkLWJhZGItOGZhMzE0YTViZDMxXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg',
              imdbid: 'tt6920084'
          },
          {
              title: 'When Alice Klieg wins the Mega-Millions lottery, she immediately quits her psychiatric meds and buys her own talk show.',
              year: 2014,
              imageurl: 'https://m.media-amazon.com/images/M/MV5BMTA0NTAyNTYwNDheQTJeQWpwZ15BbWU4MDY2ODcyNTQx._V1_SX300.jpg',
              imdbid: 'tt2788716'
            },
            {
                title: 'Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.',
                year: 2017,
                imageurl: 'https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
                imdbid: 'tt2283362'
            },
            {
                title: 'Set in 1998, this origin story explores the secrets of the mysterious Spencer Mansion and the ill-fated Raccoon City.',
                year: 2021,
                imageurl: 'https://m.media-amazon.com/images/M/MV5BNjA5NmZkMTYtM2I2Mi00NzJkLWJhZGItOGZhMzE0YTViZDMxXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg',
                imdbid: 'tt6920084'
            }
        ],
        count: 6,
      } 
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<video-panel v-bind="args" />',
});