import DetailHeader from './DetailHeader.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Simple/DetailHeader',
  component: DetailHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    video: { control: 'object' },
  },
} as Meta<typeof DetailHeader>;

export const SampleHeader: StoryFn<typeof DetailHeader> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DetailHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { 
      args: {
        video: {
          Title: "Hello",
          Year: "2008",
          Rated: "N/A",
          Released: "10 Oct 2008",
          Runtime: "129 min",
          Genre: "Drama, Romance",
          Director: "Atul Agnihotri",
          Writer: "Atul Agnihotri, Chetan Bhagat, Jalees Sherwani",
          Actors: "Sharman Joshi, Amrita Arora, Sohail Khan",
          Plot: "Call-center workers receive a phone call from God.",
          Language: "Hindi",
          Country: "India",
          Awards: "1 nomination",
          Poster: "https://m.media-amazon.com/images/M/MV5BZGM5NjliODgtODVlOS00OWZmLWIzYzMtMTI2OWIzMTM1ZGRhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
          Ratings: [
              {
                  Source: "Internet Movie Database",
                  Value: "3.3/10"
              }
          ],
          Metascore: "N/A",
          imdbRating: "3.3",
          imdbVotes: "2,188",
          imdbID: "tt1087856",
          Type: "movie",
          DVD: "05 Apr 2018",
          BoxOffice: "N/A",
          Production: "N/A",
          Website: "N/A",
          Response: "True"
        }
      } 
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<detail-header v-bind="args" />',
});
