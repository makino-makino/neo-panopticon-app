import axios from "axios";

const LOGIN_URI = "/auth/sign_in";
const REGISTER_URI = "/auth/";

export const state = () => ({
  loggined: false
});

export const getters = {
  loggined: state => state.loggined
};

export const mutations = {
  setLoggined(state, loggined) {
    state.loggined = loggined;
  }
};

export const actions = {
  async login({ commit }, { email, password }) {
    const resp = await axios.post(`${process.env.BASE_URL}${LOGIN_URI}`, {
      email: email,
      password: password
    });

    localStorage.accessToken = resp.headers["access-token"];
    localStorage.client = resp.headers.client;
    localStorage.uid = resp.headers.uid;

    localStorage.userId = resp.data.data.id;

    commit("setLoggined", true);
  },

  async register({ commit }, { email, name, password }) {
    // try {
    const resp = await axios.post(`${process.env.BASE_URL}${REGISTER_URI}`, {
      email: email,
      name: name,
      password: password,
      password_confirm: password
    });

    localStorage.accessToken = resp.headers["access-token"];
    localStorage.client = resp.headers.client;
    localStorage.uid = resp.headers.uid;

    localStorage.userId = resp.data.data.id;

    commit("setLoggined", true);
  },

  async logout({ commit }) {
    localStorage.accessToken = null;
    localStorage.client = null;
    localStorage.uid = null;
    localStorage.userId = null;

    commit("setLoggined", false);
  }
};
