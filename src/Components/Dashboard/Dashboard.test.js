import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import React from "react";

describe("Dashboard", () => {
  let wrapper;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
