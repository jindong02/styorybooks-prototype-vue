<template>
  <header :style="style">
    <div class="wrapper">
      <div>
        <router-link to="/"><span class="logo"><b>netflix</b>roulette</span></router-link>
      </div>
      <div>
        <font-awesome-icon icon="search" />
      </div>
    </div>
    <div style="width:92%;margin-left:4%;margin-right:4%;">
      <div class="image-data">
        <img :src="video.data.Poster" />
        <div class="description">
          <h1 class="detail-title">{{video.data.Title}}<div class="rating-mark">
            <span class="rate-rounded-mark">{{video.data.imdbRating}}</span></div></h1>
          <br />
          <label class="writer">{{video.data.Actors}}</label><br />
          <label class="publish"><span class="number">{{video.data.Year}}</span> year &nbsp;&nbsp;&nbsp;&nbsp;<span class="number">{{video.data.Runtime.split(' ')[0]}}</span> min</label><br />
          <p>{{video.data.Plot}}</p>
        </div>
      </div>
      <br />
      <br />
    </div>
    <div class="filmbar"><label class="text-white mark">Films by genre</label></div>
  </header>
</template>

<script>
import './detailheader.css';
import BackgroundImage from './assets/abstract-background.jpg';
import { reactive, computed } from 'vue';

export default {
  name: 'detail-header',
  props: {
    video: {
      type: Object,
      required: true,
    }
  },
  components: {  },
  setup(props) {
    props = reactive(props);
    return {
      style: computed(() => ({
        backgroundImage: BackgroundImage,
      })),
      video: computed(() => ({
        data: props.video,
      })),
    }
  },
};
</script>
