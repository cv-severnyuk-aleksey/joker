import { h } from "hyperapp";

function addPageClass(state, actions) {
  actions.changeSet({ currentPage: "about" });
}

const About = (state, actions) => h("h2", {}, [addPageClass, "About"]);

export { About };
