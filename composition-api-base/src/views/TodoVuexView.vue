<template>
  <h1>Thanos TODO List</h1>
  <!-- <h4>Pending Task's: {{ pending.length }}</h4> -->

  <hr />
  <button :class="{ active: currentTab == 'all' }" @click="currentTab = 'all'">
    Todos
  </button>

  <button
    :class="{ active: currentTab == 'pending' }"
    @click="currentTab = 'pending'"
  >
    Pending
  </button>

  <button
    :class="{ active: currentTab == 'completed' }"
    @click="currentTab = 'completed'"
  >
    Completed
  </button>

  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        @dblclick="toggleTodo(todo.id)"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="isOpen = true">Create Todo</button>

  <modal v-if="isOpen" @on:close="isOpen = false">
    <template v-slot:header>
      <h1>New Task</h1>
    </template>
    <template v-slot:body>
      <form
        @submit.prevent="
          createTodo(todoText);
          isOpen = false;
        "
      >
        <input
          v-model="todoText"
          type="text"
          placeholder="New task"
          autofocus
        />
        <br />
        <br />
        <button type="submit">Create Task</button>
      </form>
    </template>
  </modal>
</template>

<script>
import { ref } from "vue";
import useTodos from "@/composables/useTodos";
import Modal from "@/components/Modal.vue";

export default {
  components: { Modal },
  setup() {
    const { currentTab, todoText, getTodosByTab, toggleTodo, createTodo } =
      useTodos();

    return {
      currentTab,
      todoText,
      getTodosByTab,
      toggleTodo,
      createTodo,

      isOpen: ref(false)
    };
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>
