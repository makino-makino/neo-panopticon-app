export default ({ route, store, redirect }) => {
  console.log(1);

  if (
    !store.getters["auth/loggined"] &&
    !["/login", "/register"].includes(route.path)
  ) {
    console.log(2);
    console.log(["/login", "/register"].includes($nuxt.$route.path));
    console.log($nuxt.$route.path);

    return redirect("/login");
  }

  if (
    store.getters["auth/loggined"] &&
    ["/login", "/register"].includes(route.path)
  ) {
    console.log(3);

    return redirect("/localTL");
  }
};
