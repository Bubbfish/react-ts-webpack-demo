import React from "react";
import  ReactDOM  from "react-dom";

const App = () =>{
    const apple: number = 2
    return (
        <div>
            <h1>Hello!{apple}</h1>
            <h2>Welcome to your First React App...</h2>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))