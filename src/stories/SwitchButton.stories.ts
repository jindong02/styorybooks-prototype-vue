import SwitchButton from './SwitchButton.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Composite/SwitchButton',
  component: SwitchButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    labels:{control:'select', options:[['TITLE','GENGRE'], ['RELEASE DATE', 'RATING']]},
    activeStatus: { control: 'select', options:[[true,false], [false, true]] },
    switchtype: { control: 'text', default:"SEARCH" },
    position: {control: 'select', options:['left', 'right']},
    onClick: {},
  },
} as Meta<typeof SwitchButton>;

export const SearchByTitle: StoryFn<typeof SwitchButton> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SwitchButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { 
      args: {
        switchtype: 'SEARCH',
        labels: ['TITLE', 'GENGRE'],
        activeStatus: [true, false],
      } 
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<switch-button :switchtype="switchtype" v-bind="args" />',
});

export const SearchByGengre: StoryFn<typeof SwitchButton> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SwitchButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { 
      args: {
        switchtype: 'SEACRCH',
        labels: ['TITLE', 'GENGRE'],
        activeStatus: [false, true],
      } 
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<switch-button :switchtype="switchtype" v-bind="args" />',
});

export const SortByReleaseDate: StoryFn<typeof SwitchButton> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SwitchButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { 
      args: {
        switchtype: 'SORT',
        labels: ['RELEASE DATE', 'RATING'],
        activeStatus: [true, false],
        position: 'right'
      } 
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<switch-button :switchtype="switchtype" v-bind="args" />',
});

export const SortByRating: StoryFn<typeof SwitchButton> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SwitchButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { 
      args: {
        switchtype: 'SORT',
        labels: ['RELEASE DATE', 'RATING'],
        activeStatus: [false, true],
        position: 'right'
      } 
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<switch-button :switchtype="switchtype" v-bind="args" />',
});
