<template>
  <div class="switch-box" :style="position">
    <div class="switch-group">
      <label class="text-white">{{switchtype}} BY </label>
      <my-button @click="onLeftClick" :label="labels[0]" :activeStatus="activeStatus[0]" :primary="primary" style="color:white" />
      <my-button @click="onRightClick" :label="labels[1]" :activeStatus="activeStatus[1]" style="color:white" />
    </div>
  </div>
</template>

<script>
import './switch.css';
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';

import { defineAsyncComponent } from 'vue'
const MyButton = defineAsyncComponent(() => 
  import('./Button.vue')
)

export default {
  name: 'switch-button',
  components: { MyButton },
  props: {
    switchtype: {
      type: String,
      required: true,
    },
    labels: {
      type: String[2],
      required: true,
    },
    activeStatus: {
      type: Boolean[2],
      default: [true, false]
    },
    position: {
      type: String,
      default: 'left'
    },
  },
  emits: [],
  setup(props, { emit }) {
    props = reactive(props);
    const store = useStore();
    return {
      position: computed(() => ({
        'float': props.position
      })),
      primary: computed(() => true),
      onLeftClick() {
        if(props.switchtype === 'SEARCH'){
          store.commit('setSearchType', 0)
        }
        if(props.switchtype === 'SORT'){
          store.commit('setSortType', 0)
        }
      },
      onRightClick() {
        if(props.switchtype === 'SEARCH'){
          store.commit('setSearchType', 1)
        }
        if(props.switchtype === 'SORT'){
          store.commit('setSortType', 1)
        }
      }
    }
  },
};
</script>
