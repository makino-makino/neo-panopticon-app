export default ({ route, store, redirect }) => {
  const loggined = store.getters["auth/loggined"];
  const isGuestPage = ["/login", "/register"].includes(route.path);

  if (!loggined && !isGuestPage) {
    return redirect("/login");
  }

  if (loggined && isGuestPage) {
    return redirect("/login");
  }
};
