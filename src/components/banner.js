import React from 'react';
import PropTypes from "prop-types";

export default function Banner(props) {
    return (
        <div className={"banner"}>
            <span
                className={"banner-text"}
            >
                ALERT ! {props.cards.getIn(["delta", "confirmed"])} new cases
            </span>
        </div>
    );
}

Banner.propTypes = {
    cards: PropTypes.object
}