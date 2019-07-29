import Vue from "vue";

// Suppress all Vue logs and warnings.
Vue.config.silent = process.env.SILENT === "true";

// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = process.env.PRODUCTION_TIPS === "true";

// Assign a handler for uncaught errors during component render function and watchers.
// The handler gets called with the error, the Vue instance and a Vue-specific error info
// (e.g. which life-cycle hook the error was found in, only available in Vue 2.2.0+).
Vue.config.errorHandler = (err, vm, info) => {
  // Error tracking services Sentry and Bugsnag provide official integrations using this option.
  // Visit the links shown below for more details.
  // https://sentry.io/for/vue/
  // https://docs.bugsnag.com/platforms/browsers/vue/
};

// Assign a custom handler for runtime Vue warnings.
Vue.config.warnHandler = (msg, vm, trace) => {
  // Note: this only works during development and is ignored in production.
};
