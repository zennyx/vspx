export default {
  // will match everything
  path: "*",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "centered" */ "@/commons/components/layouts/Centered"),
  children: [
    {
      path: "",
      component: () =>
        import(/* webpackChunkName: "notfound" */ "@/views/NotFound")
    }
  ]
};
