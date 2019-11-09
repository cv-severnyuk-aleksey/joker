import { h } from "hyperapp";

function addPageClass(state, actions) {
  actions.changeSet({ currentPage: "trailers" });
}

const Trailers = (state, actions) => h("h2", {}, [addPageClass, "Trailers"]);

export { Trailers };
