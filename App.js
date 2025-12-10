import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1",{id:"heading"}, "Hello World From React");

const heading = React.createElement("div",{id:"parent"}, 
    [React.createElement("div",{id: "child1", key: "child1"},
        [React.createElement("h1",{key: "1"},"Hello"),
        React.createElement("h1",{key: "2"}," Byee"),]
    ),
    React.createElement("div",{id: "child2", key: "child2"},
        [React.createElement("h1",{key: "3"},"Hello"),
        React.createElement("h1",{key: "4"}," Byee")]
    )]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);