import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=07220f8636694150a9e1a7be4fd9113d&page=1&pageSize=9     ";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults });
  }

  handelPrevClick = async () => {

    if(this.state.page - 1 < 1 ){
        // Noothing to do if page count is less than 1 
    }else{
      
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=07220f8636694150a9e1a7be4fd9113d&page=${
        this.state.page - 1
      }&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles });
  
      this.setState({
        page: this.state.page - 1,
      });
    }

  };

  handelNextClick = async () => {

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/9)){
      // Noothing to do if page count is greater than the no of resukt
    }else{
      
          let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=07220f8636694150a9e1a7be4fd9113d&page=${
            this.state.page + 1
          }&pageSize=9 `;
          let data = await fetch(url);
          let parsedData = await data.json();
          this.setState({ articles: parsedData.articles });
      
          this.setState({
            page: this.state.page + 1,
          });
    }
  };

  render() {
    return (
      <div className=" outer">
        <div className="container my-3 " style={{ display: "contents" }}>
          <h1 className="p-2  text-white d-flex justify-content-center headline">Meta-News's Top Headlines</h1>
          <div className="row ">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 com" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 108) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}


            {/* Page changer  */}
            <div className="bottomsec">
              <div className="footerbtn">
                <div className="prev">
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow1"></span>
                    </span>
                    <span
                      class="button-text"
                      aria-disabled={this.state.page <= 1}
                      onClick={this.handelPrevClick}
                    >
                      previous page
                    </span>
                  </button>
                </div>

                <div className="nxt">
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow2"></span>
                    </span>
                    <span class="button-text" onClick={this.handelNextClick}>
                      Next page
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
