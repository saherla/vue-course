<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated
} from "vue";

export default {
  setup() {
    console.log("setup");

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });
    onRenderTracked(() => {
      console.log("onRenderTracked");
    });
    onRenderTriggered(() => {
      console.log("onRenderTriggered");
    });
    onActivated(() => {
      console.log("onActivated");
    });
    onDeactivated(() => {
      console.log("onDeactivated");
    });

    const title = ref("About");

    return {
      title,
      changeTitle: () => (title.value = "New About")
    };
  }
};
</script>
