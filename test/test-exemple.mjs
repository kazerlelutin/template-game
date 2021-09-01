const o = require("ospec");
o.spec("addition", function () {
  o("works with integers", function () {
    o(1 + 2).equals(3);
  });

  o("works with floats", function () {
    // Yep, thanks IEEE-754 floating point for being weird.
    o(0.1 + 0.2).equals(0.30000000000000004);
  });
});
