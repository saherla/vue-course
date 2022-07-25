import authApi from "@/api/authApi";
// export const myAction = async ({commit}) => {}

export const createUser = async ({ commit }, user) => {
  const { name, email, password } = user;

  try {
    const { data } = await authApi.post(":signUp", {
      email,
      password,
      returnSecureToken: true
    });
    const { idToken, refreshToken } = data;
    delete user.password; // Clean Password

    await authApi.post(":update", {
      displayName: name,
      idToken
    });

    commit("loginUser", { user, idToken, refreshToken }); // "auth/loginUser" es igual

    return { ok: true };
  } catch (error) {
    return { ok: false, message: error.response.data.error.message };
  }
};

export const loginUser = async ({ commit }, user) => {
  const { email, password } = user;

  try {
    const { data } = await authApi.post(":signInWithPassword", {
      email,
      password,
      returnSecureToken: true
    });
    const { displayName, idToken, refreshToken } = data;
    delete user.password; // Clean Password
    user.name = displayName;

    commit("loginUser", { user, idToken, refreshToken }); // "auth/loginUser" es igual

    return { ok: true };
  } catch (error) {
    return { ok: false, message: error.response.data.error.message };
  }
};
