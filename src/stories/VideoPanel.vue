<template>
    <div className="video-panel">
        <div v-if="!count" className="no-movie"><h1>{{ message }}</h1></div>
        <video-card v-else v-for="video in videos" v-bind:key="video.imdbID" v-bind:imageurl="video.Poster" v-bind:year="video.Year" v-bind:imdbid="video.imdbID" v-bind:title="video.Title" />
    </div>
</template>

<script lang="ts">
import './videopanel.css';
import { defineAsyncComponent, defineComponent } from 'vue'
const VideoCard = defineAsyncComponent(() => 
  import('./VideoCard.vue')
)
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'video-panel',
  components: { VideoCard },

  props: {
    videos: {
      type: Object,
      required: true,
    },
    count: {
      type: Number,
      required: true
    }
  },
  
  setup(props: any) {
    props = reactive(props);
    const store = useStore();
    const message = computed(() => store.state.message);
    return { message }
  },

});
</script>
