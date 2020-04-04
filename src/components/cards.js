import React from 'react';
import PropTypes from "prop-types";
import { CARDS } from '../constants';

export default function Cards(props) {
    return (
        <div className={"cards-container"}>
            {
                CARDS.map((_, k) =>
                    <div key={k} className={"card"} style={{ background: _.background }}>
                        <span className={"card-heading"} style={{ borderBottom: _.border, color: _.textColor }}>{_.label}</span>
                        <div className={"card-bottom-container"}>
                            <div className={"card-bottom"}>
                                <span className={"card-text"}>{props.cards.get(k)}</span>
                                <span>total</span>
                            </div>
                            <div className={"card-bottom"}>
                                <span className={"card-text"} style={{ color: _.textColor }}>[+{_.render(props.cards)}]</span>
                                <span className={"card-right-text"} style={{ color: _.textColor }}>new</span>
                            </div>
                        </div>
                    </div>
                ).toList()
            }
        </div>
    );
}

Cards.propTypes = {
    cards: PropTypes.object
}