import m from "mithril";
import IncButton from "../../IncButton/IncButton.mjs";
import Counter from "../../lib/counter/counter.mjs";
import classes from "./Home.module.css";

/**
 * 
 * @param vnode state of component
 */
async function changebuttonMsg(vnode) {
  const myPromise = new Promise((resolve, _reject)=>{
    setTimeout(() => {
      resolve("click for increment");

    }, 1000);
  })
  vnode.state.textForButton = await myPromise;
  //launch new DOM
  m.redraw();
}

export default function Home(state, actions) {

  return {
    oninit: changebuttonMsg,
    view: (vnode) => {
      console.log(vnode.state)
      return m("div", { class: classes.container }, [
        m("h1", "Game Template"),
        m("div", `count in first Level : ${state.count}`),
        // Functional Component
        Counter(state, actions),
        //implement simple comp with action props
        m(IncButton, { actions, text: vnode.state.textForButton || "..." }),
        m(m.route.Link, {href:"/game"}, "Launch Game")
      ]);
    },
  };
}
