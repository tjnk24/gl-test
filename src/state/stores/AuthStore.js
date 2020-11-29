import { Store } from "../common/store/store";

export const USER_LOGIN_LOGOUT = 'USER_LOGIN_LOGOUT';

const AuthStore = new Store("auth", {
  data: {
    auth: [],
  },
  options: {
    shouldInitFromState: true,
    stateKey: "auth",
  },
  reducers: [
    {
      type: USER_LOGIN_LOGOUT,
      action(state, payload) {
        const { auth } = payload;

        return {
          auth: {
            ...state.auth,
            ...auth
          }
        };
      }
    },
  ]
});

export { AuthStore };
