import React from 'react';
import PropTypes from "prop-types";
import { MODAL_COLUMNS } from "../constants";

export default function Modal(props) {
    return (
        <div onClick={props.onModalToggle} className={"modal-container"}>
            <div className={"modal-wrapper"}>
                <div onClick={() => null} className={"modal-main"}>
                    <div className={"table-responsive-sm table-container"}>
                        <span
                            style={{ fontSize: "2rem", fontWeight: 600, marginTop: "2rem", marginBottom: "2rem" }}
                        >
                            {props.selectedState}
                        </span>
                        <table className="table  table-striped">
                            <thead style={{ background: "#E6EEF9" }}>
                                <tr>
                                    {MODAL_COLUMNS.map((_, k) => <th key={k} className={"t-head"}>{_.label}</th>).toList()}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.selectedData.map((_, k) =>
                                        <tr key={k}>
                                            <td
                                                width={"24%"}
                                                style={{ textAlign: "left" }}
                                                className={"t-row"}
                                            >
                                                {k}
                                            </td>
                                            <td
                                                width={"19%"}
                                                style={{ textAlign: "left" }}
                                                className={"t-row"}
                                            >
                                                {
                                                    _.delta.confirmed ?
                                                        <span style={{ color: "#2F80ED" }}>
                                                            [+{_.delta.confirmed}]
                                                        </span>
                                                        : null
                                                } {_.confirmed}
                                            </td>
                                        </tr>
                                    ).toList()
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
}



Modal.propTypes = {
    onModalToggle: PropTypes.func,
    selectedState: PropTypes.string,
    selectedData: PropTypes.object
}