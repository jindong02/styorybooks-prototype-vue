<template>
  <Suspense>
    <template #default>
      <detail-page />
    </template>
    <template #fallback>
      <div className="about">
        <Loading className="loading-div" />
      </div>
    </template> 
  </Suspense>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';
import Loading from '../components/Loading.vue';
import { reactive, computed } from 'vue';
const DetailPage = defineAsyncComponent(() => 
  import('@/stories/DetailPage.vue')
)

export default {
  name: 'video-card',
  components: {
    DetailPage,
    Loading,
  },
  props: {
    
  },
  setup(props: Object) {
    props = reactive(props);
    return {
    }
  },
}
</script>
<style scoped>
.about {
  background-color: black;
  height: 100vh;
}
.loading-div {  
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  vertical-align: middle;
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.v-ring {
  margin: 0 auto;
  text-align: center;
}
</style>
