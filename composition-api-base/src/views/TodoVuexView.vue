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
</template>

<script>
import useTodos from "@/composables/useTodos";

export default {
  setup() {
    const { currentTab, getTodosByTab, toggleTodo } = useTodos();

    return {
      currentTab,
      getTodosByTab,
      toggleTodo
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
