import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
     <div className="bg-black ">
         <div className="container my-3 " style={{ display: "contents" }}>
        <h1 className="p-2 bg-black text-white">Top Headlines :</h1>
        <div className="row m-2">
          <div className="col-md-4">
            <NewsItem title="myTITLE" description="mydesc" imageUrl="https://twt-thumbs.washtimes.com/media/image/2023/05/18/AM_Radio_in_Cars_Congress_50517_c0-106-3951-2410_s1200x700.jpg?e7ec91e5be89a165f18c319a3917c752e74cc158" />
          </div>
          <div className="col-md-4">
          <NewsItem title="myTITLE" description="mydesc" imageUrl="https://twt-thumbs.washtimes.com/media/image/2023/05/18/AM_Radio_in_Cars_Congress_50517_c0-106-3951-2410_s1200x700.jpg?e7ec91e5be89a165f18c319a3917c752e74cc158" />
          </div>
          <div className="col-md-4">
          <NewsItem title="myTITLE" description="mydesc" imageUrl="https://twt-thumbs.washtimes.com/media/image/2023/05/18/AM_Radio_in_Cars_Congress_50517_c0-106-3951-2410_s1200x700.jpg?e7ec91e5be89a165f18c319a3917c752e74cc158" />
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default News;
