import m from "mithril";

//other type of write component
const IncButton = {
    view: ({  attrs }) =>
      m("button", { onclick: attrs.actions.increment }, attrs.text),
  };
export default IncButton;
