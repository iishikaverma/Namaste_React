import React from "react";
import ReactDOM from "react-dom/client";
//EP: 2
// React.createElement is an Object => when we render this on to a DOM then it becomes an HTML Element.
// const heading = React.createElement("h1",{id:"heading"}, "Hello World From React");

// const heading = React.createElement("div",{id:"parent"}, 
//     [React.createElement("div",{id: "child1", key: "child1"},
//         [React.createElement("h1",{key: "1"},"Hello"),
//         React.createElement("h1",{key: "2"}," Byee"),]
//     ),
//     React.createElement("div",{id: "child2", key: "child2"},
//         [React.createElement("h1",{key: "3"},"Hello"),
//         React.createElement("h1",{key: "4"}," Byee")]
//     )]);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// EP: 3

// in React
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React"
// );
// console.log(heading);

//JSX - is different from HTML (it just looks like HTML)
//JSX (transfiles before it reaches the JS)- this is done by PARCEL- Babel
// const jsxHeading = (
//     <h1 id="heading" tabIndex="1">
//     Namaste React using JSX!
//     </h1>
// );

//React Functional Components
// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component</h1>;
// };

// const Title = () => (
//     <h1 id="head" tabIndex="5">
//     Namaste React using JSX!
//     </h1>
// );

const number = 1000;

const HeadingComponent1 = () => (
    <div id="container">
        {title}
        {number}
        <h2>{100-23}</h2>
        <h1>Namaste React Functional Component</h1>
    </div>
);

const title = (
    <h1 className="head" tabIndex="5">
    Namaste React using JSX!
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

root.render(<HeadingComponent1/>);