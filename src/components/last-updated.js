import React from 'react';
import PropTypes from "prop-types";

const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
};

const formatDate = (unformattedDate) => {
    const day = unformattedDate.slice(0, 2);
    const month = unformattedDate.slice(3, 5);
    const time = unformattedDate.slice(11);
    return `${day} ${months[month]}, ${time.slice(0, 5)} IST`;
};

export default function LastUpdated(props) {
    return (
        <div className={"last-updated-container"}>
            <div>
                <div className={"lastupdated-text-container"}>
                    <span className={"last-updated-text"}>Last updated</span>
                    {props.renderTime() > 60 || props.renderTime() < 0 ?
                        null :
                        <span className={"last-update-time"}>
                            {props.getTime()} ago
                        </span>
                    }
                </div>
                <span className={"last-update-date"}>
                    {formatDate(props.data.getIn(["statewise", "0", "lastupdatedtime"]))}
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