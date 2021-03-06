import axios from "axios";

const LOGIN_URI = "/auth/sign_in";
const REGISTER_URI = "/auth/";

export const state = () => ({
  accessToken: "",
  client: "",
  uid: "",
  userId: null
});

export const getters = {
  loggined: state => !!state.accessToken,
  userId: state => state.userId,
  credentials: state => {
    return {
      "access-token": state.accessToken,
      uid: state.uid,
      client: state.client
    };
  }
};

export const mutations = {
  setUser(state, { accessToken, client, uid, userId }) {
    state.accessToken = accessToken;
    state.client = client;
    state.uid = uid;
    state.userId = userId;
  }
};

export const actions = {
  async login({ commit }, { email, password }) {
    const resp = await axios.post(LOGIN_URI, {
      email: email,
      password: password
    });

    commit("setUser", {
      accessToken: resp.headers["access-token"],
      client: resp.headers.client,
      uid: resp.headers.uid,
      userId: resp.data.data.id
    });
  },

  async register({ commit }, { email, name, password }) {
    const resp = await axios.post(REGISTER_URI, {
      email: email,
      name: name,
      password: password
    });

    commit("setUser", {
      accessToken: resp.headers["access-token"],
      client: resp.headers.client,
      uid: resp.headers.uid,
      userId: resp.data.data.id
    });
  },

  logout({ commit }) {
    commit("setUser", {
      accessToken: "",
      client: "",
      uid: "",
      userId: null
    });
  }
};
