import React, {Component } from "react";
import "./Container.css";
import Header from "../Header";
import Gettingstarted from "../Gettingstarted";
import Musicplayer from "../Musicplayer";
//import Homepage from "../Hostpage";

class Container extends Component {
    render() {
        return (
            <div>
            <div className = "container">
            <Header />
            </div>
            <Gettingstarted />
            </div>
        )
    }
}

export default Container;