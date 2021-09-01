import m from "mithril";
import classes from "./counter.module.css";

export default function Counter({ count }, actions) {
  return m(
    "div",
    { class: classes.container, onclick: () => actions.upScore(20) },
    `count in component: ${count}`
  );
}
