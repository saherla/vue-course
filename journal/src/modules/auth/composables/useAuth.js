import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();

  const createUser = async (user) =>
    await store.dispatch("auth/createUser", user);
  // Dispatch llama la accion
  // La accion llama a la API despues al commit

  const loginUser = async (user) =>
    await store.dispatch("auth/loginUser", user);

  return {
    loginUser,
    createUser
  };
};

export default useAuth;
