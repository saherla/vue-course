import { ref, computed } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
  const store = useStore();
  const currentTab = ref("all");
  const todoText = ref("");

  return {
    currentTab,
    todoText,
    // Ya no son necesarios
    // pending: computed(() => store.getters["pendingTodos"]), // Los getters es un objeto que tiene propiedades
    // all: computed(() => store.getters["allTodos"]),
    // completed: computed(() => store.getters["completedTodos"]),

    getTodosByTab: computed(() =>
      store.getters["getTodosByTab"](currentTab.value)
    ),
    toggleTodo: (id) => store.commit("toggleTodo", id),
    createTodo: (text) => store.commit("createTodo", text)
  };
};

export default useTodos;
