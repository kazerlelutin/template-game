import m from "mithril";
import Game from "./pages/game/game.mjs";
import Home from "./pages/Home/Home.mjs";
import { helloActions, helloState } from "./stores/hello.store";

//make sure to have a prefix for refresh page with route
m.route.prefix = "#gm"

// Exemple store (sate and action)
const HelloState = helloState();
const HelloActions = helloActions(HelloState);

//Exemple simple component with route params
const Article = {
  view: function ({ articleid }) {
    return "This is article " + articleid;
  },
};

m.route(document.querySelector("#mithril"), "/", {
  "/article/:articleid": Article,
  "/game": () => Game(HelloState, HelloActions),
  "/": () => Home(HelloState, HelloActions),

});
