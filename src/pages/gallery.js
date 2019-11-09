import { h } from "hyperapp";

function addPageClass(state, actions) {
  actions.changeSet({ currentPage: "gallery" });
}

const Gallery = (state, actions) => h("h2", {}, [addPageClass, "Gallery"]);

export { Gallery };
