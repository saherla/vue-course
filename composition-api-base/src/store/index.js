import { createStore } from "vuex";
import { v4 as uuidV4 } from "uuid";

export default createStore({
  state: {
    todos: [
      { id: "1", text: "Recolectar las piedas del infinito", completed: false },
      { id: "2", text: "Piedra del alma", completed: true },
      { id: "3", text: "Piedra de poder", completed: true },
      { id: "4", text: "Piedra del alma", completed: false },
      {
        id: "5",
        text: "Conseguir nuevos secuases competentes",
        completed: false
      }
    ]
  },
  getters: {
    pendingTodos: (state, getters, rootState) =>
      // getters puedes llamar los demas getters como allTodos
      // rootState el estado GLOBAL de la aplicacion, en este ejemplo no se ve bien
      state.todos.filter((todo) => !todo.completed),

    allTodos: (state) => state.todos, // [...state.todos] // Evita mutaciones al state

    completedTodos: (state) => state.todos.filter((todo) => todo.completed),

    getTodosByTab: (_, getters) => (tab) => {
      switch (tab) {
        case "all":
          return getters.allTodos;
        case "pending":
          return getters.pendingTodos;
        case "completed":
          return getters.completedTodos;
        default:
          return getters.allTodos;
      }
    }
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    },
    createTodo: (state, text = "") => {
      if (text.length <= 1) return;

      state.todos.push({
        id: uuidV4(),
        completed: false,
        text
      });
    }
  }, // Commit para mutaciones
  actions: {}, // Dispatch para acciones
  modules: {}
});
