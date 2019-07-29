import Vue from "vue";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCaretDown,
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faDotCircle,
  faEdit,
  faExclamation,
  faExclamationTriangle,
  faInfoCircle,
  faMinusSquare,
  faSlidersH,
  faSortUp,
  faSquare,
  faStar,
  faStarHalf,
  faTimes,
  faTimesCircle,
  faUserCog
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

// this will kick of the initial replacement of i to svg tags and configure a MutationObserver
dom.watch();

library.add(
  faBars,
  faCaretDown,
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faChrome,
  faDotCircle,
  faEdit,
  faExclamation,
  faExclamationTriangle,
  faInfoCircle,
  faMinusSquare,
  faSlidersH,
  faSortUp,
  faSquare,
  faStar,
  faStarHalf,
  faTimes,
  faTimesCircle,
  faUserCog
);

Vue.component("fa-icon", FontAwesomeIcon);
Vue.component("fa-layers", FontAwesomeLayers);
Vue.component("fa-text", FontAwesomeLayersText);
