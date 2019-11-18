import "./scss/main.scss";

import { h, app } from "hyperapp";
import { Link, Route, location } from "@hyperapp/router";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Trailers } from "./pages/trailers";
import { Gallery } from "./pages/gallery";

const state = {
  location: location.state,
  currentPage: "home",
  stateVideo: "close",
  currentVideo: "",
  currentSlide: 2
};

const actions = {
  location: location.actions,
  changeSet: value => state => value,
  openVideo: function(value) {
    return function(state, actions) {
      if (value !== "") {
        actions.changeSet({
          stateVideo: "open",
          currentVideo:
            "https://www.youtube.com/embed/" +
            value +
            "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&showinfo=0"
        });
      } else {
        actions.changeSet({
          stateVideo: "close",
          currentVideo: ""
        });
      }
    };
  },
  slidePrev: function() {
    return function(state, actions) {
      if (state.currentSlide > 1) {
        actions.changeSet({
          currentSlide: --state.currentSlide
        });
      }
    };
  },
  slideNext: function() {
    return function(state, actions) {
      if (state.currentSlide < 5) {
        actions.changeSet({
          currentSlide: ++state.currentSlide
        });
      }
    };
  }
};

const view = function(state, actions) {
  return h("div", { className: 'page ' + state.currentPage }, [
    h("ul", { className: "navigation" }, [
      h("li", { className: "" }, [
        Link(
          {
            to: "/joker/"
          },
          ["Home"]
        )
      ]),
      h("li", { className: "" }, [
        Link(
          {
            to: "/joker/about",
            className: [state.location.pathname === "/about" ? "active" : ""]
          },
          ["Synopsis"]
        )
      ]),
      h("li", { className: "navigation--dc_logo navigation--dc_logo-" + state.currentPage }, [
        h("a", { className: "navigation--dc_logo-link", href: "https://www.dccomics.com/" }, "DC"),
        Link(
          {
            to: "/joker/",
            className: "navigation--joker_logo-link"
          },
          ["Joker"]
        )
      ]),
      h("li", { className: "" }, [
        Link(
          {
            to: "/joker/trailers",
            className: [state.location.pathname === "/trailers" ? "active" : ""]
          },
          "Trailers"
        )
      ]),
      h("li", { className: "" }, [
        Link(
          {
            to: "/joker/gallery",
            className: [state.location.pathname === "/gallery" ? "active" : ""]
          },
          "Gallery"
        )
      ])
    ]),
    h("div", { className: "main" }, [
      Route({ path: "/joker/", render: Home }),
      Route({ path: "/joker/about", render: About }),
      Route({ path: "/joker/trailers", render: Trailers }),
      Route({ path: "/joker/gallery", render: Gallery })
    ])
  ]);
};

const main = app(state, actions, view, document.getElementById("app"));

const unsubscribe = location.subscribe(main.location);
