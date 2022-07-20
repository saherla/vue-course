<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Change Ironman</button>
    <button @click="changeHulk">Change Hulk</button>

    <h2>Ironman: {{ ironmanActive }}</h2>
    <h2>Hulk: {{ hulkActive }}</h2>

    <button @click="changeStatus">Change Hulk</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from "vue";

export default {
  name: "HomeView",
  setup() {
    const ironman = ref({ name: "Tony", age: 50 });
    const hulk = reactive({ name: "Bruce", age: 50 });

    const ironmanActive = reactive(false);
    const hulkActive = ref(false);

    return {
      ironman,
      hulk,
      ironmanActive,
      hulkActive,

      changeIronman: () => {
        ironman.value.name = "Tony Stark";
        ironman.value.age = 55;
      },

      changeHulk: () => {
        hulk.name = "Bruce Banner";
        hulk.age = 45;
      },

      changeStatus: () => {
        hulkActive.value = !hulkActive.value;
        // ironmanActive = !ironmanActive; // Esto no funciona por la envoltura reactive
      }
    };
  }
};
</script>
