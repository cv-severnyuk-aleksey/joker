import { h } from "hyperapp";

import images from './images';

function addPageClass(state, actions) {
  actions.changeSet({ currentPage: "gallery" });
}

const Gallery = function() {
  return function(state, actions) {
    return h("div", { className: "gallery--container", oncreate: addPageClass(state, actions) }, [
      h("div", { className: "gallery--content" }, [
      	h("h2", { className: "gallery--content__title" }, "Gallery"),
      	h("div", { className: "gallery--slider" }, [
			h("ul", { 
				className: "gallery--list",
				style: {
					cssText:
						"transform: translateX(" +
						(state.currentGallerySlide * -746 + 746) +
						"px)"
				}
			},
			[
				images.map(
					({id, src}) => h("li", {}, [
						h("img", { key: id, src: src }, '')
					])
				)
			]),
			h("div", { className: "gallery--list__nav" }, [
				h(
					"button",
					{
						className: "gallery--list__nav-prev",
						onclick: function() {
							actions.slideGalleryPrev();
						}
					},
					""
				),
				h(
					"button",
					{
						className: "gallery--list__nav-next",
						onclick: function() {
							actions.slideGalleryNext();
						}
					},
					""
				)
			])
      	]),
      ]),

      h("footer", { className: "footer" }, [
        h("div", { className: "footer--wb" }, [
          h(
            "a",
            {
              href: "https://www.warnerbros.com/",
              className: "footer--wb__link"
            },
            ""
          )
        ])
      ])
    ])
  };
};

export { Gallery };
