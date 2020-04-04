import React from 'react';
import { GIT_URL, DESIGNER_PROFILE_URL, DEVELOPER_PROFILE_URL, DEVELOPER_NAME, DESIGNER_NAME, DATA_SOURCE_URL } from '../constants';

export default function Footer() {
    return (
        <footer className={"footer"}>
            {/* eslint-disable-next-line */}
            <span onClick={() => window.open(DESIGNER_PROFILE_URL)}>
                <i style={{ fontSize: "24px" }} className={"fab"}>&#xf397;</i>
                <b>&nbsp;Designed by </b>
                <a>&nbsp;{DESIGNER_NAME}</a>
            </span>
            {/* eslint-disable-next-line */}
            <span onClick={() => window.open(DEVELOPER_PROFILE_URL)}>
                <i style={{ fontSize: "20px" }} className={"fas"}>&#xf121;</i>
                <b>&nbsp;Developed by</b>
                <a>&nbsp;{DEVELOPER_NAME}</a>
            </span>
            <span>
                <i style={{ fontSize: "20px" }} className={"fas"}>&#xf1c0;</i>
                <b>&nbsp; Data Source </b>&nbsp;<a>{DATA_SOURCE_URL}</a></span>
            <span onClick={() => window.open(GIT_URL)}>
                <i style={{ fontSize: "22px" }} className={"fab"}>&#xf09b;</i>
                <b>&nbsp;Open sourced on </b>
                <a>&nbsp;GitHub</a>
            </span>
        </footer>
    );
}
