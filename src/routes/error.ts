export default {
  path: "/error",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "centered" */ "@/commons/components/layouts/Centered"),
  children: [
    {
      path: "",
      component: () =>
        import(/* webpackChunkName: "unknown" */ "@/views/Unknown")
    },
    {
      path: "unauthorized",
      component: () =>
        import(/* webpackChunkName: "unauthorized" */ "@/views/Unauthorized")
    },
    {
      path: "forbidden",
      component: () =>
        import(/* webpackChunkName: "forbidden" */ "@/views/Forbidden")
    },
    {
      path: "notfound",
      component: () =>
        import(/* webpackChunkName: "notfound" */ "@/views/NotFound")
    }
  ]
};
