import React, { Component } from "react";
import "./card.css";

export class NewsItem extends Component {
  render() {
    let { title, imageUrl, newsUrl } = this.props;

    return (
      <div className="">
        <div className="card">
          <img src={!imageUrl? "https://seeklogo.com/images/B/bbc-world-news-logo-10255C2E3B-seeklogo.com.png" : imageUrl} className="card-img-top main" alt="..." />

          <div className="card-details">
            <h5 class="card-title text-title">{title} </h5>
            {/* <p class="card-text txt">
            {description}...
            </p> */}
          </div>
          <a href={newsUrl} target="_blank" rel="noreferrer"><button className="card-button">Read More</button></a>
        </div>
      </div>
    );
  }
}

export default NewsItem;


