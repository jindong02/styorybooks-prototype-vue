import MyButton from './Button.vue';
import { Meta, StoryFn } from '@storybook/vue3';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Simple/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {control: 'text'},
    activeStatus: { control: 'boolean' },
    primary: {control: 'boolean'},
    onClick: {},
  },
} as Meta<typeof MyButton>;

export const Primary: StoryFn<typeof MyButton> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args: {
        primary: true,
        label: 'Button',
      }
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Secondary: StoryFn<typeof MyButton> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args: {
        label: 'Button',
      }
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const ActivedPrimary: StoryFn<typeof MyButton> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args: {
        label: 'Button',
        primary: true,
        activeStatus: true,
      }
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const ActivedSecondary: StoryFn<typeof MyButton> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args: {
        label: 'Button',
        primary: false,
        activeStatus: true,
      }
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});