import Complex from "@/commons/components/layouts/Complex";
import Home from "@/views/Home";

export default {
  path: "/home",
  component: Complex,
  children: [
    {
      path: "",
      component: Home
    }
  ]
};
