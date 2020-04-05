import React from 'react';

import { Map, List } from "immutable";
import axios from "axios";
import moment from 'moment';

import "../styles/App.css";
import "../styles/loader.css";
import "../styles/header.css";
import "../styles/heading.css";
import "../styles/banner.css";
import "../styles/last-updated.css";
import "../styles/table.css";
import "../styles/card.css";
import "../styles/modal.css";

import {
  BASE_URL,
  STATE_WISE_DATA_URL,
  ALL_DATA_URL,
} from "../constants";

import {
  Table,
  Heading,
  Cards,
  Header,
  LastUpdated,
  Banner,
  Loader,
  Modal,
  Footer
} from "../components";

class App extends React.Component {
  state = {
    laoding: true,
    data: new Map({}),
    stateWise: new List([]),
    cards: new Map({}),
    modal: false,
    districtData: new Map({}),
    selectedState: "",
    selectedData: new Map({})
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get(`${BASE_URL}${ALL_DATA_URL}`).then(_ => {
      this.setState({
        data: new Map(_.data),
        stateWise: new List(_.data.statewise).shift(),
        cards: new Map(_.data.statewise[0]),
        laoding: false
      });
    });
    axios.get(`${BASE_URL}${STATE_WISE_DATA_URL}`).then(_ => {
      this.setState({
        districtData: new Map(_.data)
      });
    });
  }

  getTime = () => {
    const newDate = new Date().toLocaleString();
    const lastUpdated = moment(
      this.state.data.getIn([
        "statewise",
        "0",
        "lastupdatedtime"
      ])
    );
    const mins = moment(newDate).diff(lastUpdated, "minute");
    if (mins >= 60) {
      const hrs = moment(newDate).diff(lastUpdated, "hour");
      return hrs + " hours";
    } else {
      return mins + " mins";
    }
  }

  renderTime = () => {
    const newDate = new Date().toLocaleString();
    const lastUpdated = moment(
      this.state.data.getIn([
        "statewise",
        "0",
        "lastupdatedtime"
      ])
    );
    const mins = moment(newDate).diff(lastUpdated, "minute");
    if (mins >= 60) {
      const hrs = moment(newDate).diff(lastUpdated, "hour");
      return hrs;
    } else {
      return mins;
    }
  }

  onStateSelect = _ => {
    this.setState({
      modal: true,
      selectedState: _,
      selectedData: new Map(this.state.districtData.getIn([_, "districtData"]))
    });
  }

  onModalToggle = () => {
    this.setState({
      modal: false,
      selectedState: "",
      selectedData: new Map({})
    });
  }

  render() {
    if (this.state.laoding) {
      return (
        <Loader />
      );
    }
    const { data, stateWise, cards, selectedData, selectedState, modal } = this.state;
    return (
      <div className={"container-wrapper"}>
        <Header />
        <Banner
          cards={cards}
        />
        <LastUpdated
          getTime={this.getTime}
          fetchData={this.fetchData}
          renderTime={this.renderTime}
          data={data}
        />
        <Cards
          cards={cards}
        />
        <Heading
          stateWise={stateWise}
        />
        <Table
          onStateSelect={this.onStateSelect}
          stateWise={stateWise}
        />
        {
          modal &&
          <Modal
            onModalToggle={this.onModalToggle}
            selectedState={selectedState}
            selectedData={selectedData}
          />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
