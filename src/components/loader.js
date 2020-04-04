import React from 'react';

export default function Loader() {
    return (
        <div className={"loader-container"}>
            <img src={require("../assets/logo.png")} className="App-logo" alt="logo" />
            <span className={"loader-text"}>Loading...</span>
        </div>
    );
}
