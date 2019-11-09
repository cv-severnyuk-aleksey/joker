import { h } from "hyperapp";

import joker_img from './../img/joker-logo.png';

const addPageClass = function(state, actions) {
  actions.changeSet({
    currentPage: "home"
  });
};

const labnolThumb = function(e) {
  return h("img", {
    className: "youtube-thumb",
    src: "https://i.ytimg.com/vi/" + e + "/hqdefault.jpg"
  });
};

const Home = function() {
  return function(state, actions) {
    return h("div", { oncreate: addPageClass(state, actions) }, [
      h("div", { className: "title" }, [
        h("div", { className: "title--top" }, [
          h("div", { className: "title--top__name" }, "Joaquin Phoenix"),
          h("div", { className: "title--top__date" }, [
            "OCT, 4",
            h("sup", {}, "Th")
          ])
        ]),
        h("div", { className: "title--middle" }, [
          h("img", { src: joker_img, alt: "Joker title" })
        ]),
        h("div", { className: "title--bottom" }, "Put on a happy face")
      ]),

      h("div", { className: "trailers" }, [
        h("div", { className: "trailers--list__container" }, [
          h(
            "ol",
            {
              className: "trailers--list",
              style: {
                cssText:
                  "transform: translateX(" +
                  (state.currentSlide * -330 + 660) +
                  "px)"
              }
            },
            [
              h(
                "li",
                {
                  className:
                    "trailers--list__item" +
                    (state.currentSlide === 1 ? " current" : "")
                },
                [
                  h("div", { className: "trailers--list__item-container" }, [
                    h(
                      "div",
                      {
                        className: "trailers--list__video",
                        onclick: function() {
                          actions.openVideo("MpWbg5gJEO8");
                        }
                      },
                      labnolThumb("MpWbg5gJEO8")
                    )
                  ])
                ]
              ),
              h(
                "li",
                {
                  className:
                    "trailers--list__item" +
                    (state.currentSlide === 2 ? " current" : "")
                },
                [
                  h("div", { className: "trailers--list__item-container" }, [
                    h(
                      "div",
                      {
                        className: "trailers--list__video",
                        onclick: function() {
                          actions.openVideo("4Xy_K1HiryA");
                        }
                      },
                      labnolThumb("4Xy_K1HiryA")
                    )
                  ])
                ]
              ),
              h(
                "li",
                {
                  className:
                    "trailers--list__item" +
                    (state.currentSlide === 3 ? " current" : "")
                },
                [
                  h("div", { className: "trailers--list__item-container" }, [
                    h(
                      "div",
                      {
                        className: "trailers--list__video",
                        onclick: function() {
                          actions.openVideo("hk0n2Ywy9k8");
                        }
                      },
                      labnolThumb("hk0n2Ywy9k8")
                    )
                  ])
                ]
              ),
              h(
                "li",
                {
                  className:
                    "trailers--list__item" +
                    (state.currentSlide === 4 ? " current" : "")
                },
                [
                  h("div", { className: "trailers--list__item-container" }, [
                    h(
                      "div",
                      {
                        className: "trailers--list__video",
                        onclick: function() {
                          actions.openVideo("k1z-45O-ZHQ");
                        }
                      },
                      labnolThumb("k1z-45O-ZHQ")
                    )
                  ])
                ]
              ),
              h(
                "li",
                {
                  className:
                    "trailers--list__item" +
                    (state.currentSlide === 5 ? " current" : "")
                },
                [
                  h("div", { className: "trailers--list__item-container" }, [
                    h(
                      "div",
                      {
                        className: "trailers--list__video",
                        onclick: function() {
                          actions.openVideo("XChsfmniPVc");
                        }
                      },
                      labnolThumb("XChsfmniPVc")
                    )
                  ])
                ]
              )
            ]
          )
        ]),
        h("div", { className: "trailers--list__nav" }, [
          h(
            "button",
            {
              className: "trailers--list__nav-prev",
              onclick: function() {
                actions.slidePrev();
              }
            },
            ""
          ),
          h(
            "button",
            {
              className: "trailers--list__nav-next",
              onclick: function() {
                actions.slideNext();
              }
            },
            ""
          )
        ])
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
        ]),
        h("ul", { className: "footer--reviews" }, [
          h("li", { className: "footer--reviews__item" }, [
            h(
              "h3",
              { className: "footer--reviews__item-title" },
              "“film of the year”"
            ),
            h("ul", { className: "footer--reviews__item-stars" }, [
              h("li", {}, ""),
              h("li", {}, ""),
              h("li", {}, ""),
              h("li", {}, ""),
              h("li", {}, "")
            ]),
            h(
              "p",
              { className: "footer--reviews__item-subtitle" },
              "The New York Times"
            )
          ]),
          h("li", { className: "footer--reviews__item" }, [
            h(
              "h3",
              { className: "footer--reviews__item-title" },
              "“Joaquin Phoenix is astonishing”"
            ),
            h("ul", { className: "footer--reviews__item-stars" }, [
              h("li", {}, ""),
              h("li", {}, ""),
              h("li", {}, ""),
              h("li", {}, ""),
              h("li", {}, "")
            ]),
            h(
              "p",
              { className: "footer--reviews__item-subtitle" },
              "The Washington post"
            )
          ])
        ])
      ]),
      h(
        "div",
        {
          className: "lightbox " + state.stateVideo,
          id: "video",
          tabindex: 0
        },
        [
          h("div", { className: "lightbox-container" }, [
            h("div", { className: "lightbox-content" }, [
              h(
                "button",
                {
                  className: "lightbox-close",
                  tabindex: 0,
                  onclick: function() {
                    actions.openVideo("");
                  }
                },
                "✕"
              ),
              h("div", { className: "video-container" }, [
                h("iframe", {
                  className: "youtube-iframe",
                  tabindex: 0,
                  src: state.currentVideo,
                  frameborder: 0,
                  allowfullscreen: "allowfullscreen"
                })
              ])
            ])
          ])
        ]
      )
    ]);
  };
};

export { Home };
