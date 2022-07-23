import authApi from "@/api/authApi";
// export const myAction = async ({commit}) => {}

export const createUser = async ({ commit }, user) => {
  const { email, password } = user;

  console.log(commit);
  try {
    const { data } = await authApi.post(":signUp", {
      email,
      password,
      returnSecureToken: true
    });
    console.log(data);

    return { ok: true };
  } catch (error) {
    return { ok: false, message: error.response.data.error.message };
  }
};
