import "./style.css"; 
import ReactDOM from "react-dom"; 
import React from "react";
import Location from "./components/Location";
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

ReactDOM.render(<Location/>,document.getElementById('root'));