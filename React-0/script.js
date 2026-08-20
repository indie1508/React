console.log(React);

let rh1=React.createElement(
    "h1",
    null,
    React.createElement("span",{},"hey i am in h1")
)

let realDomElem=document.querySelector("#root")
let rootofReact=ReactDOM.createRoot(realDomElem)
rootofReact.render(rh1)