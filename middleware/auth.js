export default ({ route, store, redirect }) => {
  const hasLocalStorage =
    localStorage.userId &&
    localStorage.uid &&
    localStorage.client &&
    localStorage["access-token"];

  const isGuestPage = ["/login", "/register"].includes(route.path);
  let loggined = store.getters["auth/loggined"];

  if (!loggined) {
    if (hasLocalStorage) {
      store.commit("setUser", {
        accessToken: localStorage["access-token"],
        client: localStorage.client,
        uid: localStorage.uid,
        userId: localStorage.userId
      });

      loggined = true;
    } else if (!isGuestPage) {
      return redirect("/login");
    }
  }

  if (loggined && isGuestPage) {
    return redirect("/localTL");
  }
};
