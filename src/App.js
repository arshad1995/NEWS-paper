import React, { Component } from "react";
import Header from "./components/Header/header";
import Buttons from "./components/Buttons/buttons";
import NewsCard from "./components/NewsCard/newscard";

import "./App.css";

let channels = [
  {
    name: "The Times of India",
    channel_id: "the-times-of-india",
    id: 1
  },
  {
    name: "The Hindu",
    channel_id: "the-hindu",
    id: 2
  },
  {
    name: "CNBC",
    channel_id: "cnbc",
    id: 3
  },
  {
    name: "Al Jazeera English",
    channel_id: "al-jazeera-english",
    id: 4
  },
  {
    name: "ESPN Cric Info",
    channel_id: "espn-cric-info",
    id: 5
  },
  {
    name: "CNN",
    channel_id: "cnn",
    id: 6
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
    this.fetchNews("the-times-of-india");
  }

  fetchNews = channel_id => {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=${channel_id}&apiKey=539240fb4d8d48bc9657e4c6fadfb939`
    )
      .then(data => data.json())
      // .then(data=>console.log(data))
      .then(data => this.setState({ articles: data.articles }))
      .catch(e => e);
  };

  render() {
    return (
      <div className="App">
        <Header name={"News"} />

        <div className="centerButton">
          {channels.map(news => (
            <Buttons
              newschannel={news.name}
              id={news.id}
              channel_id={news.channel_id}
              fetch={cid => this.fetchNews(cid)}
            />
          ))}
        </div>
        <div className="desc">
          {this.state.articles.map(body => (
            <NewsCard
              urlToImage={body.urlToImage}
              title={body.title}
              description={body.description}
              author={body.author}
              url={body.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

//the-times-of-india
//the-hindu
//cnbc
//al-jazeera-english
// cnn
// espn-cric-info
