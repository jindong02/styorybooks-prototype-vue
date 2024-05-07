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
    <div class="wrapper">
        <div style="width:80%;margin-left:10%;margin-right:10%;">
          <div style="width:94%;">
            <h1 class="title">FIND YOUR MOVIE</h1>
            <search-box label="Search" :primary="primary" />
            <switch-button position="left" :switchtype="switchtype" :activeStatus="activeStatus" :labels="labels" />
            <div class="space"></div>
          </div>
        </div>
    </div>
  </header>
  <div class="typebar">
    <switch-button position="right" :switchtype="rswitchtype" :activeStatus="ractiveStatus" :labels="rlabels" />
  </div>
</template>

<script>
import './header.css';
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';


import { defineAsyncComponent } from 'vue'
const MyButton = defineAsyncComponent(() => 
  import('./Button.vue')
)
const SearchBox = defineAsyncComponent(() => 
  import('./SearchBox.vue')
)
const SwitchButton = defineAsyncComponent(() => 
  import('./SwitchButton.vue')
)
const BackgroundImage = defineAsyncComponent(() => 
  import('./assets/abstract-background.jpg')
)


export default {
  name: 'my-header',
  props: {
  },
  components: { MyButton, SearchBox, SwitchButton },
  setup(props) {
    props = reactive(props);
    const store = useStore();
    return {
      style: computed(() => ({
        backgroundImage: BackgroundImage,
      })),
      switchtype: computed(() => 'SEARCH'),
      activeStatus: computed(() => {
        return [
          store.state.byTitle?true:false, store.state.byTitle?false:true
        ]
      }),
      labels:  computed(() => ([
        'TITLE', 'GENGRE'
      ])),
      rlabels:  computed(() => ([
        'RELEASE DATE', 'RATING'
      ])),
      rswitchtype: computed(() => 'SORT'),
      ractiveStatus: computed(() => {
        return [
          !store.state.byRelease?true:false, !store.state.byRelease?false:true
        ]
      }),
      primary: computed(() => true)
    }
  },
};
</script>
