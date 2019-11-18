import { h } from "hyperapp";

function addPageClass(state, actions) {
  actions.changeSet({ currentPage: "about" });
}

const About = function() {
  return function(state, actions) {
    return h("div", { className: "about--container", oncreate: addPageClass(state, actions) }, [
      h("div", { className: "about--content" }, [
      	h("h2", { className: "about--content__title" }, "Story"),
      	h("div", { className: "about--content__text" }, [
			h("p", {}, "Director Todd Phillips “Joker” centers around the iconic arch nemesis and is an original, standalone fictional story not seen before on the big screen. Phillips’ exploration of Arthur Fleck, who is indelibly portrayed by Joaquin Phoenix, is of a man struggling to find his way in Gotham’s fractured society. A clown-for-hire by day, he aspires to be a stand-up comic at night…but finds the joke always seems to be on him. Caught in a cyclical existence between apathy and cruelty, Arthur makes one bad decision that brings about a chain reaction of escalating events in this gritty character study."),
			h("p", {}, "Three-time Oscar nominee Phoenix (“The Master,” “Walk the Line,” “Gladiator”) stars in the titular role alongside Oscar winner Robert De Niro (“Raging Bull,” “The Godfather: Part II”) as Franklin. The film also stars Zazie Beetz (“Deadpool 2”), Frances Conroy (TV’s “American Horror Story,” Hulu’s “Castle Rock”), Marc Maron (TV’s “Maron,” “GLOW”), Bill Camp (“Red Sparrow,” “Molly’s Game”), Glenn Fleshler (TV’s “Billions,” “Barry”), Shea Whigham (“First Man,” “Kong: Skull Island”), Brett Cullen (“42,” Netflix’s “Narcos”), Douglas Hodge (“Red Sparrow,” TV’s “Penny Dreadful”) and Josh Pais (upcoming “Motherless Brooklyn,” “Going in Style”)."),
			h("p", {}, "Oscar nominee Phillips (“Borat,” “The Hangover” trilogy) directs from a screenplay he co-wrote with Oscar-nominated writer Scott Silver (“The Fighter”), based on characters from DC. The film is produced by Phillips and Oscar nominee Bradley Cooper (“A Star Is Born,” “American Sniper”) under their Joint Effort banner, and Oscar nominee Emma Tillinger Koskoff (“The Wolf of Wall Street”). It is executive produced by Michael E. Uslan, Walter Hamada, Aaron L. Gilbert, Joseph Garner, Richard Baratta, and Bruce Berman."),
			h("p", {}, "Behind the scenes, Phillips is joined by director of photography Lawrence Sher (“Godzilla: King of the Monsters,” “The Hangover” trilogy), production designer Mark Friedberg (“Selma,” “The Amazing Spider-Man 2”), editor Jeff Groth (“War Dogs,” “The Hangover Part III”), and Oscar-winning costume designer Mark Bridges (“Phantom Thread,” “The Artist”). The music is by Hildur Guðnadóttir (“Sicario: Day of the Soldado”)."),
			h("p", {}, "Warner Bros. Pictures Presents, in Association with Village Roadshow Pictures, in Association with BRON Creative, a Joint Effort Production, a Film by Todd Phillips, “Joker.” It will be Only in cinemas and will be distributed worldwide by Warner Bros. Pictures."),
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

export { About };
