const o = require("ospec"),
  jsdom = require("jsdom"),
  dom = new jsdom.JSDOM("", {
    pretendToBeVisual: true
  });

global.window = dom.window;
global.document = dom.window.document;
global.requestAnimationFrame = dom.window.requestAnimationFrame;

const m = require("mithril");

o.after(() => {
  dom.window.close();
});
