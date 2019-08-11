import React from "react";
import Header from "../Header";
import Container from "../Container";
import Phase1 from "../Phase1";
import Hostpage from "../Hostpage";
import "./Frontpage.css";

function Frontpage() {
    return (
        <div>
            <Header />
            <Phase1 />
        </div>
    );
}

export default Frontpage;