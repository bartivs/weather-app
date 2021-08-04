import "./style.css"; 
import Weather from "./components/Weather.js";
import ReactDOM from "react-dom"; 
import React from "react";

// const APIKEY="946a4de2a04d3aae30ba738e5397faa8";
// Weather.setApiKey(APIKEY); 
// Weather.getWeather("London").
// then(j=>console.log(j));

class ReactComponent extends React.Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div>
               <h1> Hello React!</h1>
            </div>
        )
    }
}

ReactDOM.render(<ReactComponent/>,document.getElementById('root'));