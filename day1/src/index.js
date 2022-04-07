

import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
// const root= document.getElementById("root");

const h1= React.createElement("h1",{class:"editText"},"helloReact!");

const img= React.createElement("img",{
    width:"400px",
    height:"400px",
    src:"https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938__340.jpg"
},h1)

ReactDOM.render(
    <div>
        <h1>hello react!</h1>
        <img src="https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938__340.jpg"></img>
    </div>,
    
    document.getElementById("root")
);

// const img= document.createElement("img");
// img.src="./src/img/webpack.png";
// img.classList.add("image");
// const h1=document.createElement("h1");
// h1.classList.add("editText");
// h1.innerText="Hello World!";

// root.append(img,h1);
