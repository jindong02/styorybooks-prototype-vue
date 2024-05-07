<template>
    <div className="bg-dark">
        <ring-loader :loading="loading" :color="color"></ring-loader>
    </div>
</template>

<script lang="ts">
import RingLoader from 'vue-spinner/src/RingLoader.vue'
export default {
  components: {
    RingLoader
  },
  setup(props: any) {
    return {
      loading: 'Loading...',
      color: '#fff',
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-dark {
    background-color: black;
    height: 74px;
    width: 74px;
}
</style>
