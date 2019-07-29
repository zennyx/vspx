import { createDecorator } from "vue-class-component";

function getState(key: string, state: any) {
  return key
    .replace(/\[([^\]]+)]/g, ".$1")
    .split(".")
    .reduce((o, k) => {
      return o[k];
    }, state);
}

type stateAccessor = (state: any) => any;

export default function MapState(
  mutation: string,
  stateVariable?: string | stateAccessor
): any {
  return createDecorator((options, key) => {
    console.log(options);
    console.log(key);
    if (!options.computed) {
      options.computed = {};
    }

    options.computed[key] = {
      get() {
        if (typeof stateVariable === "string") {
          return stateVariable
            ? getState(stateVariable, (this as any).$store.state)
            : (this as any).$store.state[key];
        }
        if (stateVariable) {
          return stateVariable((this as any).$store.state);
        }
      },
      set(value) {
        (this as any).$store.commit(mutation, value);
      }
    };
  });
}
