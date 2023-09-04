import React, { Component } from "react";
import "./card.scss";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl} = this.props;

    return (
      <div>
        <div className="container">
          <div className="post">
            <div className="header_post">
              <img
                src={imageUrl}
                alt=""
              />
            </div>

            <div className="body_post">
              <div className="post_content">
                <h1>{title}</h1>
                <p>
                  {description}
                </p>

                <div className="container_infos">
                  <div className="postedBy">
                    <span>author</span>
                    John Doe
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
