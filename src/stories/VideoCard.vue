<template>
  <router-link :to="'/detail/'+imdbid" @click="onClick">
    <div className="card">
      <img style="width:100%" ref="image" @intersects="srcSetter" v-isInViewport="scrollWrapper" alt="" />
      <div className="relative-div">
        <label className="text-white video-title">{{title}}</label>
        <span className="year-mark">{{year}}</span>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import './videocard.css';
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { inViewport as isInViewport } from '@/directives/inViewport';
import { defineComponent, toRef, PropType, ref, ComputedRef, toRefs } from 'vue'


export default defineComponent({
  name: 'video-card',

  props: {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      default: 1920,
    },
    imageurl: {
      type: String,
    },
    imdbid: {
      type: String
    }
  },

  directives: {
    isInViewport,
  },

  setup(props: any, {emit}) {
    const store = useStore();
    props = reactive(props);
    const imageurl = toRef(props, 'imageurl')
    let scrollWrapper = null
    const image = ref({} as HTMLImageElement)
    return {
      onClick() {
        store.commit('setImdbid', props.imdbid)
        store.dispatch('setMovie')
      },
      srcSetter() {
        image.value.src = imageurl.value as string
      },
      scrollWrapper,
      image
    }
  },
});
</script>
