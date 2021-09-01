import kaboom from "kaboom";
import m from "mithril";
export default function Game(state, actions) {
  const rootDiv = document.querySelector("#mithril");
  return {
    oninit: (_vnode) => {
      kaboom({
        global: true,
      });
      loadRoot("sprites/");

      const constants = {
        moveSpeed: 120,
        jumpForce: 300
      }
      const sprites = {
        commander: "commander"
      }

      loadSprite(sprites.commander, "cmd.png");

      const player = add([sprite(sprites.commander), pos(80, 80), area(), body()]);

      keyDown("left", () => {
        player.move(-constants.moveSpeed, 0);
      });
      
      keyDown("right", () => {
        player.move(constants.moveSpeed, 0);
      });
      // platform
      add([rect(width(), 20), pos(0, height() - 50), area(), solid()]);

      keyPress("space", () => {

        if (player.grounded()) {
          player.jump(constants.jumpForce);
        }
      });

      //Return in home with Mithril Router
      keyPress("r", () => {
        m.route.set("/");
      });
      //hide div for mithril 
      rootDiv.style.display = "none";
    },
    onremove: (_vnode) => {
      //clean the dom if use Mithril Router
      const canvas = document.querySelector("canvas"),
        body = document.querySelector("body");
      body.removeChild(canvas);
      rootDiv.style.display = "block";
    },
    view: () => m(""),
  };
}
