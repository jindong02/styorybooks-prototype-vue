<template>
  <article>
    <detail-header :video="video" />
    <video-panel :videos="videos" :count="count" style="padding-left: 9%;padding-right: 9%;background-color: #424242;" />
    <my-footer />
  </article>
</template>

<script>
import './page.css';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


import { defineAsyncComponent } from 'vue'
const DetailHeader = defineAsyncComponent(() => 
  import('./DetailHeader.vue')
)
const VideoPanel = defineAsyncComponent(() => 
  import('./VideoPanel.vue')
)
const MyFooter = defineAsyncComponent(() => 
  import('./Footer.vue')
)

export default {
  name: 'detail-page',

  components: { DetailHeader, VideoPanel, MyFooter },

  methods: { },

  setup() {
    const store = useStore();
    const route = useRoute();

    store.commit('setImdbid', route.params.imdbid)
    store.dispatch('setMovie')
    store.commit('setKeyword', localStorage.getItem("keyword"))
    store.dispatch('getVideosByTitle')

    const videos = computed(() => {
      if(!store.state.byRelease)
        return store.state.products?store.state.products.sort((a, b) => a.Year - b.Year):[]
      else
        return store.state.products?store.state.products.sort((a, b) => b.Year - a.Year):[]
    });

    const video = computed(() => store.state.movie);
    const count = computed(() => store.state.totalResult);
    return {
      videos,
      video,
      count
    }
  }
};
</script>
