import React from 'react';

export default function Header() {
    return (
        <div className={"header-conatiner"}>
            <img alt={"Covid-19"} className={"header-img"} src={require("../assets/logo.png")} />
            <span className={"header-text"}>COVID-19 VS INDIA</span>
        </div>
    );
}
