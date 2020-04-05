import React from 'react';
import { COLUMNS, BODY_COLS } from '../constants';
import PropTypes from "prop-types";

export default function Table(props) {
    return (
        <div className={"table-container"}>
            <table className="table">
                <thead style={{ background: "#E6EEF9" }}>
                    <tr>
                        {COLUMNS.map((_, k) =>
                            <th
                                key={k}
                                className={"t-head"}
                                style={{ textAlign: k === "state" ? "left" : "center", color: _.color }}
                            >
                                {_.header}
                            </th>).toList()
                        }
                    </tr>
                </thead>
                <tbody>
                    {props.stateWise.map((_, k) => <tr
                        onClick={() => window.screen.width > 780 ? null : props.onStateSelect(_.state)}
                        key={k}
                    >
                        <td
                            width={"24%"}
                            className={"t-row"}
                            style={{ textAlign: "left" }}
                        >
                            {/* eslint-disable-next-line */}
                            <a>{_.state}</a>
                        </td>
                        {BODY_COLS.map((__, k) =>
                            <td
                                key={k}
                                width={"19%"}
                                className={"t-row"}
                            >
                                {
                                    +_[__.delta] ?
                                        <span style={{ color: __.color }}>[+{_[__.delta]}]</span>
                                        : null
                                } {+_[__.key] || "-"}
                            </td>
                        ).toList()}
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

Table.propTypes = {
    stateWise: PropTypes.array,
    onStateSelect: PropTypes.func
}
