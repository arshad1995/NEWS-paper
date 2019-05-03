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
// let iteams = [
//   {
//     src: "https://i-invdn-com.akamaized.net/trkd-images/LYNXNPEF41017_L.jpg",
//     headline:
//       "Junk food could be banned for Texas food stamp recipients - KTRK-TV",
//     description:
//       "By Swati Pandey SYDNEY (Reuters) - Asian markets marked time  on Thursday with two major centers - Japan and China - shut for holidays while the dollar held on to overnight gains after the",
//     Author: "Reuters"
//   },
//   {
//     src: "https://i-invdn-com.akamaized.net/trkd-images/LYNXNPEF41017_L.jpg",
//     headline:
//       "Junk food could be banned for Texas food stamp recipients - KTRK-TV",
//     description:
//       "By Swati Pandey SYDNEY (Reuters) - Asian markets marked time  on Thursday with two major centers - Japan and China - shut for holidays while the dollar held on to overnight gains after the",
//     Author: "Reuters"
//   }
// ];

class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=539240fb4d8d48bc9657e4c6fadfb939 "
    )
      .then(data => data.json())

      .then(data => this.setState({ articles: data.articles }))
      .catch(e => e);
  }

  render() {
    return (
      <div className="App">
        <Header name={"News"} />

        <div className="centerButton">
          {channels.map(news => (
            <Buttons newschannel={news.name} id={news.id} />
          ))}
        </div>
        <div className="desc">
          {this.state.articles.map(body => (
            <NewsCard
              urlToImage={body.urlToImage}
              title={body.title}
              description={body.description}
              author={body.author}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
