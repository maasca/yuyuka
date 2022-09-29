const fs = require("fs");
const jsdom = require("jsdom");

const html = fs.readFileSync(
  "./index.html",
  { encoding: "utf8", flag: "r" },
  function (err, data) {
    if (err) console.log(err);
    else console.log(data);
  }
);

let dom;
let container;

describe("index.html", () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new jsdom.JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  it("contains the marques select", () => {
    const selectMarques = container.querySelector("#marques");
    // expect(selectMarques).toBeInstanceOf(HTMLSelectElement);
    expect(selectMarques).toBeDefined();
    expect(selectMarques).toContainElement(HTMLOptionElement);
  });
});
