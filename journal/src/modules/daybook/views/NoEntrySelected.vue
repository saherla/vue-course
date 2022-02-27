<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">Missing selected</h1>
    <Fab />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab"))
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
