import { computed } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();

  const createUser = async (user) =>
    await store.dispatch("auth/createUser", user);
  // Dispatch llama la accion
  // La accion llama a la API despues al commit

  const loginUser = async (user) =>
    await store.dispatch("auth/loginUser", user);

  const checkAuthentication = async () =>
    await store.dispatch("auth/checkAuthentication");

  return {
    loginUser,
    createUser,
    checkAuthentication,

    authStatus: computed(() => store.getters["auth/currentStatus"]),
    username: computed(() => store.getters["auth/username"]),

    logout: () => {
      store.commit("auth/logout");
      store.commit("journal/clearEntries");
    }
  };
};

export default useAuth;
