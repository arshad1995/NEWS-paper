import React, { Component } from "react";
import Header from "./components/Header/header";
import Buttons from "./components/Buttons/buttons";
import NewsCard from "./components/NewsCard/newscard";

import "./App.css";

let channels = [
  {
    name: "The times of india",
    id: 1
  },
  {
    name: "Ndtv.com",
    id: 2
  },
  {
    name: "Indianexpress.com",
    id: 3
  },
  {
    name: "Scroll.in",
    id: 4
  },
  {
    name: "Cnbctv18.com",
    id: 5
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name={"News"} />

        <div className="centerButton">
          {channels.map(news => (
            <Buttons newschannel={news.name} id={news.id} />
          ))}
        </div>
        {/* <NewsCard
          src={
            "https://i-invdn-com.akamaized.net/trkd-images/LYNXNPEF41017_L.jpg"
          }
          headline={
            "Junk food could be banned for Texas food stamp recipients - KTRK-TV"
          }
          details={
            <p>
              "By Swati Pandey\r\nSYDNEY (Reuters) - Asian markets marked time
              on Thursday with two major centers - Japan and China - shut for
              holidays while the dollar held on to overnight gains after the
              U.S. central bank poured cold water on rate cut
              expectations.\r\nAustral… [+3949 chars]"
            </p>
          }
          name={<p>Author:Reuters</p>}
        /> */}
      </div>
    );
  }
}

export default App;
