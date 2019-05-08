import React, { Component } from "react";
import Header from "../Header/header";
import NewsCard from "../NewsCard/newscard";
import Buttons from "../Buttons/buttons";
import "../../App.module.css";
import "./News.css";

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
class News extends Component {
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
      <div>
        <div>
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
      </div>
    );
  }
}

export default News;
