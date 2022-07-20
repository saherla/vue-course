import { ref, computed } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
  const store = useStore();
  const currentTab = ref("all");

  return {
    currentTab,

    // Ya no son necesarios
    // pending: computed(() => store.getters["pendingTodos"]), // Los getters es un objeto que tiene propiedades
    // all: computed(() => store.getters["allTodos"]),
    // completed: computed(() => store.getters["completedTodos"]),

    getTodosByTab: computed(() =>
      store.getters["getTodosByTab"](currentTab.value)
    ),
    toggleTodo: (id) => store.commit("toggleTodo", id)
  };
};

export default useTodos;
