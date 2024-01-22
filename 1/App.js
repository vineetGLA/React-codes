
    // // it is the part of cor react
    // const heading = React.createElement("h1", {id:"id",clas:"xyz",xyz:"d"}, "Hello World from React!");
    // console.log(heading);// it is just a javascript object

    // // it help to  create root element of dom
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    
    // root. render(heading);
    

    /**
 <div id="parent">
<div id="child">
<h1>I'm h1 tag</h1>
<h2>I'm h1 tag</h2>
</div>
</div><div id="childy
<h1>I*m h1 tag</h1>
<h2>I'm h1 tag</h2>
</div>
</div>

* ReactElement(Object) = HTML(Browser Understands)
*/

const parent = React.createElement(
"div",
{ id: "parent" },
React.createElement("div", { id: "child" }, [
React.createElement("h1", {key:1}, "I'm an h1 tag"),
React.createElement("h2", {key:2}, "I'm an h2 tag")]
)
)
console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);