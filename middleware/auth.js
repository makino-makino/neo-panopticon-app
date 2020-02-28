export default ({ route, store, redirect }) => {
  if (
    !store.getters["auth/loggined"] &&
    !["/login", "/register"].includes(route.path)
  ) {
    return redirect("/login");
  }

  if (
    store.getters["auth/loggined"] &&
    ["/login", "/register"].includes(route.path)
  ) {
    return redirect("/localTL");
  }
};
