import * as Plot from "@observablehq/plot";
import { JSDOM } from "jsdom";

const dom = new JSDOM("");
const document = dom.window.document;

const data = [
  { x: 1, y: 2, label: "A" },
  { x: 2, y: 4, label: "B" },
  { x: 3, y: 1, label: "C" },
  { x: 4, y: 5, label: "D" },
  { x: 5, y: 3, label: "E" },
];

const chart = Plot.plot({
  document,
  marks: [
    Plot.dot(data, { x: "x", y: "y", fill: "steelblue", r: 6 }),
    Plot.text(data, { x: "x", y: "y", text: "label", dy: -12 }),
  ],
});

console.log("Chart SVG element tag:", chart.tagName);
console.log("Width attr:", chart.getAttribute("viewBox"));
console.log("Mark count (child elements):", chart.children.length);
console.log("\nFirst 300 chars of SVG:\n", chart.outerHTML.slice(0, 300));
