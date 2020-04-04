import React from 'react';
import PropTypes from "prop-types";
export default function Heading(props) {
    return (
        <div className={"heading-container"}>
            <span className={"heading-text"}>COMPILED FROM STATE GOVERNMENT NUMBERS</span>
            <span className={"states-count"}>
                {props.stateWise.size - 1} states/uts
                <span className={"update"}>
                    *update now you can tap on state/ut name to view district wise data
                </span>
            </span>
        </div>
    );
}

Heading.propTypes = {
    stateWise: PropTypes.array
}