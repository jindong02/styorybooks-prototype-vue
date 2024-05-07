<template>
  <input type="text" v-model="keyword" placeholder="Search..." :class="searchbox" @keyup="onChange" />
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script>
import './searchbox.css';
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'search-box',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click', 'change'],

  setup(props, { emit }) {
    props = reactive(props);
    const store = useStore();
    const tempWord = localStorage.getItem("keyword");
    store.commit('setKeyword', tempWord)
    store.dispatch('getVideosByTitle')
    
    return {
      classes: computed(() => ({
        'storybook-default': true,
        'storybook-default--primary': props.primary,
      })),
      keyword: computed(() => tempWord?tempWord:''),
      searchbox: computed(() => ({
        'storybook-search-box': true,
      })),
      onClick() {
        store.dispatch('getVideosByTitle')
      },
      onChange(e) {
        store.commit('setKeyword', e.target.value.trim())
        store.dispatch('getVideosByTitle')
        localStorage.setItem("keyword", e.target.value.trim())
      }
    }
  },
};
</script>