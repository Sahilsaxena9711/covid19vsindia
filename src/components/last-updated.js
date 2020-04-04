import React from 'react';
import PropTypes from "prop-types";
import moment from 'moment';

export default function LastUpdated(props) {
    return (
        <div className={"last-updated-container"}>
            <div>
                <div className={"lastupdated-text-container"}>
                    <span className={"last-updated-text"}>Last updated</span>
                    {props.renderTime() > 24 ?
                        null :
                        <span className={"last-update-time"}>
                            {props.getTime()} ago
            </span>
                    }
                </div>
                <span className={"last-update-date"}>
                    {moment(props.data.getIn(["key_values", "0", "lastupdatedtime"])).format("MMM DD, YYYY hh:mm a")}
                </span>
            </div>
            <button
                onClick={props.fetchData}
                type="button"
                className="refresh-btn btn btn-primary"
            >
                Refresh
        </button>
        </div>
    );
}


LastUpdated.propTypes = {
    renderTime: PropTypes.func,
    getTime: PropTypes.func,
    fetchData: PropTypes.func,
    data: PropTypes.object
}