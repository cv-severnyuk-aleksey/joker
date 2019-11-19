import { h } from "hyperapp";

function addPageClass(state, actions) {
  actions.changeSet({ 
  	currentPage: "trailers"
  });
}

const labnolThumb = function(e) {
  return h("img", {
    className: "youtube-thumb",
    src: "https://i.ytimg.com/vi/" + e + "/hqdefault.jpg"
  });
};

const videoIds = ["MpWbg5gJEO8", "4Xy_K1HiryA", "hk0n2Ywy9k8", "k1z-45O-ZHQ", "XChsfmniPVc"];

const Trailers = function() {
  return function(state, actions) {
    return h("div", { className: "trailers-page--container", oncreate: addPageClass(state, actions) }, [
      h("div", { className: "trailers-page--content" }, [
      	h("h2", { className: "trailers-page--content__title" }, "Trailers"),

		h("div", { className: "trailers-page--content__text" }, [
	        h("div", { className: "trailers-page--list__container" }, [
	          h(
	            "ol",
	            {
	              className: "trailers-page--list",
	              style: {
	                cssText:
	                  "transform: translateY(" +
	                  (state.currentSlide * -188 + 376) +
	                  "px)"
	              }
	            },
	            [
	              h(
	                "li",
	                {
	                  className:
	                    "trailers-page--list__item" +
	                    (state.currentSlide === 1 ? " current" : "")
	                },
	                [
	                  h("div", { className: "trailers-page--list__item-container" }, [
	                    h(
	                      "div",
	                      {
	                        className: "trailers-page--list__video",
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
	                    "trailers-page--list__item" +
	                    (state.currentSlide === 2 ? " current" : "")
	                },
	                [
	                  h("div", { className: "trailers-page--list__item-container" }, [
	                    h(
	                      "div",
	                      {
	                        className: "trailers-page--list__video",
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
	                    "trailers-page--list__item" +
	                    (state.currentSlide === 3 ? " current" : "")
	                },
	                [
	                  h("div", { className: "trailers-page--list__item-container" }, [
	                    h(
	                      "div",
	                      {
	                        className: "trailers-page--list__video",
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
	                    "trailers-page--list__item" +
	                    (state.currentSlide === 4 ? " current" : "")
	                },
	                [
	                  h("div", { className: "trailers-page--list__item-container" }, [
	                    h(
	                      "div",
	                      {
	                        className: "trailers-page--list__video",
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
	                    "trailers-page--list__item" +
	                    (state.currentSlide === 5 ? " current" : "")
	                },
	                [
	                  h("div", { className: "trailers-page--list__item-container" }, [
	                    h(
	                      "div",
	                      {
	                        className: "trailers-page--list__video",
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
	        h("div", { className: "trailers-page--list__nav" }, [
	          h(
	            "button",
	            {
	              className: "trailers-page--list__nav-prev",
	              onclick: function() {
	                actions.slidePrev();
	              }
	            },
	            ""
	          ),
	          h(
	            "button",
	            {
	              className: "trailers-page--list__nav-next",
	              onclick: function() {
	                actions.slideNext();
	              }
	            },
	            ""
	          )
	        ])
	      ]),

	  	]),

      h(
        "div",
        {
          className: "lightbox trailers-page--lightbox " + state.stateVideo,
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
                  src: state.currentVideo!==''?state.currentVideo:"https://www.youtube.com/embed/"+videoIds[state.currentSlide-1]+"?autohide=2&border=0&wmode=opaque&enablejsapi=1&showinfo=0",
                  frameborder: 0,
                  allowfullscreen: "allowfullscreen"
                })
              ])
            ])
          ])
        ]
      ),

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
      ]),
    ])
  };
};

export { Trailers };
