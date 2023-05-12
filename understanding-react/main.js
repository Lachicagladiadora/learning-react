import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDOMElement = document.getElementById('app')
const root = ReactDOM.createRoot(appDOMElement)

const rc = React.createElement

const button = rc('button', { "data-id":123 }, 'I like') //(typeElement, attributes or properties (is a object or null), what wraps the element)
const button2 = rc('button', { "data-id":456 }, 'I like')
const button3 = rc('button', { "data-id":789 }, 'I like')

const app = rc(React.Fragment , null, [button, button2, button3])

root.render('Hi React!')
root.render(app)

/*
REACT
atributtes: camelCase
*/


/*
JSX
<React.Fragment>
    <button data-id="123">I like</button>
    <button data-id="456">I like</button>
    <button data-id="789">I like</button>
</React.Fragment>

input:
    const buttonJSX = <button data-id="123">Button 1</button>
output:
    var buttonJSX = React.createElement("button", {
        "data-id": "123"
    }, "Button 1");

*/

/*
SWC/BABEL -> transpiled(compiled) of code
  input: 
    const button3 = React.createElement('button', { "data-id":789 }, 'I like')
  output: 
    var button3 = React.createElement("button", {
        "data-id": 789
    }, "I like");
*/